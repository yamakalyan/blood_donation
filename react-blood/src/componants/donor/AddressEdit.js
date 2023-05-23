import React, { useState } from "react";
import { serviceUrl } from "../helpers/Helper";

export default function AddressEdit() {
  const token = localStorage.getItem("token");
  const [donorAddress1, setDonorAddress1] = useState("");
  const [donorAddress2, setDonorAddress2] = useState("");

  const [pincode1, setPincode1] = useState("");
  const [pincode2, setPincode2] = useState("");

  const [donorState1, setDonorState1] = useState("");
  const [donorState2, setDonorState2] = useState("");

  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");

  const [editMsg, setEditMsg] = useState("");
  const [password,setPassword] = useState('')

  const url = serviceUrl()
  const address1 =
    donorAddress1 + " " + city1 + " " + donorState1 + " " + pincode1;
  const address2 =
    donorAddress2 + " " + city2 + " " + donorState2 + " " + pincode2;

  const handleEditAddress = async (e) => {
    e.preventDefault();

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json", "KALYAN_HEADER_KEY": token },
      body: JSON.stringify({
        donor_address1: address1,
        donor_address2: address2,
        donor_password : password
      }),
    };
    const endpoint = url + "update/address"
    await fetch(endpoint, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.server) {
          setEditMsg(data.message);
        } else {
          setEditMsg(data.message);
        }
      });
  };
  return (
    <>
      <div className="container">
        <h4 className="text-center text-primary">Edit address</h4>
        <hr />
        <form onSubmit={handleEditAddress}>
          <div className="row">
            <div className="form-row">
              <div className="form-group col-md col-lg-6">
                {/* <label>Address 2</label> */}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter address 1."
                  onChange={(e)=>setDonorAddress1(e.target.value)}
                />
              </div>
              <div className="form-group col-md col-lg-6">
                {/* <label>City</label> */}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter main City."
                  onChange={(e)=>setCity1(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md col-6">
                {/* <label>State</label> */}
                <select className="form-control" required onChange={(e)=>setDonorState1(e.target.value)}>
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
                  onChange={(e)=>setPincode1(e.target.value)}
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
                  onChange={(e)=>setDonorAddress2(e.target.value)}
                />
              </div>
              <div className="form-group col-md col-lg-6">
                {/* <label>City</label> */}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter main City."
                  onChange={(e)=>setCity2(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md col-6">
                {/* <label>State</label> */}
                <select className="form-control" required onChange={(e)=>setDonorState2(e.target.value)}>
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
                  onChange={(e)=>setPincode2(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            {/* <label> </label> */}
            <input
              type="number"
              className="form-control"
              placeholder="Enter password to confirm."
              required
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <p className="text-center">{editMsg}</p>
          <button className="btn-sm btn-block btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
