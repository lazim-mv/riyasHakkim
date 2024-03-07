import Image from "next/image";
import React from "react";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "./ButtonComponent";
import { container5Data } from "../contents/contents";

const Container5 = ({mobile}) => {
  return (
    <div className="container3 container5">
      <div className="container3Contents container5Contents">
        <SectionTitle
          sectionText={container5Data.sectionTitle}
          width="32.73809523809524vw"
          padding="0 0 1.3227513227513228vw 0"
          textAllign="left"
          hrMargin={mobile ? "0" : "0 0 2.1164021164021163vw 0"}
          line={mobile ? "26.666666666666668vw" :"15.939153439153438vw"}
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
            margin="1.984126984126984vw 0 0 0"
          />
        </a>
      </div>
      <Image
        className="container5Image"
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
