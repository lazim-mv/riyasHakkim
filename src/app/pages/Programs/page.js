"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/programs.module.css";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/ContactComponent";
import Container9 from "@/app/components/Container9";
import { programPage } from "@/app/contents/programsPage";
import Testimonial from "@/app/components/Testimonial";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Page = () => {
  const cardData = programPage.imageCard;
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(
      ".programs_imageContainer__w6e5z"
    );

    revealContainers.forEach((container) => {
      let trigger = container.querySelector(".programs_cards__Djnpl");
      let image = container.querySelector(
        ".programs_imageContainer__w6e5z img"
      );
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset",
          start: "center 50%",
          end: "center 50%",
          // markers:true,
        },
      });

      tl.set(container, { autoAlpha: 1 });

      tl.from(image, {
        opacity: 0,
        duration: 0.05,
        ease: "Power2.out",
      });
      tl.to(image, {
        duration: 0.05,
        ease: "Power2.out",
        opacity: 1,
      });
    });

    // initializeAnimations();
  }, []);

  return (
    <>
      <Header />
      <MobileHeader />

      <div className={styles.container1}>
        <SectionTitle
          width={windowWidth <= 768 ? "auto" : "48.74338624338625vw"}
          sectionText={programPage.sectionTitle}
          dashText={true}
          textAllign="center"
          padding={windowWidth <= 768 ? "" : "0 0 1.3227513227513228vw 0"}
          line={
            windowWidth <= 768 ? "26.666666666666668vw" : "13.227513227513226vw"
          }
          hrMargin="0 auto"
        />
      </div>
      {windowWidth >= 768 ? (
        <>
          <div className={styles.cards}>
            <div className={styles.left}>
              {cardData.map((data, index) => (
                <div className={styles.cardContent} key={index}>
                  <SectionTitle
                    sectionText={data.title}
                    // padding={isSmallScreen ? "" : "0 0 1.3227513227513228vw 0"}
                    line={
                      windowWidth <= 768
                        ? "26.666666666666668vw"
                        : "15.939153439153438vw"
                    }
                  />
                  <SectionDescription sectionText={data.description} />
                </div>
              ))}
            </div>
            <div className={styles.right}>
              {cardData.map((data, index) => (
                <div className={styles.imageContainer} key={index}>
                  <Image
                    className=""
                    src={data.img}
                    alt="Asian Engineer"
                    quality={100}
                    priority={true}
                    unoptimized
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className={styles.cards}>
          {cardData.map((data, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imageContainer}>
                <Image
                  className=""
                  src={data.img}
                  alt="Asian Engineer"
                  quality={100}
                  priority={true}
                  unoptimized
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.cardContent}>
                <SectionTitle sectionText={data.title} />
                <SectionDescription sectionText={data.description} />
              </div>
            </div>
          ))}
        </div>
      )}
      <Testimonial />
      <Container9 />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
