import React, { useEffect, useState } from "react";
import styles from "./container12.module.css";
import { SectionDescription, SectionTitle } from "../ButtonComponent";
import { container5 } from "@/app/contents/aboutPage";
import Image from "next/image";
import Brands from "../Brands";
import ArrowButtons from "../ArrowButton/ArrowButtons";

const Container12 = ({ mobile, mainPage, aboutPage }) => {
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalData = cardData.length;
  console.log(totalData, "clicked");
  const clicks = windowWidth <= 767 ? totalData - 1 : totalData - 3;
  const dynamicValue = windowWidth <= 767 ? 70 : 27.2;
  console.log(dynamicValue, currentIndex, mobile, "clicke");

  const nextImage = () => {
    if (currentIndex < clicks) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      console.log(dynamicValue, aboutPage, "dynamicValue");
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
    <>
      <div className={`${styles.container12} container4 `} id="container4">
        <div className={`${styles.container12Title} topContainer4`}>
          <div
            className={`${styles.container12Top} testimonialTitle`}
            style={{
              display: aboutPage && "flex",
              justifyContent: aboutPage && "center",
            }}
          >
            <SectionTitle
              sectionText={
                aboutPage ? "Riyas Hakkim Speaks" : container5.sectionTitle
              }
              margin="auto"
              padding="0 0 1.3227513227513228vw 0"
              line={
                windowWidth <= 767
                  ? "26.666666666666668vw"
                  : "22.685185185185187vw"
              }
              hrMargin={aboutPage && "0 auto"}
              textAllign={
                (aboutPage && "center") ||
                (mobile && aboutPage && "center") ||
                (mobile && mainPage && "left")
              }
            />
            {mainPage && (
              <SectionDescription
                sectionText={container5.description}
                width={mobile ? "87.2vw" : "31.746031746031743vw"}
              />
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
                  ? `translateX(-${currentIndex * dynamicValue}vw)`
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
        <ArrowButtons
          margin={
            windowWidth <= 767 ? "1.984126984126984vw" : "4.62962962962963vw"
          }
          prevImage={prevImage}
          nextImage={nextImage}
        />
      </div>
    </>
  );
};

export default Container12;
