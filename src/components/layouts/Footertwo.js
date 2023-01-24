import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Backtotop from "./Backtotop";
import service from "../../data/services.json";

import footerLogo from "../../assets/img/footerLogo.png";

class Footertwo extends Component {
  render() {
    return (
      <Fragment>
        <Backtotop />
        <footer className="footer-style-two">
          <div className="footer-widget-area">
            <div className="container">
              <div
                className="foter-logo text-center"
                style={{
                  width: "210px",
                  height: "171px",
                  overflow: "hidden",
                  margin: "0 auto",
                }}
              >
                <img
                  src={footerLogo}
                  alt="logo"
                  style={{
                    width: "200px",
                    display: "block",
                    objectFit: "cover",
                    scale: "1.4",
                  }}
                />
              </div>
              <div className="row mt-4 justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6 order-1">
                  <div className="widget about-widget">
                    <h3 className="widget-title">About Us</h3>
                    <p> Your lifetime OEM Partner</p>

                    <p>
                      designing frameworks and solutions that transform
                      Enterprises and Institutional Stakeholders.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8 order-3 order-lg-2">
                  <div className="widget getin-widget">
                    <h3 className="widget-title">Get In touch</h3>
                    <ul>
                      <li>+966 56 677 1661</li>
                      <li>+966 54 844 2604</li>
                      <li>
                        {" "}
                        <a
                          style={{ color: "black" }}
                          href="mailto:info@activesolksa.com"
                        >
                          info@activesolksa.com
                        </a>
                      </li>

                      <li>
                        #4030495462, 503, Fifth floor, S1, Prince Sultan Street,
                        AlMuhamadiah Dist, Jeddah, Kingdom of Saudi Arabia
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 order-2 order-lg-3">
                  <div className="widget nav-widget">
                    <h3 className="widget-title">What We Do</h3>
                    <ul>
                      {service &&
                        service.map((service, index) => {
                          return (
                            <li key={index + service.id}>
                              <Link to={service.link}>{service.title}</Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  <div className="copy-right-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <p className="copyrigt-text text-center text-md-left">
                    Copyright By@<Link to="#">Yourweb</Link> - 2021{" "}
                  </p>
                </div>
                <div className="col-md-7">
                  <div className="social-icon text-center text-md-right">
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-behance" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-linkedin" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-youtube" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </footer>
      </Fragment>
    );
  }
}

export default Footertwo;
