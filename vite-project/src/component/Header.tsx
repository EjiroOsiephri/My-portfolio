import Classes from "../sass/header.module.scss";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  function showTimes() {
    setClick(false);
  }

  function showHamburger() {
    setClick(true);
  }

  return (
    <>
      <nav className={Classes["main-header-section"]}>
        <h1>Portfolio.</h1>
        <section className={Classes["navLists"]}>
          <ul>
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
        </section>
        <div className={Classes["hamburger-section"]}>
          {!click && (
            <FaBars
              onClick={showHamburger}
              style={{
                color: "white",
                cursor: "Pointer",
                fontSize: "20px",
              }}
            />
          )}
          {click && (
            <FaTimes
              onClick={showTimes}
              style={{
                color: "white",
                cursor: "Pointer",
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
