import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";

import Content from "../sections/home-v2/Content";

// const pagelocation = "Homepage";

class Hometwo extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <meta name="description" content="#" />
        </MetaTags>
        <Content />
      </Fragment>
    );
  }
}

export default Hometwo;
