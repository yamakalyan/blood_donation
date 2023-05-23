import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Reg() {
  const [donorName, setDonorname] = useState("");
  const [donorMobile, setDonorMobile] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorAge, setDonorAge] = useState("");
  const [donorBloodGroup, setBloodGroup] = useState("");
  const [password, setPAssword] = useState("");

  const [donorAddress1, setDonorAddress1] = useState("");
  const [donorAddress2, setDonorAddressTWo] = useState("");

  const [pincode1, setPincode1] = useState("");
  const [pincode2, setPincode2] = useState("");

  const [donorState1, setDonorState1] = useState("");
  const [donorState2, setDonorState2] = useState("");

  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");

  const [regsiteredMsg, setregisteredMsg] = useState("");
  const [AddressMsg, setAddressMsg] = useState("");

  const [nextPAge, setNextPAge] = useState(false);

  const address1 =
    donorAddress1 + " " + city1 + " " + donorState1 + " " + pincode1;
  const address2 =
    donorAddress2 + " " + city2 + " " + donorState2 + " " + pincode2;

  const navigator = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();

    const creation = {
      donor_name: donorName,
      donor_mobile: donorMobile,
      donor_email: donorEmail,
      donor_age: donorAge,
      donor_blood: donorBloodGroup,
      donor_password: password,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(creation),
    };
    fetch("http://localhost:3120/donor/create", options)
      .then((response) => response.json())
      .then((data) => {
        if (data.server) {
          setregisteredMsg(data.message);
          setNextPAge(data.server)
        } else {
          setregisteredMsg(data.message);
          setNextPAge(data.server)
        }
      });
  };

  const handleAddAddress = (e) => {
    e.preventDefault();

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        donor_address1 : address1,
        donor_address2 : address2,
        donor_email : donorEmail,
        donor_mobile : donorMobile
      }),
    };
    fetch("http://localhost:3120/donor/add/address", options)
      .then((response) => response.json())
      .then((data) => {
        if (data.server) {
          setAddressMsg(data.message);
          navigator(`/thanks/${donorName}`)
        } else {
          setAddressMsg(data.message);
          alert("Invalid address, please try to register again.")
        }
      });
  };


  return (
    <>
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col-sm-6 col-md-6 col-lg-6 mt-3">
            <img src="blood1.png" className="img-fluid" alt="blood" />
          </div>

          {nextPAge ? (
              <div className="col-sm-6 col-md-6 col-lg-6 my-4">
                  <form onSubmit={handleAddAddress}>
                <div className="d-flex align-items-center">
                  <div>
                  </div>
                  <div className="m-auto">
                    <h4 className="text-center text-primary">
                      Add Available Address{" "}
                    </h4>
                  </div>
                </div>
                <hr />
                <div className="form-group">
                  <label>Address 1</label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={(e) => setDonorAddress1(e.target.value)}
                    required
                    placeholder="Enter available address"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setCity1(e.target.value)}
                      required
                      placeholder="Ex: Nizamabad"
                    />
                  </div>
                  <div className="form-group col-md col-6">
                    <label>State</label>
                    <select
                      className="form-control"
                      onChange={(e) => setDonorState1(e.target.value)}
                      required
                    >
                      <option value="">Choose...</option>
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
                    <label>Pincode</label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={(e) => setPincode1(e.target.value)}
                      required
                      placeholder="123456"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Address 2</label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={(e)=>setDonorAddressTWo(e.target.value)}
                    required
                    placeholder="Enter available address"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setCity2(e.target.value)}
                      required
                      placeholder="Ex: Nizamabad"
                    />
                  </div>
                  <div className="form-group col-md col-6">
                    <label>State</label>
                    <select
                      className="form-control"
                      onChange={(e) => setDonorState2(e.target.value)}
                      required
                    >
                      <option value="">Choose...</option>
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
                    <label>Pincode</label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={(e) => setPincode2(e.target.value)}
                      required
                      placeholder="123456"
                    />
                  </div>
                </div>
                <div className="form-check m-2 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    required
                  />
                  <label className="form-check-label">
                    I Agreee <a href="/">terms and conditions</a>
                  </label>
                </div>
                <h6 className="text-center">{AddressMsg}</h6>
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block"
                >
                  Submit & Add me
                </button>
            </form>
              </div>
          ) : (
              <div className="col-sm-6 col-md-6 col-lg-6 my-4">
                  <form onSubmit={handleRegistration}>
                <h4 className="text-primary text-center">Personal details</h4>
                <hr />
                {regsiteredMsg ? (
                  <h4 className="text-success text-center">{regsiteredMsg}</h4>
                ) : (
                  <h4 className="text-danger text-center">{regsiteredMsg}</h4>
                )}
                <div className="form-group mb-3">
                  <label>Full name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="full-name"
                    required
                    onChange={(e) => setDonorname(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Gmail</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="@gmail"
                    required
                    onChange={(e) => setDonorEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Mobile number</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="mobile"
                    required
                    onChange={(e) => setDonorMobile(e.target.value)}
                  />
                </div>
                <div className="form-row">
                <div className="form-group col-md col-6">
                    <label>Age</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="age"
                      required
                      onChange={(e) => setDonorAge(e.target.value)}
                    />
                  </div>
                  <div className="col-md col-6">
                  <div className="form-group mx-5">
                    <label>Blood Group</label><br/>
                    <select
                      type="text"
                      className="form-select p-1"
                      required
                      onChange={(e) => setBloodGroup(e.target.value)}
                    >
                      <option value="">Choose....</option>
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
                </div>
                <div className="form-group mb-3">
                  <label>Create Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    onChange={(e) => setPAssword(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Next.
                </button>
            </form>
              </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Reg;
