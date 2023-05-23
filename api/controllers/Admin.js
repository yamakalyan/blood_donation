const express = require("express");
const database = require("../configures/databse");
const admin = express();
const jwt = require("jsonwebtoken");

// ALL DONORS
admin.get("/", (req, res) => {
  try {
    const headeKey = process.env.JWT_HEADER_KEY;
    const secureKey = process.env.JWT_SECURE_KEY;

    const header = req.header(headeKey);
    const verify = jwt.verify(header, secureKey);

    if (verify.role == 1) {
        
      const searchsql = `SELECT * FROM donors WHERE donor_ifdeleted='0' `;

      database.query(searchsql, (err, results) => {
        if (err) {
          res.status(400).json({
            server: false,
            message: "no results found",
            err,
          });
        } else {
          res.status(200).json({
            server: true,
            message: "donor's found succesfully",
            results,
          });
        }
      });
    } else {
      res.status(400).json({
        server: false,
        message: "invalid token",
      });
    }
  } catch (error) {
    res.status(500).json({
      server: false,
      error,
    });
  }
});

// UPDATE DONOR DETAILS
admin.put("/edit", (req, res) => {
  try {
    const name = req.body.donor_name;
    const email = req.body.donor_email;
    const mobile = req.body.donor_mobile;
    const blood = req.body.donor_blood;
    const password = req.body.donor_password;
    const age = req.body.donor_age;
    const donorId = req.body.donor_id;

    const headeKey = process.env.JWT_HEADER_KEY;
    const secureKey = process.env.JWT_SECURE_KEY;

    const header = req.header(headeKey);
    const verify = jwt.verify(header, secureKey);

    if (verify.role == 1) {
      const sqlCHeck = `SELECT * FROM donors WHERE donor_id='${req.body.donor_id}' AND donor_ifdeleted='0' `;

      database.query(sqlCHeck, (err, results) => {
        if (err) {
          res.status(400).json({
            server: false,
            message: "internal error",
            err,
          });
        } else {
          if (results.length === 0) {
            res.status(400).json({
              server: false,
              message: "no donor selected",
            });
          } else {

            const takingId = results[0].donor_id

    const sql = `UPDATE donors SET donor_name='${name}', donor_email='${email}', donor_password='${password}', donor_mobile='${mobile}', donor_blood_group='${blood}',
      donor_age='${age}' WHERE donor_id='${takingId}' AND donor_ifdeleted='0'`;

            database.query(sql, (err, Editresults) => {
              if (err) {
                res.status(400).json({
                  server: false,
                  message: "internal error",
                  err,
                });
              } else {
                if (Editresults.length === 0) {
                    res.status(400).json({
                      server: false,
                      message: "Donor deleted failed",
                    });
                  } else {
                    res.status(200).json({
                      server: true,
                      message: "Donor updated succesfully",
                      results,
                    });
                  }
              }
            });
          }
        }
      });
    } else {
      res.status(400).json({
        server: false,
        message: "token not verified",
      });
    }
  } catch (error) {
    res.status(500).json({
      server: false,
      error,
    });
  }
});

// DELETE DONOR
admin.delete("/delete", (req, res) => {
  try {
    const headeKey = process.env.JWT_HEADER_KEY;
    const secureKey = process.env.JWT_SECURE_KEY;

    const header = req.header(headeKey);
    const verify = jwt.verify(header, secureKey);

    if (verify.role == 1) {
      const sqlCHeck = `SELECT * FROM donors WHERE donor_id='${req.body.donor_id}' AND donor_ifdeleted='0' `;

      database.query(sqlCHeck, (err, results) => {
        if (err) {
          res.status(400).json({
            server: false,
            message: "internal error",
            err,
          });
        } else {
          if (results.length === 0) {
            res.status(400).json({
              server: false,
              message: "No donor selected",
            });
          } else {
            const takingID = results[0].donor_id;

            const sql = `UPDATE donors SET donor_ifdeleted='1' WHERE donor_id='${takingID}' AND donor_ifdeleted='0'`;

            database.query(sql, (err, updateresults) => {
              if (err) {
                res.status(400).json({
                  server: false,
                  message: "internal error",
                  err,
                });
              } else {
                if (updateresults.length === 0) {
                  res.status(400).json({
                    server: false,
                    message: "Donor deleted failed",
                  });
                } else {
                  res.status(200).json({
                    server: true,
                    message: "Donor deleted succesfully",
                    results,
                  });
                }
              }
            });
          }
        }
      });
    } else {
      res.status(400).json({
        server: false,
        message: "token not verified",
      });
    }
  } catch (error) {
    res.status(500).json({
      server: false,
      error,
    });
  }
});

module.exports = admin;
