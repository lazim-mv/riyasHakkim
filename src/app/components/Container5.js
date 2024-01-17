import Image from "next/image";
import React from "react";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "./ButtonComponent";
import { container5Data } from "../contents/contents";

const Container5 = () => {
  return (
    <div className="container3 container5">
      <div className="container3Contents">
        <SectionTitle
          sectionText={container5Data.sectionTitle}
          width="32.73809523809524vw"
          padding="0 0 1.3227513227513228vw 0"
          textAllign="left"
          wordIndex={0}
          secondaryWordColor="#96202A"
        />
        <SectionDescription
          sectionText={container5Data.description}
          width="37.43386243386244vw"
        />
        <a href="/pages/About">
        <BtnComponent
          buttonText={container5Data.buttonText}
          bg="#96202A"
          color="#fff"
          arrow={true}
          margin="1.984126984126984vw 0 0 0"
        />
        </a>
      </div>
      <Image
        className="container3Image"
        src={container5Data.img}
        alt="Asian Engineer"
        width={100}
        height={100}
        quality={100}
        priority={true}
        unoptimized
      />
    </div>
  );
};

export default Container5;
