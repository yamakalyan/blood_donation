import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Manage() {
  const [group, setGroup] = useState([]);
  const [serialNUmber, setSerialNumber] = useState([]);

  const [deleteMsg, setDeleteMsg] = useState("");
  const [editMsg, setEditMsg] = useState("");

  const token = localStorage.getItem("token");
  const navigator = useNavigate()

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json", "KALYAN_HEADER_KEY" : token },
    };
    const fetching = async () => {
      await fetch("http://localhost:3120/admin", options)
        .then((response) => response.json())
        .then((data) => {
          if (data.server) {
            setGroup(data.results);
          } else {
            alert("no data found");
          }
        });
    };
    return () => fetching();
  }, []);

  const handleDeleteAction = async (donor_id) => {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "KALYAN_HEADER_KEY" : token },
      body: JSON.stringify({
        donor_id: donor_id,
      }),
    };
    await fetch("http://localhost:3120/admin/delete", options)
      .then((resposne) => resposne.json())
      .then((data) => {
        if (data.server) {
          alert(data.message);
          window.location.reload(false);
        } else {
          alert(data.message);
        }
      });
  };


  const handleEditAction =(donor_id) => {
    navigator(`editDonors/'${donor_id}'`)
  };

  useEffect(() => {
    const mapping = group.map((donor, index) => {
      const tableNUm = index + 1;
      return (
        <tr key={donor.donor_id}>
          <td className="t-data">{tableNUm}</td>
          <td className="t-data">{donor.donor_name}</td>
          <td className="t-data">{donor.donor_mobile}</td>
          <td className="t-data">{donor.donor_email}</td>
          <td className="t-data">{donor.donor_blood_group}</td>
          <td className="t-data">{donor.donor_address1}</td>
          <td className="t-data">{donor.donor_address2}</td>
          <td className="t-data">
            <button
              className="table-btn"
              onClick={() => handleEditAction(donor.donor_id)}
            >
              Edit
            </button>
            <button
              className="table-btn"
              onClick={() => handleDeleteAction(donor.donor_id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return setSerialNumber(mapping);
  }, [group]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md col-lg my-5 ">
            <table className="table-sm table-hover table-bordered table-dark">
              <thead>
                <tr>
                  <th className="t-data" scope="col">
                    Sl/No.
                  </th>
                  <th className="t-data" scope="col">
                    Name
                  </th>
                  <th className="t-data" scope="col">
                    Contact
                  </th>
                  <th className="t-data" scope="col">
                    Email
                  </th>
                  <th className="t-data" scope="col">
                    Blood-Group
                  </th>
                  <th className="t-data" scope="col">
                    Available Location 1
                  </th>
                  <th className="t-data" scope="col">
                    Available Location 2
                  </th>
                  <th className="t-data" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="t-width position-relative">
                {serialNUmber}
              </tbody>
            </table>
          </div>
        </div>
        <Outlet/>
      </div>
    </>
  );
}
