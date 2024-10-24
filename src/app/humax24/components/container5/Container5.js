import React from "react";
import styles from "./container5.module.css";
import Image from "next/image";
import img1 from "../../../../../public/humax/container5/1.svg";
import img2 from "../../../../../public/humax/container5/2.svg";
import img3 from "../../../../../public/humax/container5/3.svg";

const Container5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h3>Powered By:</h3>
        <div className={styles.row}>
          <div className={styles.col1}>
            <Image src={img1} alt="Logo of e3 global zone" />
            <p>Empower, Elevate & Excel emotionally</p>
          </div>
          <div className={`${styles.col1} ${styles.col2} `}>
            <Image src={img2} alt="Logo of e3 global zone" />
            <p>
              Farookh Sensei&apos;s Learning Edge International (P) Ltd. Humans
              Hub Leaders
            </p>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h3>Event Managed By:</h3>
        <div className={styles.col3}>
          <Image src={img3} alt="Logo of e3 global zone" />
        </div>
      </div>
    </div>
  );
};

export default Container5;
