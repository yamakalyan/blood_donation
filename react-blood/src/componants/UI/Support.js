import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Support() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [amt, setAmt] = useState(0);
  const [payId, setPayId] = useState("");
  const [takingAmount, setTakingAmount] = useState("");
  const [makingTrue, setMakingTrue] = useState(false);

  const [verify, setverify] = useState(false)
  const [rzpPaymentId, setRzpPaymentId] = useState("");
  const [rzpSign, setRzpSign] = useState("");

  const navigator = useNavigate();

  const makingStatesEmpty = ()=>{
    setName("")
    setMobile("")
    setEmail("")
    setAddress("")
    setAmt("")
    setTakingAmount("")
    setRzpPaymentId("")
    setRzpSign("")
  }

  const handleAmount = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        donator_name : name,
        donator_mobile : mobile,
        donator_email :email,
        donator_address: address,
        amount: amt,
      }),
    };
    const fetching = async () => {
      await fetch("http://localhost:3120/payment/create", options)
        .then((response) => response.json())
        .then((data) => {
          if (data.server) {
            setPayId(data.resultsValues.id);
            setTakingAmount(data.resultsValues.amount);
            setMakingTrue(data.server);
            // makingStatesEmpty()
          } else {
            alert("failed payment");
          }
        });
    };
    return fetching();
  };

  // CREATING PAYMENT
  const paymentCreation = () => {
    var options = {
      key: "rzp_test_M4IX9jswPjXjEW",
      amount: takingAmount,
      currency: "INR",
      name: name,
      description: "Donation",
      image: "logo512.png",
      order_id: payId,
      handler: function (response) {
        setPayId(response.razorpay_order_id);
        setRzpPaymentId(response.razorpay_payment_id);
        setRzpSign(response.razorpay_signature);
        setverify(true)
      },
      prefill: {
        contact: mobile,
        name:name,
        email: email,
      },
      notes: {
        address : address,
      },
      theme: {
        color: "#2300a3",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  if (makingTrue) {
    paymentCreation();
  }

  // VERIFYING PAYMENT
  const verifying = () => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-razorpay-signiture": rzpSign,
      },
      body: JSON.stringify({
        rzp_id: payId,
        rzp_paymentId: rzpPaymentId,
      }),
    };
    fetch("http://localhost:3120/payment/verify", options)
      .then((response) => response.json())
      .then((data) => {
        if (data.server) {
          window.location.reload(false)
          makingStatesEmpty()
          navigator(`/suppthanks/${name}`);
        } else {
          alert(data.message)
        }
      });

  };

  if (verify) {
    verifying()
  }


  return (
    <>
      <div className="container-fluid p-3 bg-light">
        <form onSubmit={handleAmount}>
          <div className="row">
            <div className=" col-md-6 col-lg-6">
              <img src="Charity1.png" className="img-fluid" alt="" />
            </div>
            <div className=" col-md-6 col-lg-6 mt-4">
              <h3 className="text-center text-primary">Donate Money</h3>
              <hr />
              <div className="form-group">
                <label>Full name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter name"
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  placeholder="Enter @gmail.com"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Mobile number</label>
                <input
                  type="number"
                  className="form-control"
                  required
                  placeholder="Enter mobile number"
                  onChange={(e)=>setMobile(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter Address"
                  onChange={(e)=>setAddress(e.target.value)}
                />
              </div>
              <div className="form-row my-3 d-flex justify-content-between align-items-center">
                <div className="col-md col-lg-6">
                  <h5 className="text-success">
                    Your little help, Makes many faces smile.
                  </h5>
                </div>
                <div className="col-md col-lg-6">
                  <label>Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setAmt(e.target.value)}
                    required
                    placeholder="Amount."
                  />
                </div>
              </div>
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Donate
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Support;
