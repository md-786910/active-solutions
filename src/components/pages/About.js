import React, { Component, Fragment } from "react";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/about/Content";

const pagelocation = "About Us";

class About extends Component {
  render() {
    return (
      <Fragment>
        <Breadcrumbs
          breadcrumb={{ pagename: pagelocation }}
          banner={{
            img: "http://androthemes.com/themes/react/onitir/assets/img/breadcrumb.jpg",
          }}
        />
        <Content />
      </Fragment>
    );
  }
}

export default About;
