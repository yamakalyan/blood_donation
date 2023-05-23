import React, { useState, useEffect } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdSmsFailed } from "react-icons/md";

export default function Donations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchingDonations = async () => {
      await fetch("http://localhost:3120/payment/donations")
        .then((response) => response.json())
        .then((data) => {
          if (data.server) {
            setDonations(data.results);
          } else {
            setDonations(data.results);
          }
        });
    };
    return () => fetchingDonations();
  }, []);

  const mapping = donations.map((dontions, d) => {
    return (
      <div className="col-md-6 col-lg-6 mb-2" key={d}>
        <div className="bg-light p-3 rounded">
          <div>
            <h6 className="text-sm-left">
              Payment Id : {dontions.rzp_payment_id}
              {dontions.donation_status === 0 ? (
                <>
                  <span className="float-right text-danger">
                    <MdSmsFailed />
                  </span>
                </>
              ) : (
                <>
                  <span className="float-right text-success">
                    <IoCheckmarkDoneCircleOutline />
                  </span>
                </>
              )}
            </h6>
            <hr />
            <h6>Name : {dontions.donator_name}</h6>
            <p>
              Mobile : {dontions.donator_mobile}
              <span className="float-right">
                Email : {dontions.donator_email}
              </span>
            </p>
            <p>
              Address : {dontions.donator_address}
              <span className="float-right font-weight-bold">
                Amount : {dontions.donation_amount}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="container bg-dark border border-1  rounded">
        <h1 className="text-center text-primary">Donations</h1>
        <hr />
        <div className="row my-3 p-3">{mapping}</div>
      </div>
    </div>
  );
}
