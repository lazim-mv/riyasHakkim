"use client";

import React, { useState } from "react";
import {
  CardHeading,
  SectionDescription,
  SectionTitle,
} from "./ButtonComponent";
import { testimonial } from "../contents/contents";
import Image from "next/image";

const Testimonial = () => {
  const cardData = testimonial.testimonialData;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="testimonialContainer">
      <SectionTitle
        sectionText={testimonial.sectionTitle}
        width="50vw"
        textAllign="center"
        wordIndex={2}
        margin="auto"
        secondaryWordColor="#96202A"
      />
      <div className="fortestimonialCardsandIndicator">
        <div className="testimonialCards">
          {cardData.map((data, index) => (
            <div
              className={`testimonialCard ${
                index === activeIndex ? "activeCard" : ""
              }`}
              key={index}
              // style={{
              //   transform: activeIndex
              //     ? `translateX(-${activeIndex * 27.5793650794}vw)`
              //     : "",
              //   transition: "transform .8s ease",
              // }}
            >
              <Image
                className="cardIcon"
                src={data.img}
                alt="Asian Engineer"
                width={100}
                height={100}
                quality={100}
                priority={true}
                unoptimized
              />
              <CardHeading
                sectionText={data.cardHeading}
                padding="0 0 1.3227513227513228vw 0"
              />
              <SectionDescription
                sectionText={data.description}
                textAllign="center"
              />
            </div>
          ))}
        </div>

        <div className="dotsContainer">
          {cardData.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === activeIndex ? "activeDot" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
