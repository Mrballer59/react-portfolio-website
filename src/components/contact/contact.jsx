import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__option">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>

            <a href="mailto: Brandon.JR.Dev@hotmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin />
            <h4>Linked In </h4>
            <h5>just in case you didn't see it above</h5>
            <a href="https://linkedin.com/">Check it out</a>
          </article>
        </div>
        {/* End of contact options */}
        <form action=""></form>
      </div>
    </section>
  );
};

export default contact;
