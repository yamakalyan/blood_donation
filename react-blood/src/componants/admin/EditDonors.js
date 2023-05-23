import React, { useState } from "react";

export default function EditDonors() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const [donorAddress1, setDonorAddress1] = useState("");
  const [donorAddress2, setDonorAddress2] = useState("");

  const [pincode1, setPincode1] = useState("");
  const [pincode2, setPincode2] = useState("");

  const [donorState1, setDonorState1] = useState("");
  const [donorState2, setDonorState2] = useState("");

  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");

  const address1 =
    donorAddress1 + " " + city1 + " " + donorState1 + " " + pincode1;
  const address2 =
    donorAddress2 + " " + city2 + " " + donorState2 + " " + pincode2;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md col-lg">
            <div className="container">
              <div className="row">
                <div className="col-md col">
                  <h4 className="text-center text-primary">Edit details</h4>
                  <hr />
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="@gmail"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Mobile"
                      required
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md col-6">
                      {/* <label>Blood Group</label> */}
                      <select
                        type="text"
                        className="form-control"
                        onChange={(e) => setBloodGroup(e.target.value)}
                        required
                      >
                        <option value="">Blood group..</option>
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
                    <div className="form-group col-md col-6">
                      {/* <label>Age</label> */}
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Age"
                        required
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md col-lg">
                <div className="container">
                  <div className="form-row">
                    <div className="form-group col-md col-lg-6">
                      {/* <label>Address 2</label> */}
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="Enter address 1."
                        onChange={(e) => setDonorAddress1(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md col-lg-6">
                      {/* <label>City</label> */}
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="Enter main City."
                        onChange={(e) => setCity1(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md col-6">
                      {/* <label>State</label> */}
                      <select
                        className="form-control"
                        required
                        onChange={(e) => setDonorState1(e.target.value)}
                      >
                        <option value="">State...</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Andrapradesh">AndraPradesh</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Odisha">Odisha</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md col-6">
                      {/* <label>Pincode</label> */}
                      <input
                        type="number"
                        className="form-control"
                        required
                        placeholder="Pincode."
                        onChange={(e) => setPincode1(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md col-lg-6">
                      {/* <label>Address 2</label> */}
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="Enter address 2."
                        onChange={(e) => setDonorAddress2(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md col-lg-6">
                      {/* <label>City</label> */}
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="Enter main City."
                        onChange={(e) => setCity2(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md col-6">
                      {/* <label>State</label> */}
                      <select
                        className="form-control"
                        required
                        onChange={(e) => setDonorState2(e.target.value)}
                      >
                        <option value="">State...</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Andrapradesh">AndraPradesh</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Odisha">Odisha</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md col-6">
                      {/* <label>Pincode</label> */}
                      <input
                        type="number"
                        className="form-control"
                        required
                        placeholder="Pincode."
                        onChange={(e) => setPincode2(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
