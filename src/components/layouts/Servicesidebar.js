import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import blogcategory from "../../data/blogcategory.json";
const Servicesidebar = () => {
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
    <div className="sidebar">
      {/* Service cat */}
      <div className="widget service-cat-widget mb-40">
        <h5 className="widget-title">Services</h5>
        <ul>
          {blogcategory.map((item, i) => (
            <li key={i}>
              <Link to={`/services/${item.link}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Brouchers widget */}

      <div className="widget brouchers-widget mb-40">
        <h5 className="widget-title">Products</h5>
        <ul>
          <li>
            <Link to="/product/eTOS">eTOS</Link>
          </li>
          <li>
            <Link to="/product/eTrade">eTrade</Link>
          </li>
          <li>
            <Link to="/product/eFreight">eFreight</Link>
          </li>
          <li>
            <Link to="/product/eEstate">eEstate</Link>
          </li>
          <li>
            <Link to="/product/eRetail">eRetail</Link>
          </li>
          <li>
            <Link to="/product/eEntertain">eEntertain</Link>
          </li>
        </ul>
      </div>
      {/* Contact Widget */}
      <div className="widget contact-widget mb-40">
        <h5 className="widget-title">Contact Us</h5>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-group">
            <span className="icon">
              <i className="fas fa-user" />
            </span>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="user_name"
              required={true}
            />
          </div>
          <div className="input-group">
            <span className="icon">
              <i className="fas fa-envelope" />
            </span>

            <input
              type="email"
              required={true}
              placeholder="Enter email"
              name="user_email"
            />
          </div>
          <div className="input-group textarea">
            <span className="icon">
              <i className="fas fa-edit" />
            </span>
            <textarea
              placeholder="Enter message"
              name="message"
              required={true}
            />
          </div>
          <div className="text-center mt-20">
            <input
              type="submit"
              className="main-btn btn-filled"
              value="submit"
            />
          </div>
        </form>
      </div>
      <Toaster />
      {/* Bannner Widget */}
    </div>
  );
};

export default Servicesidebar;
