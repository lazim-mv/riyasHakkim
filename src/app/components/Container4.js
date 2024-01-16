"use client";
import React, {  useState } from "react";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionTitle,
} from "./ButtonComponent";
import Image from "next/image";

const Container4 = ({
  content,
  extraContent,
  className,
  classNametopContainer,
  classNameMainContainer,
  href,
}) => {
  const cardData = content.imgData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = cardData.length;
  const clicks = totalImages - 3;

  const nextImage = () => {
    if (currentIndex < clicks) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(clicks);
    }
  };

  return (
    <>
      <div className={`${classNameMainContainer} container4`} id="container4">
        <div className={`${classNametopContainer} topContainer4`}>
          <div className="topContainer4Contents">
            <SectionTitle
              sectionText={content.sectionTitle}
              width="32.73809523809524vw"
              padding="0 0 1.3227513227513228vw 0"
              textAllign="left"
              wordIndex={1}
              secondaryWordColor="#96202A"
            />
          </div>
          <div className="carouselButtonContainer">
            <div
              onClick={prevImage}
              className="carouselButtonContainerLeft carouselHover"
            >
              <Image
                width={377}
                height={420}
                src="/Container4/leftGreaterThanArrowPurple.svg"
                alt="arrow"
                className="arrow"
              />
            </div>
            <div
              onClick={nextImage}
              className="carouselButtonContainerRight carouselHover"
            >
              <Image
                width={377}
                height={420}
                src="/Container4/RightGreaterThanArrowPurple.svg"
                alt="arrow"
                className="arrow"
              />
            </div>
          </div>
        </div>
        <div className="container4Cards">
          {cardData.map((data, index) => (
            <div
              className="container4Card"
              key={index}
              style={{
                transform: currentIndex
                  ? `translateX(-${currentIndex * 27.5793650794}vw)`
                  : "",
                  transition:"transform .8s ease"
              }}
            >
              <Image
                className=""
                src={data.img}
                alt="Asian Engineer"
                width={100}
                height={100}
                quality={100}
                priority={true}
                unoptimized
              />
              <div className="container4CardContent">
                <CardHeading
                  sectionText={data.cardHeading}
                  padding="0 0 0.6613756613756614vw 0"
                />
                <SectionDescription
                  sectionText={data.description}
                  width="20.965608465608465vw"
                />
              </div>
            </div>
          ))}
        </div>
        <a href={href ? href : "/"}>
        <BtnComponent
          buttonText={content.buttonText}
          bg="#96202A"
          color="#fff"
          arrow={true}
          margin="4.62962962962963vw auto 0 auto"
        />
        </a>
      </div>
    </>
  );
};

export default Container4;
