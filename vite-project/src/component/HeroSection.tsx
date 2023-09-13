import HeroImg from "../assets/unsplash-KwJ3FEuwRlE-unsplash.jpg";
import Classes from "../sass/Hero.module.scss";

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
        </div>
        <div className={Classes["btn-container"]}>
          <button className={Classes["btn"]}>Projects</button>
          <button className={Classes["btn-light"]}>Contacts</button>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
