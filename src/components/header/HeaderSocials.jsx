import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/brandon-joseph-ramirez-web-dev/"
        target="_blank"
      >
        <BsLinkedin size={"1.5em"} />
      </a>
      <a href="https://github.com/Mrballer59" target="_blank">
        <FaGithub size={"1.5em"} />
      </a>
    </div>
  );
};

export default HeaderSocials;
