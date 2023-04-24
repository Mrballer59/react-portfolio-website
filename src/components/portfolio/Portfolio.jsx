import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/mrniceguy.png";
import IMG2 from "../../assets/Petit plat.png";
import IMG3 from "../../assets/Hrnet.png";
import IMG4 from "../../assets/argentbank.png";
import IMG5 from "../../assets/morpheus.png";
import IMG6 from "../../assets/figmaLanding.png";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-commerce wordpress MrNiceGuy Lille",
    github: "https://github.com/Mrballer59",
    demo: "http://mrniceguyfleur.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Petits plats, search algorithm project ",
    github: "https://github.com/Mrballer59/BrandonJOSEPHRAMIREZ_7_07032022",
    demo: "https://mrballer59.github.io/BrandonJOSEPHRAMIREZ_7_07032022/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Conversion of a jQuery library to React",
    github:
      "https://github.com/Mrballer59/HRnet-BrandonJOSEPHRAMIREZ_14_30102022",
    demo: "https://hrnet-brandon-jr.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "React & Redux toolkit authentication bank project ",
    // subTitle: "Technology used: React Redux toolkit",
    github: "https://github.com/Mrballer59/BrandonJosephRamirez_13_22092022",
    demo: "https://argentbank-brandon-jr.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Morpheus String Company B2B project (En cours)",
    // subTitle: "Technology used: React",
    github: "https://github.com/Mrballer59/pj-violin",
    demo: "https://morpheus-strings-v1-demo.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title:
      "UI & UX project an online children learing platform for a school     ",
    // subTitle: "Technology used: Figma",
    github: "https://github.com/Mrballer59",
    demo: "https://www.figma.com/proto/lamfNQqAjkziv77XUhdPRz/Learn%40Home-Project?node-id=67%3A1186&starting-point-node-id=67%3A1186",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, subTitle, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img className="img__part" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h4 className="sub_title">{subTitle}</h4>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
