const express = require('express')

const db = require('../configures/databse')
const crypto = require('crypto')
const Razorpay = require('razorpay')

const pay = express()

const instance = new Razorpay({
    key_id : process.env.RZP_key_id,
    key_secret : process.env.RZP_key_secret
})

pay.post('/create', (req, res)=>{
    try {
 const donorID = Math.floor(10000000 * Math.random() + 999999999)
        const test = {
            currency : req.body.currency,
            amount : req.body.amount * 100,
            receipt : '123456789'
        }
    instance.orders.create(test, (err, results)=>{
        if (err) {
            res.status(400).json({
                server : false,
                message : "payment failed to create",
                err
            })
        } else {
    const creatingPAyment = `INSERT INTO donations(donation_id, donator_name, donator_mobile, donator_email, donator_address,
        donation_amount, rzp_id, rzp_payment_id, rzp_signiture, donation_iffailed, donation_status)  
        VALUES ('${donorID}', '${req.body.donator_name}', '${req.body.donator_mobile}', '${req.body.donator_email}', '${req.body.donator_address}',
        '${results.amount / 100}', '${results.id}', '', '', '0','0')`;

        db.query(creatingPAyment, (err, paymentresults) => {
          if (err) {
            res.status(400).json({
              server: false,
              message: "payment created but not added in database",
              err,
            });
          } else {
            const resultsValues = {
                id : results.id,
                amount : results.amount,
            }
            res.status(200).json({
              server: true,
              message: "Payment succesful",
              resultsValues
            });
          }
        });
        }
    })

    } catch (error) {
        res.status(500).json({
            server : false,
            error
        })
    }
})

pay.put("/verify", (req, res)=>{
    try {
    const rzpSigture = req.headers['x-razorpay-signiture']
    const rzpOrderId = req.body.rzp_id
    const rzpPaymentId = req.body.rzp_paymentId

let hmc = crypto.createHmac('sha256', process.env.RZP_key_secret)

hmc.update(rzpOrderId + '|' + rzpPaymentId)

const genratedsigniture = hmc.digest('hex')

if (genratedsigniture === rzpSigture) {
    const updatePayment= `UPDATE donations SET rzp_payment_id='${rzpPaymentId}', rzp_signiture ='${rzpSigture}', donation_status ='1'
    WHERE rzp_id ='${rzpOrderId}'`
    db.query(updatePayment, (err, results)=>{
        if (err) {
            res.status(400).json({
                server : false,
                message : "payment failed to verify",
                err
            })
        } else {
            res.status(200).json({
                server : true,
                message : "payment verified succesfully",
                results
            })
        }
    })
} else {
    res.status(200).json({
        server : true,
        message : "payment verification successful",
    })
}

    } catch (error) {
        res.status(500).json({
            server : false,
            error
        })
    }
})

pay.get('/donations', (req, res)=>{
    try {
    const creatingPAyment = `SELECT * FROM donations`;

        db.query(creatingPAyment, (err, results) => {
          if (err) {
            res.status(400).json({
              server: false,
              message: "Invalid info.",
              err,
            });
          } else {
            if (results.length === 0) {
                res.status(400).json({
                    server: false,
                    message: "Donations not found.",
                    results,
                  });
            } else {
                res.status(200).json({
                    server: true,
                    message: "Donations found succesfully.",
                    results,
                  });
            }
          }
        });
    } catch (error) {
        res.json({
            error
        })
    }
})
module.exports = pay