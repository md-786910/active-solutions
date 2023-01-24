import React, { Component } from "react";
import { Link } from "react-router-dom";

class Whyus extends Component {
  render() {
    return (
      <section className="features-boxes-two pt-50 pb-70">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="features-boxes-loop">
                {/* Loop start11 */}

                <div className="colabImage">
                  <img src="./assets/img/colab.gif" alt="colab" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="feature-text pl-50">
                <div className="section-title left-border mb-40">
                  <span className="title-tag">COLLABRATION WITH US</span>
                  <h2>
                    CREATING REALITIES THAT EXCEED EXPECTATIONS AND EXCELLENCE.{" "}
                  </h2>
                </div>
                <p>
                  A game-changer with proven capability in designing systems and
                  solutions for end-to-end digital transformation and ecosystem
                  integration, enabling enterprises and entities realize the
                  vision to build smarter infrastructure with uninterrupted and
                  universal access to real-time services.
                </p>

                <Link
                  to="/services/product consulting"
                  className="main-btn btn-filled mt-40"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Whyus;
