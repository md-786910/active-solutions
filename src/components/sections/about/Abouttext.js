import React, { Component } from "react";

class Abouttext extends Component {
  render() {
    return (
      <section className="about-section about-style-three pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="about-tile-gallery-two">
                <img
                  src={
                    "http://androthemes.com/themes/react/onitir/assets/img/tile-gallery/04.jpg"
                    // process.env.PUBLIC_URL + "/assets/img/tile-gallery/04.jpg"
                  }
                  alt="img"
                  className="image-one"
                />
                <img
                  src={
                    "http://androthemes.com/themes/react/onitir/assets/img/tile-gallery/05.jpg"
                    // process.env.PUBLIC_URL + "/assets/img/tile-gallery/05.jpg"
                  }
                  alt="img"
                  className="image-two"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="about-text pl-30">
                <div className="section-title left-border mb-40">
                  <span className="title-tag">About us</span>
                  <h2>YOUR LIFETIME OEM PARTNER</h2>
                </div>
                <p>
                  Designing frameworks and solutions that transform Enterprises
                  and Institutional Stakeholders. A rich experience is
                  pioneering products, services, innovation and systems for a
                  highly connected future, backed by a highly skilled
                  multi-disciplinary team of engineers, designers, marketing &
                  sales specialists, industry pioneers, communication experts
                  and thought leaders.
                </p>
                <div className="about-extra">
                  Our team is a mix of seasoned leaders with Technocrats of high
                  Diplomatic leadership Qualities, providing an umbrella of
                  connected services, committed to bring out the best of brands,
                  spaces, systems and solutions. Today, an experienced
                  eco-system enabler and preferred partner providing design,
                  talent and technology to government, private enterprises and
                  Institutional Stakeholders with experience working on multiple
                  applications across diverse industries, for national as well
                  as global clients.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Abouttext;
