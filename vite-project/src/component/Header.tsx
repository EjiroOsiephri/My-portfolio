import Classes from "../sass/header.module.scss";
import { NavLink, useMatch } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  const isHomeActive = useMatch("/");
  const isProjectActive = useMatch("/project");
  const isContactActive = useMatch("/contact");
  const isAboutActive = useMatch("/about");

  function showHamburger() {
    setClick(!click);
  }

  return (
    <>
      <nav className={Classes["main-header-section"]}>
        <h1>Portfolio.</h1>

        <ul
          style={
            click
              ? {
                  left: "0",
                }
              : {}
          }
          className={Classes["navLists"]}
        >
          <li>
            <NavLink to="/" className={isHomeActive ? Classes.active : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className={isProjectActive ? Classes.active : ""}
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={isAboutActive ? Classes.active : ""}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={isContactActive ? Classes.active : ""}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className={Classes["hamburger-section"]} onClick={showHamburger}>
          {click ? (
            <FaTimes
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
          ) : (
            <FaBars
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
