"use client";
import React from "react";
import styles from "./container.module.css";
import Card from "../card/Card";
import { container4Data } from "../../content";
import { SectionTitle } from "@/app/components/ButtonComponent";

const Container4 = () => {
  return (
    <div className={styles.container}>
      <SectionTitle
        sectionText="Key Features"
        padding="0 0 1.3227513227513228vw 0"
        margin="auto"
        line={"20.767195767195766vw"}
        textAllign="center"
        hrMargin="auto"
      />
      <div className={styles.cards}>
        {container4Data.map((item, index) => (
          <Card
            key={index}
            desc={item.desc}
            title={item.title}
            img={item.img}
            cardClassNme="container4Card"
          />
        ))}
      </div>
    </div>
  );
};

export default Container4;
