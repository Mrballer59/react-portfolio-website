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
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* End Of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Beautiful responsive web and mobile application.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Amazing landing pages with Wordpress</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ecommerce web and mobile app</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
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
              <p>Experience photographer 4 years practing with a DSLR.</p>
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
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* End Of Content Creation */}
      </div>
    </section>
  );
};

export default services;
