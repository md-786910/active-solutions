import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../../helper/navhelper";
import navigationmenu from "../../data/navigation.json";
import classNames from "classnames";
import Canvas from "./Canvas";
import Mobilemenu from "./Mobilemenu";

class Headerthree extends HeaderComponent {
  render() {
    const stickyheader = this.state.isTop ? "sticky" : "";
    return (
      <header
        className={"header-absolute header-three sticky-header " + stickyheader}
        id="can-sticky"
      >
        <div className="container-fluid custom-container-two">
          <div className="mainmenu-area">
            <div className="d-flex align-items-center justify-content-between">
              <nav className="main-menu">
                <div className="logo">
                  <Link to="/">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/logo-white.png"
                      }
                      alt="logo"
                      className="normal-logo"
                    />
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                      alt="logo"
                      className="sticky-logo"
                    />
                  </Link>
                </div>
                <div className="menu-items">
                  <ul>
                    {navigationmenu.length > 0
                      ? navigationmenu.map((item, i) => (
                          <li
                            key={i}
                            className={`menu-item ${
                              item.child ? "menu-item-has-children" : ""
                            } `}
                            onClick={this.triggerChild}
                          >
                            {item.child ? (
                              <Link onClick={(e) => e.preventDefault()} to="/">
                                {" "}
                                {item.linkText}{" "}
                              </Link>
                            ) : (
                              <Link to={item.link}> {item.linkText} </Link>
                            )}
                            {item.child ? (
                              <ul className="submenu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                  <li
                                    key={i}
                                    className={`menu-item ${
                                      sub_item.child
                                        ? "menu-item-has-children"
                                        : ""
                                    } `}
                                  >
                                    {sub_item.child ? (
                                      <Link
                                        onClick={(e) => e.preventDefault()}
                                        to="/"
                                      >
                                        {" "}
                                        {sub_item.linkText}{" "}
                                      </Link>
                                    ) : (
                                      <Link to={sub_item.link}>
                                        {" "}
                                        {sub_item.linkText}{" "}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              </nav>
              <div className="main-right">
                <Link to="/contact" className="main-btn btn-filled">
                  contacts
                </Link>
              </div>
              <div
                className={classNames("hamburgerbtn", {
                  active: this.state.navToggle,
                })}
                onClick={this.toggleNav}
              >
                <div className="menubtn">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className={classNames("mobile-menu", {
              open: this.state.navToggle,
            })}
          >
            <button className="close-nav" onClick={this.toggleNav}>
              X
            </button>
            <Mobilemenu />
          </div>
        </div>
      </header>
    );
  }
}

export default Headerthree;
