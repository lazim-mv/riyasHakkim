import React from "react";
import { CardHeading, SectionDescription, SectionTitle } from "./ButtonComponent";
import { container8Data } from "../contents/contents";
import Image from "next/image";

const Container8 = () => {
  const cardData = container8Data.imgData;
  return (
    <div className="container8">
      <SectionTitle
        sectionText={container8Data.sectionTitle}
        width="32.73809523809524vw"
        padding="0 0 1.3227513227513228vw 0"
        textAllign="center"
        margin="auto"
        // wordIndex={1}
        // secondaryWordColor="#96202A"
      />
      <div className="container8Cards">
        {cardData.map((data, index) => (
          <div className="container8Card" key={index}>
            <Image
              className="cardIcon"
              src={data.img}
              alt="Asian Engineer"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
            />
            <CardHeading 
                sectionText={data.cardHeading}
                padding="0 0 1.3227513227513228vw 0"
            />

            <SectionDescription 
                sectionText={data.description}
                textAllign="center"
                width="20.965608465608465vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container8;
