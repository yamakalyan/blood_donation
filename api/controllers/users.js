const express = require('express')
const database = require('../configures/databse')
const donor = express()

// ALL DONORS
donor.get('/', (req, res)=>{
    try {
        const searchsql = `SELECT * FROM donors`

        database.query(searchsql, (err, results)=>{
            if (err) {
                res.status(400).json({
                    server : false,
                    message : "no results found",
                    err
                })
            } else {
                res.status(200).json({
                    server : true,
                    message : "donor's found succesfully",
                    results
                })
            }
        })
    } catch (error) {
        res.status(500).json({
            server : false,
            error
        })
    }
})
// SEARCHING  DONORS LOCATIONS USING LOCATION FROM UI
donor.post('/search/', (req, res)=>{
    try {
    const search = req.query.q

    const getSql = `SELECT * FROM donors WHERE donor_address1 LIKE '%${search }%' OR donor_address2 LIKE '%${search}%'`

    database.query(getSql, (err, results)=>{
        if (err) {
            res.status(400).json({
                server : false,
                message : 'invalid info',
                err
            })
        } else {
            if (results.length === 0) {
                res.status(400).json({
                    server : false,
                    message : 'donor not found'
                })
            } else {
                const filtering = results.filter((filters)=>filters.donor_blood_group.includes(req.body.blood_group))
                res.status(200).json({
                    server : true,
                    message : "donor found",
                    filtering
                })
            }
        }
    })
    } catch (error) {
        res.status(500).json({
            server : false,
            error
        })
    }
})
// CREATING DONOR
donor.post('/create', (req, res)=>{
    try {
        const id = Math.floor(10000000 + Math.random() * 9999999)
        const name = req.body.donor_name
        const mobile = req.body.donor_mobile
        const email = req.body.donor_email
        const blood = req.body.donor_blood
        const address1 = req.body.donor_address1
        const address2 = req.body.donor_address2
        const age = req.body.donor_age

        const checkingUserEx =  `SELECT * FROM donors WHERE donor_mobile ='${mobile}' AND donor_email='${email}'`;

        database.query(checkingUserEx, (err, chekingResults)=>{
            if (err) {
                res.status(400).json({
                    server :false,
                    message : 'there is an error while checking',
                    err
                })
            } else {
                if (chekingResults.length != 0) {
                    res.status(400).json({
                        server : false,
                        message : 'donor already exist'
                    })
                } else {
                    const sql = `INSERT INTO donors (donor_id, donor_name, donor_mobile, donor_email, donor_age, donor_blood_group, donor_address1, donor_address2, donor_status, donor_ifdeleted)
                    VALUES('${id}', '${name}', '${mobile}', '${email}', '${age}', '${blood}', '${address1}', '${address2}', '0', '0')`

                    database.query(sql, (err, results)=>{
                        if (err) {
                            res.status(400).json({
                                server : false,
                                message : 'unable to create user',
                                err
                            })
                        } else {
                            res.status(200).json({
                                server :  true,
                                message : "user created succesfully",
                                results
                            })
                        }
                    })
                }
            }
        })

    } catch (error) {
        res.status(500).json({
            server : false,
            error
        })
    }
});
// UPDATE DONOR
donor.put('/update', (req, res)=>{
    try {
        const email = req.body.donor_email
        const mobile = req.body.donor_mobile
        const blood = req.body.donor_blood
        const password = req.body.donor_password
        const address1 = req.body.donor_address1
        const address2 = req.body.donor_address2
        const age = req.body.donor_age

        const checkingUserEx =  `SELECT * FROM donors WHERE donor_mobile ='${mobile}' AND donor_email='${email}'`;

        database.query(checkingUserEx, (err, chekingResults)=>{
            if (err) {
                res.status(400).json({
                    server :false,
                    message : 'there is an error while checking',
                    err
                })
            } else {
                if (chekingResults.length === 0) {
                    res.status(400).json({
                        server : false,
                        message : 'donor not exist'
                    })
                }else{
                    
                    const sql = `UPDATE donors SET donor_email='${email}', donor_mobile='${mobile}', donor_blood_group='${blood}', donor_address1='${address1}',
                    donor_address2='${address2}, donor_age='${age}' WHERE donor_email='${email}' AND donor_mobile='${mobile}'`
                
                database.query(sql, (err, results)=>{
                    if (err) {
                        res.status(400).json({
                            server : false,
                            err
                        })
                    } else {
                        res.status(200).json({
                            server : true,
                            message : "updated",
                            results
                        })
                    }
                })
                }
            }
        })
    } catch (error) {
        res.status(500).json({
            server : false,
            message : "invalid info",
            error
        })
    }
});

module.exports = donor
