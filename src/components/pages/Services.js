import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Headerthree";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
import Content from "../sections/services/Content";

const pagelocation = "Services";

class Services extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Onitir - React Template | {pagelocation}</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
        <Content />
      </Fragment>
    );
  }
}

export default Services;
