import React from "react";
import "./header.css";
import CTA from "./CTA";

import HeaderSocials from "./HeaderSocials";
import Typical from "react-typical";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4 className="top_title">
          Hey there, {""} {""} I'm
        </h4>
        <h1>Brandon JR</h1>
        <h4 className="h4">
          I'm a {""}
          <Typical
            loop={500}
            wrapper="b"
            steps={[
              "Frontend Developer 🖥",
              1000,
              "UX/UI Lover 💙",
              1000,
              "Node.js Student 👨🏾‍💻",
              1000,
              "React Native admirer 🤩",
              1000,
            ]}
          />
        </h4>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
