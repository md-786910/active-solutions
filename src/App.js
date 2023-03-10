import React, { Suspense, useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Footertwo from "./components/layouts/Footertwo";
import Headerthree from "./components/layouts/Headertwo";

// Header
// const Header = React.lazy(() => import("./components/layouts/Headertwo"));
// Preloader

const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Home
const Home = React.lazy(() => import("./components/pages/Hometwo"));
// About
const About = React.lazy(() => import("./components/pages/About"));
// Services
// const Services = React.lazy(() => import("./components/pages/Services"));

const Servicedetails = React.lazy(() =>
  import("./components/pages/Servicedetails")
);

// Products
// const Whyus = React.lazy(() => import("./components/pages/Whyus"));
const Team = React.lazy(() => import("./components/pages/Team"));
// const Teamdetails = React.lazy(() => import("./components/pages/Teamdetails"));
// const Portfoliogrid = React.lazy(() =>
//   import("./components/pages/Portfoliogrid")
// );
// const Portfolioslider = React.lazy(() =>
//   import("./components/pages/Portfolioslider")
// );
// const Portfoliomasonry = React.lazy(() =>
//   import("./components/pages/Portfoliomasonry")
// );
// const Portfoliodetails = React.lazy(() =>
//   import("./components/pages/Portfoliodetails")
// );
// const Faqs = React.lazy(() => import("./components/pages/Faqs"));
// // N
// const Blogstandard = React.lazy(() =>
//   import("./components/pages/Blogstandard")
// );
// const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
// const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));

// Contact
const Contact = React.lazy(() => import("./components/pages/Contact"));

// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Headerthree />
        <ScrollToTop>
          <Preloader />
          {/* Home */}
          <Route exact path="/" component={Home} />
          {/* About */}
          <Route exact path="/about" component={About} />
          {/* Services */}
          <Route exact path="/services/:title" component={Servicedetails} />

          <Route exact path="/product/:title" component={Team} />

          {/* 
          // <Route exact path="/services" component={Services} />
          <Route exact path="/whyus" component={Whyus} />
          <Route exact path="/team" component={Team} />
          <Route
            exact
            path="/team/:id"
            component={(props) => (
              <Teamdetails {...props} key={window.location.pathname} />
            )}
          />
          <Route exact path="/portfolio-grid" component={Portfoliogrid} />
          <Route exact path="/portfolio-slider" component={Portfolioslider} />
          <Route exact path="/portfolio-masonry" component={Portfoliomasonry} />
          <Route
            exact
            path="/portfolio-details/:id"
            component={(props) => (
              <Portfoliodetails {...props} key={window.location.pathname} />
            )}
          />
          <Route exact path="/faqs" component={Faqs} />
          <Route
            exact
            path="/blog/search/:query"
            component={(props) => (
              <Blogstandard {...props} key={window.location.pathname} />
            )}
          />
          <Route
            exact
            path="/blog/cat/:catId"
            component={(props) => (
              <Blogstandard {...props} key={window.location.pathname} />
            )}
          />
          <Route
            exact
            path="/blog/user/:userId"
            component={(props) => (
              <Blogstandard {...props} key={window.location.pathname} />
            )}
          />
          <Route
            exact
            path="/blog/tag/:tagId"
            component={(props) => (
              <Blogstandard {...props} key={window.location.pathname} />
            )}
          />

          <Route exact path="/blog-standard" component={Blogstandard} />
          <Route exact path="/blog-grid" component={Bloggrid} />
          <Route
            exact
            path="/blog-details/:id"
            component={(props) => (
              <Blogdetails {...props} key={window.location.pathname} />
            )}
          />
        */}
          {/* Contact */}
          <Route exact path="/contact" component={Contact} />
        </ScrollToTop>
        <Footertwo />
      </Suspense>
    </Router>
  );
}

export default App;
