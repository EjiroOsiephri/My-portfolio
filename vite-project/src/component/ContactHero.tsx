import HeroImg from "../assets/unsplash-KwJ3FEuwRlE-unsplash.jpg";
import Classes from "../sass/Hero.module.scss";
import { useTypewriter } from "react-simple-typewriter";

const ContactSection = () => {
  const [text] = useTypewriter({
    words: ["Let's have a chat shall we?"],
    loop: 0,
  });

  return (
    <>
      <main className={Classes["hero"]}>
        <div className={Classes["mask"]}>
          <img src={HeroImg} className={Classes["hero-img"]} alt="" />
        </div>
        <div className={Classes["content"]}>
          <h1>Contact.</h1>
          <p
            style={{
              textTransform: "initial",
            }}
          >
            {text}
          </p>
        </div>
      </main>
    </>
  );
};

export default ContactSection;
