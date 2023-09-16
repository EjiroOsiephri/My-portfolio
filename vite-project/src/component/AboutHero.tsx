import HeroImg from "../assets/altumcode-XMFZqrGyV-Q-unsplash.jpg";
import Classes from "../sass/Hero.module.scss";
import PhotoImg from "../assets/photo_2023-09-09_13-03-33-4a7a6b5f.jpg";
import { useNavigate } from "react-router";

const AboutHero = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className={Classes["hero"]}>
        <div className={Classes["mask"]}>
          <img src={HeroImg} className={Classes["hero-img"]} alt="HeroImg" />
        </div>
        <div className={Classes["content"]}>
          <h1>About.</h1>
          <p>I am a friendly full stack developer</p>
        </div>
        <div className={Classes["about-content"]}>
          <section className={Classes["aboutText"]}>
            <h4>
              As a frontend developer, I am passionate about crafting
              user-friendly and visually appealing web experiences. With a keen
              eye for design and a strong command of web technologies, I
              specialize in bringing creative concepts to life in the digital
              realm for my clients
              <button
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact
              </button>
            </h4>
          </section>
          <section className={Classes["aboutImg"]}>
            <img src={PhotoImg} alt="Photoimg" />
          </section>
        </div>
      </main>
    </>
  );
};

export default AboutHero;
