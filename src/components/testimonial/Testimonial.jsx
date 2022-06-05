import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ex ratione quod dolor sint perferendis velit corrupti ad, illum molestias.",
  },
  {
    avatar: AVTR2,
    name: "Test Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ex ratione quod dolor sint perferendis velit corrupti ad, illum molestias.",
  },
  {
    avatar: AVTR3,
    name: "skni Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ex ratione quod dolor sint perferendis velit corrupti ad, illum molestias.",
  },
  {
    avatar: AVTR4,
    name: "cowhead Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ex ratione quod dolor sint perferendis velit corrupti ad, illum molestias.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
// add when clients give back review
