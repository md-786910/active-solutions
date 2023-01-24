import React from "react";

const Features = ({ Feature1, Feature2 }) => {
  return (
    <section className="features-boxes pt-40 pb-110">
      <div className="container">
        {/* Section Title */}
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-7">
            <div className="section-title left-border">
              <span className="title-tag">Why Us</span>
              <h2>Special Features</h2>
            </div>
          </div>
        </div>
        {/* Feature boxes loop */}
        <div className="features-boxes-loop mt-100">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-lg-4 col-md-5 col-sm-10">
              {Feature1 &&
                Feature1.map((f, index) => {
                  return (
                    <div className="feature-box" key={index}>
                      <h4>
                        <i className="fal fa-browser" />
                        {f.title}
                      </h4>
                      <p>{f.description}</p>
                    </div>
                  );
                })}
            </div>
            <div className="gap-for-img" />
            <div className="col-lg-4 col-md-5 col-sm-10">
              {Feature2 &&
                Feature2.map((f, index) => {
                  return (
                    <div className="feature-box" key={index}>
                      <h4>
                        <i className="fal fa-browser" />
                        {f.title}
                      </h4>
                      <p>{f.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* feature-img */}
        <div className="feature-img">
          <img
            src="http://androthemes.com/themes/react/onitir/assets/img/feature-img.png"
            alt="img"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
