import HeroImg from "../assets/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg";
import Classes from "../sass/Hero.module.scss";

const ProjectHero = () => {
  return (
    <>
      <main className={Classes["hero"]}>
        <div className={Classes["mask"]}>
          <img src={HeroImg} className={Classes["hero-img"]} alt="HeroImg" />
        </div>
        <div className={Classes["content"]}>
          <h1>Projects.</h1>
          <p>Some of my recent projects</p>
        </div>
      </main>
    </>
  );
};

export default ProjectHero;
