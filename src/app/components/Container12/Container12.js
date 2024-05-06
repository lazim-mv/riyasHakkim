import React, { useEffect, useState } from "react";
import styles from "./container12.module.css";
import { SectionDescription, SectionTitle } from "../ButtonComponent";
import { container5 } from "@/app/contents/aboutPage";
import Image from "next/image";
import Brands from "../Brands";

const Container12 = ({ mobile, mainPage }) => {
  const [windowWidth, setWindowWidth] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const cardData = container5.imgData;
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
      <div
        className={`${styles.container12} container4 container7`}
        id="container4"
      >
        <div className={`${styles.container12Title} topContainer4`}>
          <div className={`${styles.container12Top} testimonialTitle`}>
            <SectionTitle
              sectionText={container5.sectionTitle}
              margin="auto"
              padding="0 0 1.3227513227513228vw 0"
              line={mobile ? "26.666666666666668vw" : "22.685185185185187vw"}
            />
            {mainPage && (
              <SectionDescription sectionText={container5.description} />
            )}
          </div>
        </div>
        <div className={`${styles.container12Cards} container4Cards`}>
          {cardData.map((data, index) => (
            <div
              className={`${styles.container12Card} container4Card container7Card`}
              key={index}
              style={{
                transform: currentIndex
                  ? `translateX(-${currentIndex * 27.5793650794}vw)`
                  : "",
                transition: "transform .8s ease",
              }}
            >
              <a href={data.href} target="_blank">
                <Image
                  src="/aboutPage/yt.png"
                  alt="Asian Engineer"
                  width={100}
                  height={100}
                  quality={100}
                  priority={true}
                  unoptimized
                  className={styles.ytIcon}
                />
              </a>
              <a href={data.href} target="_blank">
                <Image
                  className={styles.aboutCardImg}
                  src={data.img}
                  alt="Asian Engineer"
                  width={100}
                  height={100}
                  quality={100}
                  priority={true}
                  unoptimized
                />
              </a>
            </div>
          ))}
        </div>
        <div className={`${styles.arrowButtons} carouselButtonContainer`}>
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
    </>
  );
};

export default Container12;
