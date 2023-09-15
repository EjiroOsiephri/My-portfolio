import Classes from "../sass/Footer.module.scss";
import {
  FaPhone,
  FaHome,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <main className={Classes["footer-section"]}>
        <section className={Classes["personal-info"]}>
          <div className={Classes["home"]}>
            <FaHome
              style={{
                color: "white",
                fontSize: "25px",
              }}
            />
            <p>Yaba,Lagos</p>
          </div>
          <div className={Classes["phone"]}>
            <FaPhone
              style={{
                color: "white",
                fontSize: "25px",
              }}
            />
            <p>+2347065142095</p>
          </div>
          <div className={Classes["gmail"]}>
            <p>osiephriejiro765@gmail.com</p>
          </div>
        </section>
        <section className={Classes["about-info"]}>
          <p>About the company</p>
          <h4>
            This is Ejiro Osiephri , Front end developer. i enjoy collaborating
            with teams and aiding websites stability and functionality.
          </h4>
          <div className={Classes["socials"]}>
            <FaFacebook
              style={{
                color: "white",
                fontSize: "25px",
              }}
            />
            <FaTwitter
              style={{
                color: "white",
                fontSize: "25px",
              }}
            />
            <FaLinkedin
              style={{
                color: "white",
                fontSize: "25px",
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Footer;
