import React from "react";

const Framework = ({ feature, index, c1, c2, color1, color2 }) => {
  const { title1, title, img, id, description } = feature;
  // #041d38 //black 0 1 2 3 4
  // https://github  b y b y  b
  // background: index % 2 === 0 ? "#49137B" : "#ffaa17",

  return (
    <section
      className="framework-section mt-4"
      key={id}
      style={{
        background: index % 2 === 0 ? c1 : c2,
      }}
    >
      {title1 !== "" ? (
        <h1
          className="text-center "
          style={{ color: "#ffc107", margin: "0.2em 0 1em 0" }}
        >
          <span style={{ color: index % 2 === 0 ? color1 : color2 }}>
            {title1}
          </span>
        </h1>
      ) : (
        <div style={{ marginTop: "2em" }}></div>
      )}
      <div className="container">
        <div
          className={`row align-items-center ${
            index % 2 !== 0 ? "flex-row" : "flex-row-reverse"
          } justify-content-center`}
        >
          <div className="col-lg-6 col-md-10 ">
            <div className="framework-img">
              <img
                src={img}
                // src="https://avu.net.in/assets/img/product/etos/e3.webp"
                //   src={process.env.PUBLIC_URL + "/assets/img/framework.jpg"}
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="framework-text pl-20">
              <div className="section-title left-border mb-40">
                <h2 style={{ color: index % 2 === 0 ? color1 : color2 }}>
                  {title}
                </h2>
              </div>

              <div className="featurecon">
                <p style={{ color: index % 2 === 0 ? color1 : color2 }}>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
