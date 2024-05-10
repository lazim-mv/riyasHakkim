"use client";
import React, { useEffect, useState } from "react";
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
import Contact from "@/app/components/ContactComponent";
import Footer from "@/app/components/Footer";
import Testimonial from "@/app/components/Testimonial";
import Container12 from "@/app/components/Container12/Container12";
import StatsComponent from "@/app/components/Stats/StatsComponent";

const Page = () => {
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

  const socialIcons = [
    {
      img: "/Footer/aa/youtube.svg",
      href: "https://www.youtube.com/@riyashr",
    },
    {
      img: "/Footer/aa/instagram.svg",
      href: "https://www.instagram.com/riyasbinhakkim/?hl=en",
    },
    {
      img: "/Footer/aa/tiktok.svg",
      href: "https://www.tiktok.com/@riyas.hakkim?lang=en",
    },
    {
      img: "/Footer/aa/linkedin.svg",
      href: "https://ae.linkedin.com/in/riyashakkim",
    },
    {
      img: "/Footer/aa/threads.svg",
      href: "https://www.threads.net/@riyasbinhakkim/post/C4shCoIxNUm",
    },
    {
      img: "/Footer/aa/fb.svg",
      href: "https://www.facebook.com/riyas.hakkim.92?mibextid=LQQJ4d ",
    },
  ];
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.container1}>
        <SectionTitle
          sectionText={container1.sectionTitle}
          dashText={true}
          textAllign="center"
          width={windowWidth <= 768 ? "auto" : "58.46560846560847vw"}
          padding={windowWidth <= 768 ? "" : "0 0 1.3227513227513228vw 0"}
          line={
            windowWidth <= 768 ? "26.666666666666668vw" : "13.227513227513226vw"
          }
          hrMargin="0 auto"
        />
      </div>
      <div className={styles.container2}>
        <div className={styles.container2Img}>
          <Image
            className={styles.container2Image}
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
          <SectionTitle sectionText={container1.name} line="0" />
          <SectionDescription sectionText={container1.description} />
          <div className="social">
            <CardHeading />
            <div className={`${styles.socialIconsAbout} socialIcons`}>
              {socialIcons.map((data, index) => (
                <a href={data.href} target="_blank" key={index}>
                  <Image
                    src={data.img}
                    width={130}
                    height={101}
                    alt={`Social Icon ${index + 1}`}
                    quality={100}
                    priority={true}
                    unoptimized
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.aboutContainer3} container2`}>
        <SectionTitle
          sectionText={container3.sectionTitle}
          textAllign="center"
          margin="auto"
          padding={windowWidth <= 768 ? "" : "0 0 1.3227513227513228vw 0"}
          line={
            windowWidth <= 768 ? "26.666666666666668vw" : "13.227513227513226vw"
          }
          hrMargin="0 auto"
        />
        <div
          className={`${styles.aboutContainer3Cards} cardsContainer aboutPageCards`}
        >
          {container3.imgData.map((data, index) => (
            <div
              className={`${styles.aboutContainer3Card} cardContainer`}
              key={index}
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
              <div className="cardContent">
                <CardHeading
                  sectionText={data.cardHeading}
                  margin="0 0 0.6613756613756614vw 0"
                />
                <p
                  style={{
                    height:
                      windowWidth <= 768 ? "auto" : "7.2751322751322745vw",
                  }}
                >
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <StatsComponent mobile={windowWidth <= 768} />

      <div className={`${styles.aboutContainer4} container3`}>
        <div className={`${styles.aboutContainer4Contents} container3Contents`}>
          <SectionTitle
            sectionText={container4.sectionTitle}
            textAllign="left"
            padding={windowWidth <= 768 ? "" : "0 0 1.3227513227513228vw 0"}
            line={
              windowWidth <= 768
                ? "26.666666666666668vw"
                : "15.873015873015872vw"
            }
          />
          <SectionDescription
            sectionText={container4.description}
            // width="37.43386243386244vw"
          />
        </div>
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
      </div>

      {/* <div
        className={`${styles.aboutContainer5} container4 container7`}
        id="container4"
      >
        <div className={`${styles.aboutContainer5Title} topContainer4`}>
          <div>
            <SectionTitle
              sectionText={container5.sectionTitle}
              width={windowWidth <= 768 ? "auto" : "32.73809523809524vw"}
              padding="0 0 1.3227513227513228vw 0"
              textAllign="left"
              wordIndex={0}
              secondaryWordColor="#C8952E"
              hrMargin={windowWidth <= 768 ? "auto" : ""}
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
      </div> */}
      <Container12 aboutPage={true} />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
