"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/e3global.module.css";
import Image from "next/image";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import emailjs from "@emailjs/browser";
import emailjsConfig from "../../../../emailjs.config";
import { container2, container3, container4 } from "@/app/contents/e3global";
import {
  CardHeading,
  SectionDescription,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import Footer from "@/app/components/Footer";
import ContactComponent from "@/app/components/ContactComponent";
import Container2 from "@/app/components/Container2";

const Page = () => {
  const [windowWidth, setWindowWidth] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const socialIcons = [
    {
      img: "/Footer/aa/instagram.svg",
      href: "https://instagram.com/e3_globalzone/",
    },
    {
      img: "/Footer/aa/linkedin.svg",
      href: "https://www.linkedin.com/in/e3-global-zone-545369306 ",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        e.target,
        emailjsConfig.userId
      )
      .then((response) => {
        console.log("Email sent successfully!", response);

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
      });

    console.log(formData, "contactForm");
  };

  return (
    <>
      <div>
        <Header />
        <MobileHeader />
      </div>
      <div className={styles.container1}>
        <Image
          src="/e3Global.svg"
          width={10}
          height={10}
          className="e3GloabalImg"
          quality={100}
          priority={true}
          unoptimized
        />
      </div>

      <div className={styles.container2}>
        <div className={styles.container2Contents}>
          <SectionTitle
            sectionText={container2.sectionTitle}
            line={
              windowWidth <= 768
                ? "26.666666666666668vw"
                : "15.873015873015872vw"
            }
          />
          <SectionDescription
            sectionText={container2.description}
            margin={
              windowWidth <= 768 ? "4vw 0 0 0" : "2.1164021164021163vw 0 0 0"
            }
          />
          <div className="social">
            <CardHeading />
            <div className={`${styles.socialIconsAbout} socialIcons`}>
              {socialIcons.map((data, index) => (
                <a href={data.href} target="_blank" key={index}>
                  <Image
                    src={data.img}
                    width={130}
                    height={101}
                    alt={`Social Icon ${index + 1}`}
                    quality={100}
                    priority={true}
                    unoptimized
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.container2Img}>
          <Image
            className={styles.container2Image}
            src={container2.img}
            alt="Asian Engineer"
            width={100}
            height={100}
            quality={100}
            priority={true}
            unoptimized
          />
        </div>
      </div>

      <Container2 e3Global={true} />

      <div className={styles.container3}>
        <div className={styles.sectionTitle}>
          <SectionTitle
            sectionText={container3.sectionTitle}
            margin="0 0 1.3227513227513228vw 0"
            hrMargin="0 auto"
          />
        </div>
        <div className={styles.container3Cards}>
          {container3.cardData.map((data, index) => (
            <div key={index} className={styles.container3Card} style={{}}>
              <Image
                src={data.img}
                alt="Asian Engineer"
                width={100}
                height={100}
                quality={100}
                priority={true}
                unoptimized
              />
              <div className={styles.cardHeadingWrapper}>
                <h3>{data.cardHeading}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container4}>
        <div className={styles.sectionTitle}>
          <SectionTitle
            sectionText={container4.sectionTitle}
            margin="0 0 1.3227513227513228vw 0"
            hrMargin="0 auto"
          />
        </div>

        <div className={styles.container4Cards}>
          {container4.cardData.map((data, index) => (
            <div key={index} className={styles.container4Card} style={{}}>
              <Image
                src={data.img}
                alt="Asian Engineer"
                width={100}
                height={100}
                quality={100}
                priority={true}
                unoptimized
              />
              <div className={styles.container4Contents}>
                <h3>{data.name}</h3>
                <p style={{ textAlign: "center" }}>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.contactE3}>
        <SectionTitle
          textAllign="center"
          sectionText="Get in Touch With Us"
          margin="0 auto 1.3227513227513228vw auto"
          hrMargin="0 auto"
        />
        <div className={styles.contactE3Container2}>
          <div className={styles.leftContainer}>
            <div className={styles.mailContainer}>
              <h3>Say Hello.</h3>
              <div className={styles.mailAndCallContainer}>
                <a href="tel:+971521057169">
                  <div className={styles.mailAndCall}>
                    <Image
                      src="/callIcon.svg"
                      width={130}
                      height={101}
                      alt="socialIcon"
                      quality={100}
                      priority={true}
                      unoptimized
                    />
                    <SectionDescription sectionText="+971 521 057 169" />
                  </div>
                </a>
                <a href="mailto:training@e3globalzone.com">
                  <div className={styles.mailAndCall}>
                    <Image
                      src="/mail.svg"
                      width={130}
                      height={101}
                      alt="socialIcon"
                      quality={100}
                      priority={true}
                      unoptimized
                    />
                    <SectionDescription sectionText="training@e3globalzone.com" />
                  </div>
                </a>
              </div>
            </div>
            <div className="social">
              <CardHeading sectionText="Social Media" />
              <div className={`${styles.socialIconsAbout} socialIcons`}>
                {socialIcons.map((data, index) => (
                  <a href={data.href} target="_blank" key={index}>
                    <Image
                      src={data.img}
                      width={130}
                      height={101}
                      alt={`Social Icon ${index + 1}`}
                      quality={100}
                      priority={true}
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
              />
            </div>
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>
            <div className={styles.textBox}>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
              ></textarea>
            </div>
            <div className={styles.formSubmit}>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <ContactComponent />
      <Footer />
    </>
  );
};

export default Page;
