import React from "react";
import { CardHeading, SectionDescription } from "./ButtonComponent";
import Image from "next/image";

const Footer = () => {
  const socialIcons = [
    {
      img: "/Footer/aa/youtube.svg",
      href: "https://www.youtube.com/@riyashr",
    },
    {
      img: "/Footer/aa/instagram.svg",
      href: "https://www.instagram.com/riyasbinhakkim/?hl=en",
    },
    {
      img: "/Footer/aa/tiktok.svg",
      href: "https://www.tiktok.com/@riyas.hakkim?lang=en",
    },
    {
      img: "/Footer/aa/linkedin.svg",
      href: "https://ae.linkedin.com/in/riyashakkim",
    },
    {
      img: "/Footer/aa/threads.svg",
      href: "https://www.threads.net/@riyasbinhakkim/post/C4shCoIxNUm",
    },
    {
      img: "/Footer/aa/fb.svg",
      href: "https://www.facebook.com/riyas.hakkim.92?mibextid=LQQJ4d",
    },
  ];

  return (
    <>
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
            <a href="/pages/E3Global">E3 Global Zone</a>
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
      </div>
      <div className="copyRight">
        <a href="https://procube.vercel.app/" target="_blank">
          <SectionDescription
            sectionText="Copyright © 2024 All rights reserved by RiyasHakkim. Powered by procube"
            color="rgba(255, 255, 255, 0.60)"
            margin="1.984126984126984vw 0"
            textAllign="center"
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
