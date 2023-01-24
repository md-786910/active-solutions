import React, { useRef } from "react";
// import Contactform from "../../../helper/contactform";

import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const Content = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_gy4f2wq",
          "template_ov53lyg",
          form.current,
          "IRTz2krTAEMidp0RD"
        )
        .then(
          (result) => {
            toast(`email sent`, {
              duration: 2000,
              position: "top-right",
              style: {
                background: "green",
                color: "white",
                padding: "10px 20px",
              },
              icon: "📩",
            });
          },
          (error) => {
            toast("something went wrong", {
              duration: 2000,
              position: "top-right",
              style: {
                background: "red",
                color: "white",
                padding: "10px 20px",
              },
              icon: "📩",
            });
          }
        );
    } catch (error) {
      toast("something went wrong", {
        duration: 2000,
        position: "top-right",
        style: {
          background: "red",
          color: "white",
          padding: "10px 20px",
        },
        icon: "📩",
      });
    }
  };

  return (
    <section className="contact-section with-map-bg pt-120 pb-120">
      <div className="container">
        <div className="contact-form-wrapper">
          <div className="row no-gutters align-items-center align-items-lg-start justify-content-center">
            <div className="col-lg-5 col-md-5">
              <div className="contact-info-list">
                <div className="info-box">
                  <div className="icon">
                    <i className="pe-7s-home" />
                  </div>

                  <div className="content">
                    <h4>Office Address</h4>
                    <p>
                      #4030495462, 503, Fifth floor, S1, Prince Sultan Street,
                      AlMuhamadiah Dist, Jeddah
                      <br /> Kingdom of Saudi Arabia
                    </p>
                  </div>
                </div>

                <div className="info-box">
                  <div className="icon">
                    <i className="pe-7s-call" />
                  </div>
                  <div className="content">
                    <h4>Phone Number</h4>
                    <p>
                      +966 56 677 1661
                      <br />
                      +966 54 844 2604
                    </p>
                  </div>
                </div>
                <div className="info-box">
                  <div className="icon">
                    <i className="pe-7s-comment" />
                  </div>
                  <div className="content">
                    <h4>Email address</h4>
                    <a href="mailto:info@activesolksa.com">
                      info@activesolksa.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="contact-form">
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                  <div className="row padding-custom">
                    <div className="col-12 col-lg-6">
                      <div className="input-group mb-10">
                        <div className="icon">
                          <i className="fal fa-user" />
                        </div>
                        <input
                          type="text"
                          placeholder="Your Full Name"
                          name="user_name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="input-group mb-10">
                        <div className="icon">
                          <i className="fal fa-phone" />
                        </div>
                        <input
                          type="text"
                          placeholder="Your Phone"
                          name="user_phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="input-group mb-10">
                        <div className="icon">
                          <i className="fal fa-envelope" />
                        </div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          name="user_email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="input-group mb-10">
                        <div className="icon">
                          <i className="fal fa-list" />
                        </div>
                        <input
                          type="text"
                          placeholder="Your Subject"
                          name="user_subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group textarea mb-10">
                        <div className="icon">
                          <i className="fal fa-edit" />
                        </div>
                        <textarea
                          placeholder="Enter Message"
                          name="message"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="main-btn btn-filled">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Content;
