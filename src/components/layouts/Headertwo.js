import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../../helper/navhelper";
import navigationmenu from "../../data/navigation.json";
import classNames from "classnames";
import Mobilemenu from "./Mobilemenu";
import navBarLogo from "../../assets/img/banner/navBarLogo.png";

class Headertwo extends HeaderComponent {
  render() {
    const stickyheader = this.state.isTop ? "sticky" : "";
    return (
      <header
        className={"header-two sticky-header " + stickyheader}
        id="can-sticky"
      >
        <div
          className="mainmenu-area"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <div className="container-fluid custom-container-two">
            <div className="d-flex align-items-center justify-content-between">
              <nav
                className="main-menu d-flex align-items-center justify-content-between"
                style={{ width: "85%" }}
              >
                <div className="logo">
                  <Link to="/">
                    <img src={navBarLogo} alt="logo" style={{ scale: "1.2" }} />
                  </Link>
                </div>

                <div className="menu-items ">
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
                                    ) : item.linkText !== "Products" ? (
                                      <Link to={sub_item.link}>
                                        {" "}
                                        {sub_item.linkText}{" "}
                                      </Link>
                                    ) : (
                                      <Link to={sub_item.linkPro}>
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
                <Link to="/contact">
                  <button className="main-btn btn-filled ">contact us</button>
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
        </div>
        {/* Mobile Menu */}
        <div
          className={classNames("mobile-menu", { open: this.state.navToggle })}
        >
          <button className="close-nav" onClick={this.toggleNav}>
            X
          </button>
          <Mobilemenu />
        </div>
      </header>
    );
  }
}

export default Headertwo;
