"use client";
import React from "react";
import styles from "./container6.module.css";
import img1 from "../../../../../public/humax/container6/1.png";
import Image from "next/image";
import dynamic from "next/dynamic";
import Footer from "@/app/components/Footer";
import ContactComponent from "@/app/components/ContactComponent";
import GlowButton from "../common/GlowButton";

const CountdownComponent = dynamic(() => import("../countdown/Countdown"), {
  ssr: false,
});

const Container6 = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={img1} alt="Group Photo" />
          <div className={styles.row}>
            <h2 className={styles.title}>Our Event Start in</h2>
            <CountdownComponent />
            <a href="https://humax.riyashakkim.com/">
              <GlowButton title="Book Ticket" />
            </a>
          </div>
        </div>
      </div>
      <ContactComponent marginTop="0" />
      <Footer />
    </>
  );
};

export default Container6;
