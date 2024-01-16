import React from "react";
import { container2Data } from "../contents/contents";
import {
  CardHeading,
  SectionDescription,
  SectionTitle,
} from "./ButtonComponent";
import Image from "next/image";

const Container2 = () => {
  return (
    <>
      <div className="container2">
      <SectionTitle 
        sectionText={container2Data.sectionTitle}
        // width="32.73809523809524vw"
        padding="0 0 4.62962962962963vw 0"
        textAllign="center"
        margin="auto"
        wordIndex={1}
        secondaryWordColor="#96202A"
      />
        <div className="cardsContainer">
          {container2Data.imgData.map((data, index) => (
            <div className="cardContainer" key={index}>
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
              <div className="cardContent">
                <CardHeading
                  sectionText={data.cardHeading}
                  margin="0 0 0.6613756613756614vw 0"
                />
                <SectionDescription sectionText={data.description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Container2;
