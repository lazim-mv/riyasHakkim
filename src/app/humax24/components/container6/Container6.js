"use client";
import React from "react";
import styles from "./container6.module.css";
import img1 from "../../../../../public/humax/container6/1.png";
import Image from "next/image";
import dynamic from "next/dynamic";
import Footer from "@/app/components/Footer";
import ContactComponent from "@/app/components/ContactComponent";

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
          </div>
        </div>
      </div>
      <ContactComponent />
      <Footer />
    </>
  );
};

export default Container6;
