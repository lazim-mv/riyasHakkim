import React from "react";
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
import Contact from "@/app/components/Contact";
import Container9 from "@/app/components/Container9";
import { programPage } from "@/app/contents/programsPage";
import Testimonial from "@/app/components/Testimonial";

const page = () => {
  const cardData = programPage.imageCard;

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.container1}>
        <SectionTitle
          sectionText={programPage.sectionTitle}
          dashText={true}
          textAllign="center"
          // wordIndex={[5, 6]}
          // width="58.46560846560847vw"
        />
      </div>
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
              <a href="/pages/Contact">
                <BtnComponent
                  buttonText={programPage.buttonText}
                  bg="#96202A"
                  color="#fff"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      <Testimonial /> 
      <Container9 />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
