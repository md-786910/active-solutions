import React, { Component, Fragment } from "react";
// import MetaTags from "react-meta-tags";
// import Header from "../layouts/Headerthree";
import Breadcrumbs from "../layouts/Breadcrumbs";
// import Footer from "../layouts/Footer";
import Content from "../sections/service-details/Content";

const pagelocation = "Service Details";

class Servicedetails extends Component {
  render() {
    return (
      <Fragment>
        <Breadcrumbs
          breadcrumb={{ pagename: pagelocation }}
          banner={{
            img: "/assets/img/service.jpg",
          }}
        />
        <Content />
      </Fragment>
    );
  }
}

export default Servicedetails;
