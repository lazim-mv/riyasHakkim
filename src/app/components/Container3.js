import Image from "next/image";
import React from "react";
import { BtnComponent, SectionDescription, SectionTitle } from "./ButtonComponent";
import { container3Data } from "../contents/contents";

const Container3 = ({mobile}) => {
  return (
    <div className="container3">
    <div className="container3Bg"></div>

      <Image
        className="container3Image"
        src={mobile ? container3Data.mobileImg : container3Data.img}
        alt="Asian Engineer"
        width={100}
        height={100}
        quality={100}
        priority={true}
        unoptimized
      />
      <div className="container3Contents">
        <SectionTitle
          sectionText={container3Data.sectionTitle}
          padding="0 0 1.3227513227513228vw 0"
          textAllign="left"
          hrMargin="0 0 2.1164021164021163vw 0"
          line={mobile ? "26.666666666666668vw" : "8.796296296296296vw"}
        />
        <SectionDescription
          sectionText={container3Data.description}
          // width="37.43386243386244vw"
        />
        <a href="/pages/Programs">
        <BtnComponent
          buttonText={container3Data.buttonText}
          bg="#96202A"
          color="#fff"
          margin="1.984126984126984vw 0 0 0"
        />
        </a>
      </div>
    </div>
  );
};

export default Container3;
