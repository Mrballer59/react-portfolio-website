import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create stunning dynamic mockups on Figma</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing Mobile apps interface</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Best design and prototyping practices for the best user
                experience
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create trendy eye catching design</p>
            </li>
          </ul>
        </article>
        {/* End Of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web & Mobile Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Beautiful responsive web and mobile application using React.js.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Amazing landing pages with Wordpress</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ecommerce web and mobile app using CMS Strapi as backend</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fast optimize aplications using Next.js </p>
            </li>
          </ul>
        </article>
        {/* End Of Web Dev */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> Photography experience 4 years of using a DSLR.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Editing and creating videos for social media.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Photoshop lightroom and adobe premiere pro.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content management and community manager</p>
            </li>
          </ul>
        </article>
        {/* End Of Content Creation */}
      </div>
    </section>
  );
};

export default services;
