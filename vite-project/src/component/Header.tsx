import Classes from "../sass/header.module.scss";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
