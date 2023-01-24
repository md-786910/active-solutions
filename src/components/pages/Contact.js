import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/contact/Content";

const pagelocation = "Contact Us";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Onitir - React Template | {pagelocation}</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Breadcrumbs
          breadcrumb={{ pagename: pagelocation }}
          banner={{
            img: "/assets/img/contact.png",
          }}
        />
        <Content />
      </Fragment>
    );
  }
}

export default Contact;
