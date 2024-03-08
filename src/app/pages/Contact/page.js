"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/contact.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import emailjsConfig from "../../../../emailjs.config";
import dynamic from "next/dynamic";
import {
  SectionDescription,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import ContactComponent from "@/app/components/ContactComponent";

const Header = dynamic(() => import("@/app/components/Header"));
const MobileHeader = dynamic(() => import("@/app/components/MobileHeader"));
const Footer = dynamic(() => import("@/app/components/Footer"));

function Contact() {
  const [windowWidth, setWindowWidth] = useState("");

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // Update the state with the initial window width
      setWindowWidth(window.innerWidth);

      // Event listener to update the state when the window is resized
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Attach the event listener
      window.addEventListener("resize", handleResize);

      // Cleanup: remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);


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

    console.log(formData);
  };

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.container1}>
        <SectionTitle
          sectionText="Have a Question ? Get in Touch with us"
          dashText={true}
          textAllign="center"
          hrMargin="0 auto"
          padding={
            windowWidth <= 768
              ? "0 0 2.666666666666667vw 0"
              : "0 0 1.3227513227513228vw 0"
          }
          line={windowWidth <= 768 ? "26.666666666666668vw" : "13.227513227513226vw"}
        />
      </div>

      <div className={styles.container2}>
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

      <div className={styles.container3}>
        <SectionTitle
          sectionText="Contact"
          padding={
            windowWidth <= 768
              ? "0 0 2.666666666666667vw 0"
              : "0 0 1.3227513227513228vw 0"
          }
          line={windowWidth <= 768 ? "26.666666666666668vw" : "13.227513227513226vw"}
        />
        <div className={styles.socialContainer}>
          <div className={styles.social}>
            <Image
              src="/callIcon.png"
              width={130}
              height={101}
              alt="socialIcon"
              quality={100}
              priority={true}
              unoptimized
            />
            <a href="tel:+971521057169">
              <SectionDescription sectionText="+971 521 057 169" />
            </a>
          </div>
          <div className={styles.social}>
            <Image
              src="/message.png"
              width={130}
              height={101}
              alt="socialIcon"
              quality={100}
              priority={true}
              unoptimized
            />
            <a href="mailto:reach@riyashakkim.com">
              <SectionDescription sectionText="reach@riyashakkim.com" />
            </a>
          </div>
        </div>
      </div>

      <ContactComponent />
      <Footer />
    </>
  );
}

export default Contact;
