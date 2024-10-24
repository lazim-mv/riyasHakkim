"use client";
import { SectionTitle } from "@/app/components/ButtonComponent";
import styles from "./container2.module.css";
import { container2Data } from "../../content";
import Card from "../card/Card";

const Container2 = () => {
  return (
    <div className={styles.container2}>
      <SectionTitle
        sectionText="Key Features"
        padding="0 0 1.3227513227513228vw 0"
        margin="auto"
        line={"20.767195767195766vw"}
        textAllign="center"
        hrMargin="auto"
      />
      <div className={styles.cards}>
        {container2Data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Container2;
