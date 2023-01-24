import React, { Component, Fragment } from "react";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/team/Content";

const pagelocation = "Products";

class Team extends Component {
  render() {
    return (
      <Fragment>
        <Breadcrumbs
          breadcrumb={{ pagename: pagelocation }}
          banner={{
            img: "https://avu.net.in/assets/img/product/etrade/etrade-img.webp",
          }}
        />
        <Content />
      </Fragment>
    );
  }
}

export default Team;
