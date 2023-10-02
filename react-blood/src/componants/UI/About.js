import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { CgMail } from "react-icons/cg";
import { FaMobileAlt, FaFacebookSquare } from "react-icons/fa";

function About() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <section id="about">
        <div className="container my-5">
          <div className="row my-5">
            <div className="col-md col-lg">
              <h1 className="text-center text-org">
                Snehalaya Swachanda Samstha Velpur.
              </h1>
            </div>
          </div>
        </div>
        <div className="container p-3">
          <div className="row">
            <div className="col-md col-lg my-2">
              <div className="container">
                <h5 className="text-center">
                  If you have any queries ? write to us.
                </h5>
                <hr />
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email (or) Mobile number"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea
                    type="text"
                    className="form-control"
                    rows={4}
                    placeholder="write your message..."
                    required
                  />
                </div>
                <div className="text-center">
                  <button className="btn-sm btn-primary">Submit & Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-sm about">
          <div className="row">
            <div className="col-6 col-md mt-5">
              <ul className="container">
                <h5>Address</h5>
                <hr className="hr-line" />
                <li>Location : Velpur</li>
                <li>District : Nizamabad</li>
                <li>Pincode : 503311</li>
                <li>State : Telangana</li>
              </ul>
            </div>
            <div className="col-6 col-md mt-5">
              <ul className='container'>
        <h5>Address</h5><hr className='hr-line'/>
              <li>Location : Sunket</li>
              <li>Mondal : Sunket</li>
              <li>District : Nizamabad</li>
              <li>Pincode : 503225</li>
            </ul>
              
            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.576590668112!2d78.39456404999999!3d18.762991049999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcdbc256639f8c5%3A0xd97592e2fa0ceb7d!2sVelpur%2C%20Telangana%20503311!5e0!3m2!1sen!2sin!4v1682580389627!5m2!1sen!2sin"
                width="150"
                height="150"
                title="velpur"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </div>
        </div>

        <div className="links">
          <div className="row mt-4">
            <h2>
              <button className="links-button">
                <FaMobileAlt />
              </button>
            </h2>
            <h2>
              <button className="links-button">
                <CgMail />
              </button>
            </h2>
            <h2>
              <button className="links-button">
                <ImWhatsapp />
              </button>
            </h2>
            <h2>
              <button className="links-button">
                <FaFacebookSquare />
              </button>
            </h2>
          </div>
        </div>

        <div className="container mt-3">
          <p className="text-center copyright">
            All Copyrights @ {year} reserved by Snehalaya Swachanda Samstha
            Velpur.
          </p>
          <p className="text-center copyright">Designed by Yamakalyan</p>

        </div>
      </section>
    </>
  );
}

export default About;
