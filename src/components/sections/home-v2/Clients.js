import React, { Component } from "react";
import Slider from "react-slick";
import clients from "../../../data/clients.json";

class Clients extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      arrows: false,
      dots: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="clinet-section">
        <div className="container-fluid custom-container-one">
          <Slider {...settings} className="clinet-slider">
            {clients.map((item, i) => (
              <div key={i} className="clinet-item">
                <img
                  src={process.env.PUBLIC_URL + "/" + item.image}
                  alt={item.companyname}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Clients;
