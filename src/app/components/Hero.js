import Image from "next/image";
import React from "react";
import heroImg from "../../../public/hero.png";
import { BtnComponent, SectionDescription } from "./ButtonComponent";
import { heroData } from "../contents/contents";

const Hero = () => {
  return (
    <div className="heroContianer">
      <div className="heroContent">
        <h1 className="heroTitle">{heroData.heroTitle}</h1>
        <SectionDescription
          sectionText={heroData.description}
          margin="1.3227513227513228vw 0 0 0"
          width="37.63227513227513vw"
        />

        <BtnComponent
          buttonText={heroData.buttonText}
          bg="#96202A"
          color="#fff"
          arrow={true}
          margin="1.984126984126984vw 0 0 0"
        />
      </div>
      <Image
        className="hImage"
        src={heroImg}
        alt="Asian Engineer"
        quality={100}
        priority={true}
        unoptimized
      />
    </div>
  );
};

export default Hero;
