import HeroImg from "../assets/unsplash-KwJ3FEuwRlE-unsplash.jpg";
import Classes from "../sass/Hero.module.scss";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <main className={Classes["hero"]}>
        <div className={Classes["mask"]}>
          <img src={HeroImg} className={Classes["hero-img"]} alt="" />
        </div>
        <div className={Classes["content"]}>
          <p>Hi, I'm Ejiro</p>
          <h1>MERN STACK DEVELOPER</h1>
          <button className={Classes["btn"]}>
            <Link to="/project">Projects</Link>
          </button>
          <button className={Classes["btn-light"]}>
            <Link to="/contact">Contacts</Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
