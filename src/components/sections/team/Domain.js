import React from "react";

const Domains = ({ domain }) => {
  // <div className="clinet-section">
  //   <div className="container-fluid custom-container-one">
  //     <Slider {...settings} className="clinet-slider">
  //       {domain &&
  //         domain.map((item, i) => (
  //           <>
  //             <div key={i} className="clinet-item">
  //               <img
  //                 src={process.env.PUBLIC_URL + "/" + item.image}
  //                 alt={item.title}
  //               />
  //             </div>
  //             <div
  //               className="title text-center"
  //               style={{ marginTop: "-30px" }}
  //             >
  //               <h4>{item.title}</h4>
  //             </div>
  //           </>
  //         ))}
  //     </Slider>
  //   </div>
  // </div>
  return (
    <section class="section-padding" style={{ marginBottom: "10em" }}>
      <div class="container avu-container1">
        <div class="domainBox">
          {domain &&
            domain.map((item, i) => {
              return (
                <div class="col-md-2 col-sm-6 col-12 text-center" key={i}>
                  <div class="inner-columns-padding domains">
                    <img
                      src={item.img}
                      alt="retail"
                      style={{
                        width: "120px",
                        backgroundColor: "#49137B",
                        borderRadius: "50%",
                        boxSizing: "border-box",
                        padding: "2em",
                      }}
                      class="img-fluid module-circle box"
                    />
                    <h4 class="mt-3 font-blue">
                      <b>{item.title}</b>
                    </h4>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Domains;
