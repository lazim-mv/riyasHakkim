import Image from "next/image";
import styles from "./container1.module.css";

import img1 from "../../../../../public/humax/1.png";
import humaxLogo from "../../../../../public/humax/humaxLogo.svg";
import calendar from "../../../../../public/humax/calendar.svg";
import location from "../../../../../public/humax/location.svg";
import call from "../../../../../public/humax/call.svg";
import GlowButton from "../common/GlowButton";

const Container1 = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.imgContainer1}>
        <div className={styles.bgBlur}></div>
        <Image src={img1} alt="image1" width={675} height={510} className={styles.heroImg} />
      </div>
      <div className={styles.contents}>
        <div className={styles.humaxLogo}>
          <Image src={humaxLogo} alt="humaxLogo" />
        </div>
        <div className={styles.textContent}>
          <h1>Welcome to Humax&apos;24:</h1>
          <p className={styles.desc1}>Maximizing Humane Experience</p>
          <div className={styles.eventDetails}>
            <div className={styles.event}>
              <div className={styles.eventIconContainer}>
                <Image src={calendar} alt="Calendar Icon" />
              </div>
              <p>Saturday 14 Dec 2024, 09:30 AM - 05:30 PM</p>
            </div>
            <div className={styles.event}>
              <div className={styles.eventIconContainer}>
                <Image src={location} alt="Location Icon" />
              </div>
              <p>Malabar Marina Convention Centre, Calicut</p>
            </div>
            <div className={styles.event}>
              <div className={styles.eventIconContainer}>
                <Image src={call} alt="Call Icon" />
              </div>
              <p>+971 52 105 7169, +91 98954 93028</p>
            </div>
          </div>
        </div>

        <GlowButton title="Book Ticket" />
      </div>
    </div>
  );
};

export default Container1;
