"use client";
import React, { useState } from "react";
import styles from "./container10.module.css";
import { SectionDescription, SectionTitle } from "../ButtonComponent";
import { container10Data } from "@/app/contents/contents";
import Image from "next/image";
import ArrowButtons from "../ArrowButton/ArrowButtons";
import { useWindowSize } from "@/app/utils/windowSize";

const Container10 = ({ mobile }) => {
  const cardData = container10Data.cardData;

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { windowSize, isSmallScreen } = useWindowSize();

  const totalData = container10Data.cardData.length;
  console.log(totalData, "clicked");
  const clicks = isSmallScreen ? totalData - 1 : totalData - 3;
  const dynamicValue = isSmallScreen ? 70 : 27.2;
  console.log(dynamicValue, currentIndex, isSmallScreen, "clicke");

  const nextImage = () => {
    if (currentIndex < clicks) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      console.log("clicked1");
      console.log(currentIndex, "clicked");
      console.log(dynamicValue, "clicked");
    } else {
      setCurrentIndex(0);
      console.log("clicked2");
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(clicks);
    }
  };

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionTitle
          padding="0 0 1.3227513227513228vw 0"
          margin="auto"
          textAllign="center"
          sectionText={container10Data.sectionTitle}
          line={mobile ? "20.767195767195766vw" : ""}
          hrMargin={mobile ? "0" : "0 auto"}
        />

        <SectionDescription sectionText={container10Data.description} />
      </div>
      <div className={styles.cards}>
        {cardData.map((data, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleCardClick(index)}
            style={{
              transform: `translateX(-${currentIndex * dynamicValue}vw)`,
              transition: `transform 0.8s ease, ${
                !isSmallScreen ? "width" : "height"
              } 0.8s ease`,
            }}
          >
            <Image
              src={data.img}
              alt="Asian Engineer"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
            />
            <div className={styles.cardHeadingWrapper}>
              <h3>{data.cardHeading}</h3>
            </div>
          </div>
        ))}
      </div>
      <ArrowButtons
        margin={isSmallScreen ? "1.984126984126984vw" : "4.62962962962963vw"}
        prevImage={prevImage}
        nextImage={nextImage}
      />
    </div>
  );
};

export default Container10;
