import React from "react";
import { CardHeading, SectionDescription } from "./ButtonComponent";
import Image from "next/image";

const Footer = () => {
  const socialIcons = [
    "/Footer/1(1).png",
    "/Footer/1(2).png",
    "/Footer/1(3).png",
    "/Footer/1(4).png",
  ];

  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <Image
          src="/footerLogo.svg"
          width={130}
          height={101}
          alt="ImageHeader"
          quality={100}
          priority={true}
          unoptimized
        />
        <SectionDescription
          sectionText="Guiding you through the nuances of emotional sales, transform your professional goals into achievements with expert ease and insight."
          width="24.933862433862434vw"
        />
      </div>

      <div className="quickLinks">
        <CardHeading
          sectionText="Quick Links"
          margin="0 0 2.380952380952381vw 0"
        />
        <a href="/pages/About">
        <SectionDescription sectionText="About" /></a>
        <a href="/pages/Programs">
        <SectionDescription sectionText="Programs" /></a>
        <a href="/pages/Contact">
        <SectionDescription sectionText="Contact Us" /></a>
      </div>
      <div className="social">
        <CardHeading sectionText="Social Media" />
        <div className="socialIcons">
          {socialIcons.map((data, index) => (
            <Image
              key={index}
              src={data}
              width={130}
              height={101}
              alt={`Social Icon ${index + 1}`}
              quality={100}
              priority={true}
              unoptimized
            />
          ))}
        </div>
      </div>
      <div className="copyRightContainer">
        <hr />
        <SectionDescription
          textAllign="center"
          sectionText="©2023 RiyasHakkim. All rights reserved."
          margin="1.984126984126984vw 0"
        />
      </div>
    </div>
  );
};

export default Footer;
