const express = require("express");
const database = require("../configures/databse");
const donor = express.Router();
const jwt = require("jsonwebtoken");

// ALL DONORS
donor.get("/", (req, res) => {
  try {
    const searchsql = `SELECT * FROM donors WHERE donor_ifdeleted='0'`;

    database.query(searchsql, (err, results) => {
      if (err) {
        res.status(400).json({
          server: false,
          message: "no results found",
          err,
        });
      } else {
        if (results.length === 0) {
          res.status(400).json({
            server: false,
            message: "donors not found",
            results,
          });
        } else {
          res.status(200).json({
            server: true,
            message: "donors found succesfully",
            results,
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      server: false,
      error,
    });
  }
});

// UNIQUE DONORS
donor.get("/donor", (req, res) => {
  try {
    const headeKey = process.env.JWT_HEADER_KEY;
    const secureKey = process.env.JWT_SECURE_KEY;

    const header = req.header(headeKey);
    const verify = jwt.verify(header, secureKey);

    if (verify) {
      const donorId = verify.donor_id;

      const searchsql = `SELECT * FROM donors WHERE donor_id='${donorId}' AND donor_ifdeleted='0'`;

      database.query(searchsql, (err, results) => {
        if (err) {
          res.status(400).json({
            server: false,
            message: "no results found",
            err,
          });
        } else {
          if (results.length === 0) {
            res.status(400).json({
              server: false,
              message: "donor not found",
              results,
            });
          } else {
            res.status(200).json({
              server: true,
              message: "donor found succesfully",
              results,
            });
          }
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

// SEARCHING  DONORS LOCATIONS USING LOCATION FROM UI
donor.post("/search/", (req, res) => {
  try {
    const search = req.query.q;

    const getSql = `SELECT * FROM donors WHERE donor_address1 LIKE '%${search}%' OR donor_address2 LIKE '%${search}%'`;

    database.query(getSql, (err, results) => {
      if (err) {
        res.status(400).json({
          server: false,
          message: "invalid info",
          err,
        });
      } else {
        if (results.length === 0) {
          res.status(400).json({
            server: false,
            message: "donor not found",
          });
        } else {
          const filtering = results.filter((filters) =>
            filters.donor_blood_group.includes(req.body.blood_group)
          );
          res.status(200).json({
            server: true,
            message: "donor found",
            filtering,
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      server: false,
      error,
    });
  }
});
// CREATING DONOR
donor.post("/create", (req, res) => {
  try {
    const id = Math.floor(10000000 + Math.random() * 9999999);
    const name = req.body.donor_name;
    const mobile = req.body.donor_mobile;
    const email = req.body.donor_email;
    const blood = req.body.donor_blood;
    const age = req.body.donor_age;

    const checkingUserEx = `SELECT * FROM donors WHERE donor_ifdeleted='0'`;

    database.query(checkingUserEx, (err, chekingResults) => {
      if (err) {
        res.status(400).json({
          server: false,
          message: "there is an error while checking",
          err,
        });
      } else {
        if (chekingResults.length === 0) {
          res.status(400).json({
            server: false,
            message: "donors not found",
          });
        } else {
          const checkingEmail = `SELECT * FROM donors WHERE donor_email='${email}'`;

          database.query(checkingEmail, (err, emailResults) => {
            if (err) {
              res.status(400).json({
                server: false,
                message: "there is an error while checking",
                err,
              });
            } else {
              if (emailResults.length !== 0) {
                res.status(400).json({
                  server: false,
                  message: "Email is already taken, Try to add new.",
                });
              } else {
                const checkingMobile = `SELECT * FROM donors WHERE donor_mobile ='${mobile}' `;

                database.query(checkingMobile, (err, mobileResults) => {
                  if (err) {
                    res.status(400).json({
                      server: false,
                      message: "there is an error while checking",
                      err,
                    });
                  } else {
                    if (mobileResults.length !== 0) {
                      res.status(400).json({
                        server: false,
                        message: "Number is already taken, Try to add new.",
                      });
                    } else {
                      const sql = `INSERT INTO donors (donor_id, donor_name, donor_mobile, donor_email, donor_password, donor_age,
                         donor_blood_group, donor_status, donor_ifdeleted, donor_role)
                    VALUES('${id}', '${name}', '${mobile}', '${email}', '${req.body.donor_password}', '${age}', '${blood}', '0', '0', '0')`;

                      database.query(sql, (err, results) => {
                        if (err) {
                          res.status(400).json({
                            server: false,
                            message: "unable to create user",
                            err,
                          });
                        } else {
                          if (results.length === 0) {
                            res.status(400).json({
                              server: false,
                              message: "user creation failed",
                              results,
                            });
                          } else {
                            res.status(200).json({
                              server: true,
                              message: "user created succesfully",
                              results,
                            });
                          }
                        }
                      });
                    }
                  }
                });
              }
            }
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      server: false,
      error,
    });
  }
});
// UPDATE DONOR DETAILS
donor.put("/update/details", (req, res) => {
  try {
    const name = req.body.donor_name;
    const email = req.body.donor_email;
    const mobile = req.body.donor_mobile;
    const blood = req.body.donor_blood;
    const password = req.body.donor_password;
    const age = req.body.donor_age;

    const headeKey = process.env.JWT_HEADER_KEY;
    const secureKey = process.env.JWT_SECURE_KEY;

    const header = req.header(headeKey);
    const verify = jwt.verify(header, secureKey);

    if (verify) {
      const donorId = verify.donor_id;

      const checkingUserEx = `SELECT * FROM donors WHERE donor_id='${donorId}'`;

      database.query(checkingUserEx, (err, chekingResults) => {
        if (err) {
          res.status(400).json({
            server: false,
            message: "there is an error while checking",
            err,
          });
        } else {
          if (chekingResults.length === 0) {
            res.status(400).json({
              server: false,
              message: "donor not exist",
            });
          } else {
            const taking = chekingResults[0].donor_password;

            if (taking === password) {
              const sql = `UPDATE donors SET donor_name='${name}', donor_email='${email}', donor_mobile='${mobile}', donor_blood_group='${blood}',
        donor_age='${age}' WHERE donor_id='${donorId}' AND donor_password='${taking}'`;

              database.query(sql, (err, results) => {
                if (err) {
                  res.status(400).json({
                    server: false,
                    message: "update failed",
                    err,
                  });
                } else {
                  res.status(200).json({
                    server: true,
                    message: "updated",
                    results,
                  });
                }
              });
            } else {
              res.status(400).json({
                server: false,
                message: "wrong password",
              });
            }
          }
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
      message: "invalid info",
      error,
    });
  }
});
// UPDATE DONOR ADDRESS WHILE REGISTRATION
donor.put("/add/address", (req, res) => {
  try {
    const address1 = req.body.donor_address1;
    const address2 = req.body.donor_address2;

    const checkingUserEx = `SELECT * FROM donors WHERE donor_ifdeleted='0'`;

    database.query(checkingUserEx, (err, chekingResults) => {
      if (err) {
        res.status(400).json({
          server: false,
          message: "there is an error while checking",
          err,
        });
      } else {
        if (chekingResults.length === 0) {
          res.status(400).json({
            server: false,
            message: "donors not exist",
          });
        } else {
          const checkingEmail = `SELECT * FROM donors WHERE donor_email='${req.body.donor_email}'`;

          database.query(checkingEmail, (err, EmailResults) => {
            if (err) {
              res.status(400).json({
                server: false,
                message: "there is an error while checking",
                err,
              });
            } else {
              if (EmailResults.length === 0) {
                res.status(400).json({
                  server: false,
                  message: "donors not exist",
                });
              } else {
                const checkingMobile = `SELECT * FROM donors WHERE donor_mobile='${req.body.donor_mobile}'`;

                database.query(checkingMobile, (err, mobileResults) => {
                  if (err) {
                    res.status(400).json({
                      server: false,
                      message: "there is an error while checking",
                      err,
                    });
                  } else {
                    if (mobileResults.length === 0) {
                      res.status(400).json({
                        server: false,
                        message: "donors not exist",
                      });
                    } else {
                      const sql = `UPDATE donors SET donor_address1 ='${address1}', donor_address2 ='${address2}'
                       WHERE donor_email='${req.body.donor_email}' AND donor_mobile='${req.body.donor_mobile}'`;

                      database.query(sql, (err, results) => {
                        if (err) {
                          res.status(400).json({
                            server: false,
                            err,
                          });
                        } else {
                          res.status(200).json({
                            server: true,
                            message: "address added",
                            results,
                          });
                        }
                      });
                    }
                  }
                });
              }
            }
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      server: false,
      message: "invalid info",
      error,
    });
  }
});
// UPDATE DONOR ADDRESS
donor.put("/update/address", (req, res) => {
  try {
    const address1 = req.body.donor_address1;
    const address2 = req.body.donor_address2;
    const password = req.body.donor_password;
    const headeKey = process.env.JWT_HEADER_KEY;
    const secureKey = process.env.JWT_SECURE_KEY;

    const header = req.header(headeKey);
    const verify = jwt.verify(header, secureKey);

    if (verify) {
      const donorId = verify.donor_id;

      const checkingUserEx = `SELECT * FROM donors WHERE donor_id='${donorId}' AND donor_ifdeleted='0'`;

      database.query(checkingUserEx, (err, chekingResults) => {
        if (err) {
          res.status(400).json({
            server: false,
            message: "there is an error while checking",
            err,
          });
        } else {
          if (chekingResults.length === 0) {
            res.status(400).json({
              server: false,
              message: "donor not exist",
            });
          } else {
            const sql = `UPDATE donors SET donor_address1 ='${address1}', donor_address2 ='${address2}' WHERE donor_id='${donorId}' AND donor_password='${password}' `;

            database.query(sql, (err, results) => {
              if (err) {
                res.status(400).json({
                  server: false,
                  err,
                });
              } else {
                res.status(200).json({
                  server: true,
                  message: "updated",
                  results,
                });
              }
            });
          }
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
      message: "invalid info",
      error,
    });
  }
});
// LOGIN DONOR
donor.post("/login", (req, res) => {
  try {
    const mobile = req.body.donor_mobile;
    const email = req.body.donor_email;
    const password = req.body.donor_password;

    const loginSql = `SELECT * FROM donors WHERE donor_ifdeleted='0'`;

    database.query(loginSql, (err, results) => {
      if (err) {
        res.status(400).json({
          server: false,
          err,
        });
      } else {
        if (results.length === 0) {
          res.status(400).json({
            server: false,
            message: "donor not found",
          });
        } else {
          const loginSqlQuery = `SELECT * FROM donors WHERE donor_email = '${email}' || donor_mobile='${mobile}' `;

          database.query(loginSqlQuery, (error, loginresults) => {
            if (error) {
              res.status(400).json({
                server: false,
                message: "donor not found try to register",
                error,
              });
            } else {
              if (loginresults.length === 0) {
                res.status(400).json({
                  server: false,
                  message: "donor not found try to Register",
                });
              } else {
                const takingPass = loginresults[0].donor_password;

                if (takingPass == password) {
                  const donor = {
                    Time: Date(),
                    donor_id: loginresults[0].donor_id,
                    role: loginresults[0].donor_role,
                  };

                  const token = jwt.sign(donor, process.env.JWT_SECURE_KEY, {
                    // expiresIn: process.env.JWT_EXPIREIN,
                  });

                  res.status(200).json({
                    server: true,
                    message: "donor login succesful",
                    token,
                  });
                } else {
                  res.status(400).json({
                    server: false,
                    message: "incorrect password",
                  });
                }
              }
            }
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      server: false,
      error,
    });
  }
});
// AUTHENTICATING DONOR
donor.post("/auth", (req, res) => {
  try {
    const headeKey = process.env.JWT_HEADER_KEY;
    const secureKey = process.env.JWT_SECURE_KEY;

    const header = req.header(headeKey);
    const verify = jwt.verify(header, secureKey);

    if (verify) {
      const userID = verify.donor_id;

      const authSql = `SELECT * FROM donors WHERE donor_id ='${userID}' AND donor_ifdeleted='0'`;

      database.query(authSql, (error, results) => {
        if (error) {
          res.status(400).json({
            server: false,
            message: "failed to authenticate",
            error,
          });
        } else {
          res.status(200).json({
            server: true,
            message: "Donor succesfully authenticated",
            results,
          });
        }
      });
    } else {
      res.status(400).json({
        server: false,
        message: "token invalid",
      });
    }
  } catch (error) {
    res.status(500).json({
      server: false,
      error,
    });
  }
});

// ADDING MULTIPLE DONORS
donor.post("/create/multiple", (req, res) => {
  try {
    const name = req.body.donor_name;
    const mobile = req.body.donor_mobile;
    const email = req.body.donor_email;
    const blood = req.body.donor_blood;
    const age = req.body.donor_age;


    const checkingUserEx = `SELECT * FROM donors WHERE donor_ifdeleted='0'`;

    database.query(checkingUserEx, (err, chekingResults) => {
      if (err) {
        res.status(400).json({
          server: false,
          message: "there is an error while checking",
          err,
        });
      } else {
        if (chekingResults.length === 0) {
          res.status(400).json({
            server: false,
            message: "donors not found",
          });
        } else {
          const checkingEmail = `SELECT * FROM donors WHERE donor_email='${email}'`;

          database.query(checkingEmail, (err, emailResults) => {
            if (err) {
              res.status(400).json({
                server: false,
                message: "there is an error while checking",
                err,
              });
            } else {
              if (emailResults.length !== 0) {
                res.status(400).json({
                  server: false,
                  message: "Email is already taken, Try to add new.",
                });
              } else {
                const checkingMobile = `SELECT * FROM donors WHERE donor_mobile ='${mobile}' `;

                database.query(checkingMobile, (err, mobileResults) => {
                  if (err) {
                    res.status(400).json({
                      server: false,
                      message: "there is an error while checking",
                      err,
                    });
                  } else {
                    if (mobileResults.length !== 0) {
                      res.status(400).json({
                        server: false,
                        message: "Number is already taken, Try to add new.",
                      });
                    } else {
                      const sql = `INSERT INTO donors (donor_id, donor_name, donor_mobile, donor_email, donor_password, donor_age,
                         donor_blood_group, donor_status, donor_ifdeleted, donor_role)
                    VALUES ?`;
                    const values = [
                      [
                        Math.floor(10000000 + Math.random() * 9999999), 'Nandipet praveen', '9494949250', '', '123456', '30', 'B+', 0, 0, 0
                      ],
                      [
                        Math.floor(10000000 + Math.random() * 9999999), 'Ganga prasad', '9550315508', '', '123456', '29', 'B+', 0, 0, 0
                      ],
                      [
                        Math.floor(10000000 + Math.random() * 9999999), 'Srikanth J', '9059987721', '', '123456', '31', 'B+', 0, 0, 0
                      ],
                      [
                        Math.floor(10000000 + Math.random() * 9999999), 'Lava kumar', '8317638529', '', '123456', '32', 'B+', 0, 0, 0
                      ],
                      [
                        Math.floor(10000000 + Math.random() * 9999999), 'Shanky praveen', '7675800186', '', '123456', '33', 'B+', 0, 0, 0
                      ],
                      [
                        Math.floor(10000000 + Math.random() * 9999999), 'Ramakrishna bhyri', '7995322429', '', '123456', '28', 'B+', 0, 0, 0
                      ],
                     
                    ]

                      database.query(sql,[values], (err, results) => {
                        if (err) {
                          res.status(400).json({
                            server: false,
                            message: "unable to create user",
                            err,
                          });
                        } else {
                          if (results.length === 0) {
                            res.status(400).json({
                              server: false,
                              message: "donors creation failed",
                              results,
                            });
                          } else {
                            res.status(200).json({
                              server: true,
                              message: "donors created succesfully",
                              results,
                            });
                          }
                        }
                      });
                    }
                  }
                });
              }
            }
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      server: false,
      error,
    });
  }
});
module.exports = donor;
