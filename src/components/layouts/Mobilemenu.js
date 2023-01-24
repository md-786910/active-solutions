import React from "react";
import { Link } from "react-router-dom";
import navigationmenu from "../../data/navigation.json";
import navBarLogo from "../../assets/img/banner/navBarLogo.png";

console.log(navigationmenu);

const Mobilemenu = (props) => {
  return (
    <div>
      <div className="custom-container-two">
        <div className="container">
          <nav className="main-menu" style={{ width: "85%" }}>
            <div className="logo">
              <Link to="/">
                <img
                  src={navBarLogo}
                  alt="logo"
                  style={{ width: "180px", scale: "1" }}
                />
              </Link>
            </div>

            <div className="menu-items mt-4">
              <ul>
                {navigationmenu.length > 0
                  ? navigationmenu.map((item, i) => (
                      <li
                        key={i}
                        className={`menu-item  ${
                          item.child ? "menu-item-has-children" : ""
                        } `}
                        style={{ fontWeight: "500", marginBottom: "0.4em" }}
                        onClick={props.triggerChild}
                      >
                        {item.child ? (
                          <Link
                            style={{
                              fontSize: "18px",
                              fontWeight: "600",
                              color: "black",
                            }}
                            onClick={(e) => e.preventDefault()}
                            to="/"
                          >
                            {" "}
                            {item.linkText}{" "}
                          </Link>
                        ) : (
                          <Link to={item.link}> {item.linkText} </Link>
                        )}
                        {item.child ? (
                          <ul className="mx-1 mt-0 submenu" role="menu">
                            {item.submenu.map((sub_item, i) => (
                              <li
                                key={i}
                                className={`menu-item 
                                  ${
                                    sub_item.child
                                      ? "menu-item-has-children"
                                      : ""
                                  }
                                  
                                  `}
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

          <div className="main-right1">
            <Link to="/contact">
              <button className="main-btn btn-filled ">contact us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilemenu;
