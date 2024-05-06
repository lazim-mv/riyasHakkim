import Image from "next/image";
import React from "react";
import heroImg from "../../../public/hero1.png";
import mobileHeroImg from "../../../public/mHero1.png";
import { BtnComponent, SectionDescription } from "./ButtonComponent";
import { heroData } from "../contents/contents";

const Hero = ({mobile}) => {
  return (
    <div className="heroContianer">
      <div className="heroContent">
        <h1 className="heroTitle">{heroData.heroTitle}</h1>
        <SectionDescription
          sectionText={heroData.description}
          margin="1.3227513227513228vw 0 0 0"
          width="37.63227513227513vw"
        />
        <a href="/pages/Contact">
          <BtnComponent
            buttonText={heroData.buttonText}
            bg="#C8952E"
            color="#fff"
            margin="1.984126984126984vw 0 0 0"
          />
        </a>
      </div>
      <Image
        className="hImage"
        src={mobile ? mobileHeroImg :heroImg}
        alt="Asian Engineer"
        quality={100}
        priority={true}
        unoptimized
      />
    </div>
  );
};

export default Hero;
