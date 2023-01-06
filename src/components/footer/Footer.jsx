import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
      <div className="footer__socials">
        <a href="https://github.com/Mrballer59" target="_blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com/brandon.josephr/" target="_blank">
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/brandon-joseph-ramirez-web-dev/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* <div className="footer__socials">
        <a href="https://github.com/Mrballer59" target="_blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com/brandon.josephr/" target="_blank">
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/brandon-joseph-ramirez-web-dev/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div> */}
      <div className="footer__copyright">
        <small>&copy; Brandon Joseph R. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
