import Classes from "../sass/ProjectComponent.module.scss";
import First from "../assets/Screenshot (3).png";
import Second from "../assets/Screenshot (4).png";
import Third from "../assets/Screenshot (5).png";
import { useState } from "react";

const ProjectComponent = () => {
  const dummyData = [
    {
      img: Second,
      headerText: "Chat Application with Video call section",
      description:
        "EjiroChatHub is your gateway to seamless communication. With a clean and intuitive interface, EjiroChatHub offers reliable messaging and calling services that connect you with friends and family around the globe. Stay connected with voice and video calls that make you feel like you're in the same room.",
    },
    {
      img: Third,
      headerText: "Shoppingify",
      description:
        "Welcome to Shoppinify, your ultimate shopping list companion. Simplify your shopping experience with Shoppinify, where creating, organizing, and managing your shopping lists has never been easier. Say goodbye to forgotten items and hello to efficiency. Seamlessly add items, categorize your lists, and check off purchases as you go.",
    },
    {
      img: First,
      headerText: "Space tourism website",
      description:
        "Embark on the journey of a lifetime with Space tourism website, where the boundaries of Earth are just the beginning. We are your gateway to the stars, offering a unique and awe-inspiring space travel experience that will leave you forever changed.",
    },
  ];
  const [view, setView] = useState<string>();
  const [source, setSource] = useState<string>();

  function showView(item: number) {
    if (item === 0) {
      setView("https://github.com/EjiroOsiephri/Chat-application-react");
    }
    if (item === 1) {
      setView("https://github.com/EjiroOsiephri/Shoppingfy-app");
    }
    if (item === 2) {
      setView("https://github.com/EjiroOsiephri/Space-tourism-website-main");
    }
  }

  function showSource(item: number) {
    if (item === 0) {
      setSource("https://ejiro-chathub.netlify.app/");
    }
    if (item === 1) {
      setSource("https://mellifluous-lily-2b3d2d.netlify.app/");
    }
    if (item === 2) {
      setSource("https://singular-sherbet-6dddf9.netlify.app/");
    }
  }

  return (
    <>
      <main className={Classes["project-component-main"]}>
        <h1>Projects.</h1>
        <section className={Classes["Project-section"]}>
          {dummyData.map((item, index) => {
            return (
              <div
                className={Classes["project-div"]}
                style={{
                  height: "50%",
                }}
                key={index}
              >
                <img src={item.img} alt="" />
                <h1>{item.headerText}</h1>
                <h3>{item.description}</h3>
                <div className={Classes["btn-section"]}>
                  <button
                    onClick={() => {
                      showView(index);
                    }}
                    className={Classes["btn"]}
                  >
                    <a href={view} target="_blank" rel="noopener noreferrer">
                      Source
                    </a>
                  </button>
                  <button
                    onClick={() => {
                      showSource(index);
                    }}
                    className={Classes["btn"]}
                  >
                    <a href={source} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default ProjectComponent;
