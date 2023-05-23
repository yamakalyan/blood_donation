import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { serviceUrl } from "../helpers/Helper";

export default function Edit() {
  const navigator = useNavigate();
  const token = localStorage.getItem("token");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [password, setPassword] = useState("");
  
  const [editMg, setEditmsg] = useState("");
  const url = serviceUrl()
  
  const handleEdit = (e) => {
    e.preventDefault()
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json", "KALYAN_HEADER_KEY" : token },
      body: JSON.stringify({
        donor_name: name,
        donor_mobile: mobile,
        donor_email: email,
        donor_age: Age,
        donor_blood: bloodGroup,
        donor_password: password,
      }),
    }
    const endpoint = url + "update/details"
    fetch(endpoint, options)
    .then(response=>response.json())
    .then(data =>{
        if (data.server) {
            setEditmsg(data.message)
        } else {
            setEditmsg(data.message)
        }
    })
  };

  return (
    <div className="container">
      <form onSubmit={handleEdit}>
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
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="@gmail"
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Mobile"
                required
                onChange={(e)=>setMobile(e.target.value)}
              />
            </div>
            <div className="form-row">

              <div className="form-group col-md col-6">
                {/* <label>Age</label> */}
                <input
                  type="number"
                  className="form-control"
                  placeholder="Age"
                  required
                  onChange={(e)=>setAge(e.target.value)}
                />
              </div>
              <div className=" col-md col-6">
              <div className="form-group mx-4">
                {/* <label>Blood Group</label> */}
                <select type="text" className="form-select p-1" onChange={(e)=>setBloodGroup(e.target.value)} required>
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
              </div>
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
            {/* <label> </label> */}
              <input
                type="number"
                className="form-control"
                placeholder="Enter password to confirm"
                required
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <p className="text-center">{editMg}</p>
        <button className="btn-sm btn-block btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}
