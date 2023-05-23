import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { serviceUrl } from "../helpers/Helper";

function PatientDetails() {
  const [patientName, setPatientName] = useState("");
  const [patientMobile, setPatientMobile] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientBloodgroup, setPatientBloodgroup] = useState("");
  const [patientaadhar, setPatientAadhar] = useState("");
  const [hospital, setHospital] = useState("");
  const [requiredLocation, setRequiredLocation] = useState("");
  const [patientAddress, setPatientAddress] = useState("");

  const navigator = useNavigate();
  const params = useParams();
  const lowerCaseLocation = requiredLocation.toLowerCase();
  const url = serviceUrl()

  const handlePatientDetails = (e) => {
    e.preventDefault();
    var options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patient_name: patientName,
        patient_mobile: patientMobile,
        patient_age: patientAge,
        patient_blood_group: patientBloodgroup || params.group,
        patient_aadhar: patientaadhar,
        patient_hospital: hospital,
        patient_address: patientAddress,
        patient_location: lowerCaseLocation,
      }),
    };
    const endpoint = url + "patient/create"
    fetch(endpoint, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.server) {
          navigator(
            `/finder/${patientBloodgroup || params.group}/${lowerCaseLocation}`
          );
        } else {
        }
      });
  };
  return (
    <>
      <div className="container my-4">
        <div className="d-flex flex-row shadow p-3 bg-light">
          <div className="col-sm-12 col-md-12 col-lg-12 mt-3">
            <h2 className="text-center text-primary">Add Patient Details.</h2>
            <hr />
            <h6 className="text-center">
              We just take patient details for confirmation.
            </h6>
            <hr />
            <form onSubmit={handlePatientDetails}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Patient Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Patient name"
                    onChange={(e) => setPatientName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Patient Mobile</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setPatientMobile(e.target.value)}
                    required
                    placeholder="Patient mobile"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Hospital Details</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setHospital(e.target.value)}
                  required
                  placeholder="Ex : Apollo, nimms etc...."
                />
              </div>
              <div className="form-group">
                <label>Patient Home address</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setPatientAddress(e.target.value)}
                  required
                  placeholder="Ex : Please mention main city Armoor, Nizambad, Hyderabad"
                />
              </div>

              <div className="form-group">
                <label>Blood Required Location (or) City</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setRequiredLocation(e.target.value)}
                  required
                  placeholder="Ex : Please mention main city Armoor, Nizambad, Hyderabad"
                />
              </div>

              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>Patient Aadhar card number</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPatientAadhar(e.target.value)}
                    required
                    placeholder="1234 5678 9000"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Patient Age</label>
                  <input
                    type="number"
                    placeholder="Ex: 23, 34, 54, 64...."
                    onChange={(e) => {
                        if (e.target.value <= 100) {
                            setPatientAge(e.target.value)
                        } else {
                            alert("age should be below 100")   
                        }
                    }}
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Select Blood Group</label>
                  <select
                    className="form-control"
                    onChange={(e) => setPatientBloodgroup(e.target.value)}
                    required
                  >
                    <option value={params.group}>{params.group}</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
              <div className="form-group d-flex justify-content-center">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    required
                  />
                  <label className="form-check-label">
                    Agree terms and conditions
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Submit and Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientDetails;
