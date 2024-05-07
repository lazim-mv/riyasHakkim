import React from "react";
import { container2Data } from "../contents/contents";
import {
  CardHeading,
  SectionDescription,
  SectionTitle,
} from "./ButtonComponent";
import Image from "next/image";
import { container6 } from "../contents/e3global";

const Container2 = ({ mobile, e3Global }) => {
  const imgData = e3Global ? container6.imgData : container2Data.imgData;
  return (
    <>
      <div className="container2">
        {!e3Global && (
          <div className="title">
            <SectionTitle
              sectionText={container2Data.sectionTitle}
              padding="0 0 1.3227513227513228vw 0"
              margin="auto"
              line={mobile ? "26.666666666666668vw" : "20.767195767195766vw"}
            />
            <SectionDescription sectionText={container2Data.description} />
          </div>
        )}

        <div className="cardsContainer">
          {imgData.map((data, index) => (
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
