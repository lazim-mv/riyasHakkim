import React, { useEffect, useState } from "react";
import {
  CardHeading,
  SectionDescription,
  SectionTitle,
} from "./ButtonComponent";
import { testimonial } from "../contents/contents";
import Image from "next/image";
import { useWindowSize } from "../utils/windowSize";

const Testimonial = ({mobile}) => {
  const cardData = testimonial.testimonialData;

  const [currentIndex, setCurrentIndex] = useState(0);
  const { windowSize, isSmallScreen } = useWindowSize();

  const totalData = testimonial.testimonialData.length;
  const clicks = isSmallScreen ? totalData - 1 : totalData - 3;
  const dynamicValue = isSmallScreen ? 70 : 31.746031746;

  const nextImage = () => {
    // Use a callback to handle state update and subsequent logic
    setCurrentIndex((newState) => {
      if (newState < clicks) {
        // Check based on the updated value
        console.log(newState, clicks, "jjjjjjjjj");
        return newState + 1; 
      } else {
        console.log("Maximum clicks reached.");
        return newState - 1; 
      }
    });
  };

  console.log(currentIndex, "jjjjjjjjj"); // Initial state

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="testimonialContainer">
      <div className="testimonialTitle">
        <SectionTitle
          sectionText={testimonial.sectionTitle}
          margin="auto"
          padding="0 0 1.3227513227513228vw 0"
          line={mobile ? "26.666666666666668vw" : "22.685185185185187vw"}
        />
        <SectionDescription sectionText={testimonial.description} />
      </div>
      <div className="testimonialCardsandIndicator">
        <div className="testimonialCards">
          {cardData.map((data, index) => (
            <div
              className={`testimonialCard `}
              style={{
                transform: `translateX(-${currentIndex * dynamicValue}vw)`,
                transition: `transform 3s ease, ${
                  !isSmallScreen ? "width" : "height"
                } 3s ease`,
              }}
              key={index}
            >
              <div className="headingAndImage">
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
              </div>
              <SectionDescription
                sectionText={data.description}
                // textAllign="center"
              />
            </div>
          ))}
        </div>

        {/* <div className="dotsContainer">
          {cardData.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === activeIndex ? "activeDot" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Testimonial;
