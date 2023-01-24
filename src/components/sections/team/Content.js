import React, { useState, useEffect, Fragment } from "react";
import Features from "../services/Features";
import Category from "./Category";
import Domains from "./Domain";
import Framework from "./FrameWork";
import Skills from "./Skills";
import product from "../../../data/product.json";
import { useParams } from "react-router-dom";
const Content = () => {
  const [products, setProducts] = useState([]);

  const { title } = useParams();
  useEffect(() => {
    const productOne = product.filter(
      (prod) => prod.title.toLowerCase() === title.toLowerCase()
    );
    setProducts(productOne[0]);
    // eslint-disable-next-line
  }, [title]);
  /*
    1 b
    2 y
    3 y
    4 
    5  -- b
  */
  // bool ch = true ex - >      b         b
  // color = [b, y]
  // if(ch == true) color{
  //    color[1];
  //    ch = false;
  // }
  // else{
  //   color[0];
  //   ch = true;
  // }

  return (
    <Fragment>
      {products && (
        <>
          {products.isModules ? <Category module={products.module} /> : null}
          <Skills desc={products.description} />
          <Features
            Feature1={products.specailFeatures1}
            Feature2={products.specailFeatures2}
          />
          {products.isDomain ? (
            <div>
              <div
                className="container "
                style={{ position: "relative", top: "-3em" }}
              >
                <div className="section-title both-border text-center pb-40">
                  <span className="title-tag">Domains</span>
                  <h2>Our Domains</h2>
                </div>
              </div>
              <Domains domain={products.domain} />
            </div>
          ) : (
            ""
          )}

          {products.additionalFeatures &&
          products.additionalFeatures.feature.length % 2 === 1 ? (
            <div style={{ marginTop: "-5em" }}>
              {products.additionalFeatures &&
                products.additionalFeatures.feature.map((f, index) => (
                  <Framework
                    feature={f}
                    index={index}
                    c1={"#ffaa17"}
                    c2={"#49137B"}
                    color1="#041d38"
                    color2="white"
                  />
                ))}
            </div>
          ) : (
            <div style={{ marginTop: "-5em" }}>
              {products.additionalFeatures &&
                products.additionalFeatures.feature.map((f, index) => (
                  <Framework
                    feature={f}
                    index={index}
                    c2={"#ffaa17"}
                    c1={"#49137B"}
                    color2="#041d38"
                    color1="white"
                  />
                ))}
            </div>
          )}
        </>
      )}
    </Fragment>
  );
};

export default Content;
