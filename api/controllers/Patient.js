const express = require("express");
const database = require("../configures/databse");
const patient = express.Router();

patient.post("/create", (req, res) => {
  try {
    const id = Math.floor(1000000 + Math.random() * 9999999);
    const name = req.body.patient_name;
    const mobile = req.body.patient_mobile;
    const age = req.body.patient_age;
    const bloodGroup = req.body.patient_blood_group;
    const aadhar = req.body.patient_aadhar;
    const hospital = req.body.patient_hospital;
    const Location = req.body.patient_location;

    const creationSql = `INSERT INTO patients_data(patient_id, patient_name, patient_mobile, patient_age, patient_blood_group,
            aadhar_number, hospital_details, patient_address, location, patient_ifdeleted) 
            VALUES ('${id}', '${name}', '${mobile}', '${age}', '${bloodGroup}', '${aadhar}', '${hospital}','${req.body.patient_address}', '${Location}', '0')`;

    database.query(creationSql, (err, results) => {
      if (err) {
        res.status(400).json({
          server: false,
          message: "patient failed to add",
          err,
        });
      } else {
        res.status(200).json({
          server: true,
          message: "patient succesfully added",
          results,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      server: false,
      error,
    });
  }
});
module.exports = patient;
