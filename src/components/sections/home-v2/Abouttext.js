import React, { Component } from "react";
import { Link } from "react-router-dom";

class Abouttext extends Component {
  render() {
    return (
      <div className="about-text-warp">
        <div className="container">
          <div className="row no-gutters justify-content-center justify-content-lg-start">
            <div className="col-lg-5 col-md-10">
              <div className="about-text position-relative">
                <div className="section-title left-border mb-40">
                  <span className="title-tag">About us</span>
                  <h2>Your lifetime OEM Partner</h2>
                </div>
                <p className="mb-30">
                  Designing frameworks and solutions that transform Enterprises
                  and Institutional Stakeholders. A rich experience is
                  pioneering products, services, innovation and systems for a
                  highly connected future, backed by a highly skilled
                  multi-disciplinary team of engineers, designers, marketing &
                  sales specialists, industry pioneers, communication experts
                  and thought leaders.
                </p>
                <p>
                  Our team is a mix of seasoned leaders with Technocrats of high
                  Diplomatic leadership Qualities, providing an umbrella of
                  connected services, committed to bring out the best of brands,
                  spaces, systems and solutions. Today, an experienced
                  eco-system enabler and preferred partner providing design,
                  talent and technology to government, private enterprises and
                  Institutional Stakeholders with experience working on multiple
                  applications across diverse industries, for national as well
                  as global clients.
                </p>
                <Link to="/contact" className="main-btn btn-filled mt-40">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mockup-img" style={{ top: "20%" }}>
          <img
            src={
              "http://androthemes.com/themes/react/onitir/assets/img/about/about-mock.png"
            }
            alt="mockup-img"
          />
        </div>
        <div className="about-small-img" style={{ top: "35%" }}>
          <img
            src={
              "http://androthemes.com/themes/react/onitir/assets/img/about/about.jpg"
            }
            alt="about-small-img"
          />
        </div>

        {/* <div className="mockup-img" style={{ top: "20%" }}>
          <img
            src="http://androthemes.com/themes/react/onitir/assets/img/about/about-mock.png"
            // src={process.env.PUBLIC_URL + "/assets/img/about/about2.jpg"}
            alt="mockup-img"
          />
        </div> */}
      </div>
    );
  }
}

export default Abouttext;
