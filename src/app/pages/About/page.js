"use client";
import React, { useState } from "react";
import styles from "../../styles/aboutPage.module.css";
import Image from "next/image";
import {
  container1,
  container3,
  container4,
  container5,
} from "@/app/contents/aboutPage";
import {
  CardHeading,
  SectionDescription,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

const Page = () => {
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
      <Header />
      <MobileHeader />
      <div className={styles.container1}>
        <SectionTitle
          sectionText={container1.sectionTitle}
          dashText={true}
          textAllign="center"
          wordIndex={[1, 2]}
          width="58.46560846560847vw"
        />
      </div>
      <div className={styles.container2}>
        <div className={styles.container2Img}>
          <Image
            className="container3Image"
            src={container1.img}
            alt="Asian Engineer"
            width={100}
            height={100}
            quality={100}
            priority={true}
            unoptimized
          />
        </div>
        <div className={styles.container2Contents}>
          <SectionTitle sectionText={container1.name} />
          <SectionDescription sectionText={container1.description} />
        </div>
      </div>

      <div className={`${styles.aboutContainer3} container2`}>
        <SectionTitle
          sectionText={container3.sectionTitle}
          padding="0 0 4.62962962962963vw 0"
          textAllign="center"
          margin="auto"
          wordIndex={1}
          secondaryWordColor="#96202A"
        />
        <div className={`${styles.aboutContainer3Cards} cardsContainer`}>
          {container3.imgData.map((data, index) => (
            <div className={`${styles.aboutContainer3Card} cardContainer`} key={index}>
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
              <div className="cardContent">
                <CardHeading
                  sectionText={data.cardHeading}
                  margin="0 0 0.6613756613756614vw 0"
                />
                <SectionDescription sectionText={data.description} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.aboutContainer4} container3`}>
        <Image
          className="container3Image"
          src={container4.img}
          alt="Asian Engineer"
          width={100}
          height={100}
          quality={100}
          priority={true}
          unoptimized
        />
        <div className="container3Contents">
          <SectionTitle
            sectionText={container4.sectionTitle}
            padding="0 0 1.3227513227513228vw 0"
            textAllign="left"
            wordIndex={1}
            secondaryWordColor="#96202A"
          />
          <SectionDescription
            sectionText={container4.description}
            width="37.43386243386244vw"
          />
        </div>
      </div>

      <div
        className={`${styles.aboutContainer5} container4 container7`}
        id="container4"
      >
        <div className={`topContainer4`}>
          <div>
            <SectionTitle
              sectionText={container5.sectionTitle}
              width="32.73809523809524vw"
              padding="0 0 1.3227513227513228vw 0"
              textAllign="left"
              wordIndex={0}
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
              className={`${styles.aboutContainerCard5} container4Card container7Card`}
              key={index}
              style={{
                transform: currentIndex
                  ? `translateX(-${currentIndex * 27.5793650794}vw)`
                  : "",
                transition: "transform .8s ease",
              }}
            >
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
              <a href={data.href} target="_blank" >
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
      </div>

      <Contact />
      <Footer />
    </>
  );
};

export default Page;
