import React from "react";
import styles from "./container11.module.css";
import { container11Data } from "@/app/contents/contents";
import Image from "next/image";
import { SectionTitle } from "../ButtonComponent";

const Container11 = ({ mobile }) => {
  return (
    <div className={styles.container}>
      <SectionTitle
        sectionText={container11Data.sectionTitle}
        padding="0 0 1.3227513227513228vw 0"
        margin="auto"
        textAllign="center"
        hrMargin="0 auto"
        line={mobile ? "26.666666666666668vw" : "13.227513227513226vw"}
      />
      <div className={styles.cards}>
        {/* {container11Data.cardData.map((data, index) => ( */}
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={mobile ? "/Container11/ss/mobile.png" : "/Container11/ss/desktop.png"}
            alt="Asian Engineer"
            width={100}
            height={100}
            quality={100}
            priority={true}
            unoptimized
          />
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Container11;
