"use client";
import React, { useEffect, useState } from "react";
import {
  CardHeading,
  SectionDescription,
  SectionTitle,
} from "./ButtonComponent";
import { testimonial } from "../contents/contents";
import Image from "next/image";
import { useWindowSize } from "../utils/windowSize";
import Brands from "./Brands";

const Testimonial = ({ mobile, mainPage }) => {
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
        return newState;
      }
    });
  };

  console.log(currentIndex, "jjjjjjjjjtesti"); // Initial state

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const imageSources = [
    "/brands/1.svg",
    "/brands/2.svg",
    "/brands/3.svg",
    "/brands/4.svg",
    "/brands/5.svg",
    "/brands/6.svg",
    "/brands/7.svg",
    "/brands/8.svg",
    "/brands/9.svg",
    "/brands/10.svg",
    "/brands/11.svg",
    "/brands/12.svg",
    "/brands/13.svg",
    "/brands/14.svg",
    "/brands/15.svg",
    "/brands/16.svg",
    "/brands/17.svg",
    "/brands/18.svg",
    "/brands/19.svg",
  ];

  const repeatedImageSources = Array.from({ length: 20 }, () => [
    ...imageSources,
  ]).flat();

  return (
    <>
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
                    src={mobile ? data.mobileImg : data.desktopImg}
                    alt="Asian Engineer"
                    width={100}
                    height={100}
                    quality={100}
                    priority={true}
                    unoptimized
                  />
                  <div className="testimonialProfile">
                    <CardHeading
                      sectionText={data.cardHeading}
                      // padding="0 0 1.3227513227513228vw 0"
                    />
                    <p className="comapnyAndDesignation">{`${data.designation} - ${data.companyName}`}</p>
                  </div>
                </div>
                <SectionDescription
                  sectionText={data.description}
                  // textAllign="center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {mainPage && (
        <div className="brands">
          <h6 className="brandsHeading">We&apos;ve Partnered with</h6>
          <div className="clientsImgContainer">
            <Brands
              imageSources={repeatedImageSources}
              initialAnimateValue="-160%"
              hoverDuration="600"
              duration="650"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonial;
