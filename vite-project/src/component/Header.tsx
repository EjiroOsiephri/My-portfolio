import Classes from "../sass/header.module.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <main>
        <h1>Portfolio.</h1>
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
      </main>
    </>
  );
};

export default Header;
