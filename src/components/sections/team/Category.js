import React from "react";
import Slider from "react-slick";
// import category from "../../../data/category.json";
// import category from "../../../data/services.json";

const Category = ({ module }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="services-secton services-secton-three pt-120 pb-50">
      <div className="container">
        {/* Section Title */}
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-8 col-sm-7">
            <div className="section-title left-border">
              <span className="title-tag">Modules</span>
              <h2>Our Modules</h2>
            </div>
          </div>
        </div>
        <div className="serive-slider-wrap mt-5">
          <div
            className="container"
            style={{
              boxSizing: "border-box",
              borderRadius: "10px",
              padding: "2em",
              border: "2px solid black",
            }}
          >
            <Slider {...settings} className="services-slider row">
              {module
                ? module.map((item, i) => (
                    <div key={i} className="col-lg-12  text-center mx-auto">
                      <div className="bottom-icon d-flex justify-content-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "70px",
                          }}
                        />
                      </div>
                      <div className="single-service-two text-center mt-4 single-slider">
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                  ))
                : []}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
