import HeroImg from "../assets/unsplash-KwJ3FEuwRlE-unsplash.jpg";
import Classes from "../sass/Hero.module.scss";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["MERN STACK DEVELOPER", "AND", "FRONT END DEVELOPER"],
    loop: 0,
    typeSpeed: 100,
  });

  return (
    <>
      <main className={Classes["hero"]}>
        <div className={Classes["mask"]}>
          <img src={HeroImg} className={Classes["hero-img"]} alt="" />
        </div>
        <div className={Classes["content"]}>
          <p>Hi, I'm Ejiro</p>
          <h1>
            {text} <Cursor cursorColor="red" />
          </h1>
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
