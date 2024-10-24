"use client";
import React from "react";
import styles from "./container3.module.css";
import { SectionTitle } from "@/app/components/ButtonComponent";
import GlowButton from "../common/GlowButton";
import Image from "next/image";
import img1 from "../../../../../public/humax/container3/1.png";
import img2 from "../../../../../public/humax/container3/2.png";

const Container3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <SectionTitle
          sectionText="Key Features"
          padding="0 0 1.3227513227513228vw 0"
          margin="auto"
          line={"20.767195767195766vw"}
          textAllign="left"
        />
        <p>
          Join us for an inspiring session with Riyas Hakkim, India&apos;s First
          Emotional Sales Leadership Coach, and Farookh Sensei, a Leadership
          MasterCoach with 8 World Records, who has trained leaders in 48
          countries. Riyas empowers individuals to harness their emotions for
          personal and professional growth, while Farookh shares effective
          leadership strategies and insights on cultivating resilience. Don’t
          miss this chance to learn from these exceptional leaders!
        </p>
        <GlowButton title="Book Ticket" />
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <Image src={img1} alt="Riyas Hakkim Portrait" />
          <div className={styles.profileContent}>
            <h3>Riyas Hakkim</h3>
            <p>India&apos;s First Emotional Sales Leadership Coach</p>
          </div>
        </div>
        <div className={styles.profile}>
          <Image src={img2} alt="Farookh Sensei" />
          <div className={styles.profileContent}>
            <h3>Farookh Sensei</h3>
            <p>
              Leadership MasterCoach with 8 World Records, having trained
              leaders in 48 countries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container3;
