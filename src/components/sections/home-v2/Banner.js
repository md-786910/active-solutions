import React, { Component } from "react";
import banner from "../../../assets/img/banner/circle-icon.png";
class Banner extends Component {
  render() {
    return (
      <section
        className="banner-section banner-style-two "
        style={{
          position: "relative",
          zIndex: "0",
          marginTop: "1.5em",
        }}
      >
        <div className="single-banner">
          <div className="container-fluid custom-container-two">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="banner-img" style={{ overflow: "hidden" }}>
                  <img
                    src={banner}
                    alt="icon"
                    style={{ scale: "1.5", marginLeft: "60px" }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="banner-text">
                  <div className="bannerBtn">
                    <a
                      rel={"external"}
                      href="#"
                      className="video-icon popup-video"
                    >
                      <i className="fas fa-play" style={{ color: "white" }} />
                    </a>
                  </div>
                  <h1>Industry Innovation Infrastructure</h1>
                  <p>Your lifetime OEM Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
