import React, { useState, useEffect } from "react";
import Sidebar from "../../layouts/Servicesidebar";
import serviceDetail from "../../../data/serviceDetail.json";
import { useParams } from "react-router-dom";

const Content = () => {
  const { title } = useParams();

  const [service, setService] = useState([]);
  console.log(title);
  // filter services

  const filterService = () => {
    const filterData = serviceDetail.filter(
      (service) =>
        service.title.toLowerCase().split(" ").join("-") ===
        title.toLowerCase().split(" ").join("-")
    );
    setService(filterData[0]);
  };

  useEffect(() => {
    filterService();
    // eslint-disable-next-line
  }, [title]);
  // src={process.env.PUBLIC_URL + "/assets/img/details/1.jpg"}
  return (
    <section className="service-details-wrap pt-150 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="service-details">
              <div className="thmb mb-50">
                <img src={service && service.img} alt="img" />
              </div>
              <div className="details-text mb-50">
                <div className="section-title left-border mb-40">
                  <span className="title-tag">services</span>
                  <h2>{service && service.title}</h2>
                </div>
                {service.data1 && (
                  <p
                    className="mb-30"
                    dangerouslySetInnerHTML={{
                      __html: service && service.data1.description,
                    }}
                  />
                )}

                <div className="serviceArticle">
                  <ul>
                    {service.description &&
                      service.description.map((ser, index) => {
                        return (
                          <li
                            style={{
                              listStyleType: "square",
                              marginBottom: "1em",
                            }}
                            key={index + ser.id}
                          >
                            {ser.description}
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="serviceArticelEnd">
                  {service.data2 && (
                    <p
                      className="mb-30"
                      dangerouslySetInnerHTML={{
                        __html: service && service.data2.description,
                      }}
                    />
                  )}
                </div>
              </div>

              {/*Why Choose Us*/}

              {/*Faq section*/}
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
