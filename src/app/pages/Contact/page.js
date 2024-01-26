"use client";
import React, { useState } from "react";
import styles from "../../styles/contact.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import emailjsConfig from "../../../../emailjs.config";
import dynamic from "next/dynamic";
import {
  SectionDescription,
  SectionTitle,
} from "@/app/components/ButtonComponent";

const Header = dynamic(() => import("@/app/components/Header"));
const MobileHeader = dynamic(() => import("@/app/components/MobileHeader"));
const Footer = dynamic(() => import("@/app/components/Footer"));

function Contact() {
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
          wordIndex={2}
          width="58.46560846560847vw"
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
        <SectionTitle sectionText="Contact" />
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

      <Footer />
    </>
  );
}

export default Contact;
