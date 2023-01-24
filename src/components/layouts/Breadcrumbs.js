import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const Breadcrumbs = (props) => {
  const { title } = useParams();
  const [title1, setTitle1] = useState("");
  const path = useLocation().pathname;
  const getPath = () => {
    let index = path.lastIndexOf("/");
    if (index === 0) {
      setTitle1(path.slice(1));
    } else {
      setTitle1(path.slice(1, index));
    }
  };

  useEffect(() => {
    getPath();
    // eslint-disable-next-line
  }, []);

  return (
    <section
      className="breadcrumb-section"
      style={{
        backgroundImage: props.banner
          ? `url(${props.banner.img}`
          : "url(" + process.env.PUBLIC_URL + "/assets/img/breadcrumb.jpg)",
      }}
    >
      <div className="container">
        <div className="breadcrumb-text">
          <h1>
            {decodeURI(
              title ||
                (title1 === "about"
                  ? "about us"
                  : title1 === "contact"
                  ? "contact us"
                  : title1)
            )}
            {/*{decodeURI(title || (title1 === "about" ? "about us" : title1))}   */}
          </h1>
        </div>
        <ul className="breadcrumb-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/*     <li>{title1 === "about" ? "about us" : title1}</li> */}
          <li>{props.breadcrumb.pagename}</li>
        </ul>
      </div>
      <div className="breadcrumb-shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Breadcrumbs;
