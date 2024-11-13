"use client";
import Image from "next/image";
import styles from "./container1.module.css";
import img1 from "../../../../../public/humax/1.png";
import iconDownload from "../../../../../public/humax/download.svg";
import humaxLogo from "../../../../../public/humax/humaxLogo.svg";
import calendar from "../../../../../public/humax/calendar.svg";
import location from "../../../../../public/humax/location.svg";
import call from "../../../../../public/humax/call.svg";
import GlowButton from "../common/GlowButton";
import { useEffect } from "react";

const Container1 = () => {
  const calendarLink =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Humax:2024&dates=20241214T040000Z/20241214T120000Z&details=Join+us+for+the+event!&location=https://maps.app.goo.gl/QGdB1S6HSw1anTAAA";

  const brochureLink = "/humx/HumaxEvent.pdf";

  useEffect(() => {
    if (window.location.hash === "#downloadBrochure") {
      downloadBrochure();
    }
  }, []);

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = brochureLink;
    link.download = "HumaxEvent.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container1}>
      <div className={styles.imgContainer1}>
        <div className={styles.bgBlur}></div>
        <Image
          src={img1}
          alt="image1"
          width={675}
          height={510}
          className={styles.heroImg}
        />
      </div>
      <div className={styles.contents}>
        <div className={styles.humaxLogo}>
          <Image src={humaxLogo} alt="humaxLogo" />
        </div>
        <div className={styles.textContent}>
          <h1>Welcome to Humax&apos;24:</h1>
          <p className={styles.desc1}>Maximizing Humane Experience</p>
          <div className={styles.eventDetails}>
            <a className={styles.anchorTag} href={calendarLink}>
              <div className={styles.event}>
                <div className={styles.eventIconContainer}>
                  <Image src={calendar} alt="Calendar Icon" loading="eager" />
                </div>
                <p>Saturday 14 Dec 2024, 09:30 AM - 05:30 PM</p>
              </div>
            </a>
            <a
              className={styles.anchorTag}
              href="https://maps.app.goo.gl/QGdB1S6HSw1anTAAA"
            >
              <div className={styles.event}>
                <div className={styles.eventIconContainer}>
                  <Image src={location} alt="Location Icon" loading="eager" />
                </div>
                <p>Malabar Marina Convention Centre, Calicut</p>
              </div>
            </a>
            <a className={styles.anchorTag} href="tel:919895493028">
              <div className={styles.event}>
                <div className={styles.eventIconContainer}>
                  <Image src={call} alt="Call Icon" loading="eager" />
                </div>
                <p>+971 52 105 7169, +91 98954 93028</p>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <GlowButton title="Book Ticket" />
          <a onClick={(e) => { e.preventDefault(); downloadBrochure(); }} className={styles.downloadButton}>
            <div className={styles.downloadButtonInner}>
              <Image className={styles.downloadIcon} src={iconDownload} width={20} height={20} />Download Brochure
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Container1;