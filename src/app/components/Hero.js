import Image from "next/image";
import React from "react";
import heroImg from "../../../public/hero1.png";
import mobileHeroImg from "../../../public/mHero1.png";
import { BtnComponent, SectionDescription } from "./ButtonComponent";
import { heroData } from "../contents/contents";

const Hero = ({ mobile, isIOS }) => {
  return (
    <div className="heroContianer">
      <div className="heroContent">
        <h1 className="heroTitle">
          {heroData.heroTitle}
          <div
            className="tradeMark"
            style={{
              right:
                isIOS && mobile
                  ? "4.8vw"
                  : !isIOS && mobile
                  ? "8vw"
                  : !isIOS && !mobile
                  ? "4.497354497354497vw"
                  : "4.497354497354497vw",
            }}
          >
            <span>TM</span>
          </div>
        </h1>
        <SectionDescription
          sectionText={heroData.description}
          margin="1.3227513227513228vw 0 0 0"
          width="37.63227513227513vw"
        />
        {/* <a href="/pages/Contact"> */}
        <Image
          src="/e3Global.svg"
          width={10}
          height={10}
          className="e3GloabalImg"
          quality={100}
          priority={true}
          unoptimized
        />
        {/* </a> */}
      </div>
      <Image
        className="hImage"
        src={mobile ? mobileHeroImg : heroImg}
        alt="Asian Engineer"
        quality={100}
        priority={true}
        unoptimized
      />
    </div>
  );
};

export default Hero;
