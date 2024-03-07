import React from "react";
import { SectionDescription, SectionTitle } from "./ButtonComponent";
import Image from "next/image";
import { container6Data } from "../contents/contents";

const Container6 = () => {
  return (
    <div className="container6">
      <div className="videoContainerBackground"></div>
      <div className="videoContainer">
        <a href="https://youtu.be/kCCtQp8y_xQ?si=qjcZSnOJ2iKpqEzZ" target="_blank">
          <Image
            className="container3Image container6img"
            src={container6Data.img}
            alt="Asian Engineer"
            width={100}
            height={100}
            quality={100}
            priority={true}
            unoptimized
          />
          <div className="playButtonContainer">
            <Image
              className="playIcon"
              src={container6Data.playIcon}
              alt="Asian Engineer"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
            />
          </div>
        </a>
      </div>
      <div className="container6Contents">
        <SectionTitle
          sectionText={container6Data.sectionTitle}
          width="37.10317460317461vw"
          padding="0 0 1.3227513227513228vw 0"
          textAllign="left"
          line="15.74074074074074vw"
        />
        <SectionDescription
          width="37.63227513227513vw"
          sectionText={container6Data.description}
        />
      </div>
    </div>
  );
};

export default Container6;
