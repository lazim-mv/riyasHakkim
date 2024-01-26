import React from "react";
import { CardHeading, SectionDescription } from "./ButtonComponent";
import Image from "next/image";

const Footer = () => {
  const socialIcons = [
    // {
    //   img: "/Footer/1(1).png",
    //   href: "https://www.linkedin.com/in/riyashakkim/",
    // },
    {
      img: "/Footer/1(2).png",
      href: "https://www.instagram.com/riyasbinhakkim/",
    },
    {
      img: "/Footer/1(3).png",
      href: "https://www.linkedin.com/in/riyashakkim/",
    },
    // {
    //   img: "/Footer/1(4).png",
    //   href: "https://www.tiktok.com/@riyas.hakkim?lang=en",
    // },
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
        <CardHeading sectionText="Quick Links" margin="0 0 1.1vw 0" />
        <div>
          <a href="/pages/About">About</a>
        </div>
        <div>
          <a href="/pages/Programs">Programs</a>
        </div>
        <div>
          <a href="/pages/Contact">Contact Us</a>
        </div>
      </div>
      <div className="social">
        <CardHeading sectionText="Social Media" />
        <div className="socialIcons">
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
      <div className="copyRight">
        <hr />
        <SectionDescription
          sectionText="©2023 RiyasHakkim. All rights reserved."
          color="rgba(255, 255, 255, 0.60)"
          margin="1.984126984126984vw 0"
          textAllign="center"
        />
      </div>
    </div>
  );
};

export default Footer;
