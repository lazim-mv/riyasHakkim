"use client";

import React, { useState } from "react";
import {
  CardHeading,
  SectionDescription,
  SectionTitle,
} from "./ButtonComponent";
import { container9Data } from "../contents/contents";
import Image from "next/image";

const Container9 = ({ mobile }) => {
  const cardData = container9Data.faqData;
  const initialVisibleState = Array(cardData.length).fill(false);
  initialVisibleState[0] = true;
  const [answerVisible, setAnswerVisible] = useState(initialVisibleState);

  const handleClick = (index) => {
    setAnswerVisible((prevVisible) => {
      const newVisible = Array(cardData.length).fill(false);
      newVisible[index] = !prevVisible[index]; // Toggle the clicked answer
      return newVisible;
    });
  };

  return (
    <div className="container9">
      <div className="faqContainer">
        <div className="firstCol">
          <SectionTitle
            sectionText={container9Data.sectionTitle}
            padding="0 0 1.3227513227513228vw 0"
            textAllign="left"
            line={mobile ? "26.666666666666668vw" : "15.939153439153438vw"}
          />
        </div>
        <div className="secondCol">
          {cardData.map((data, index) => (
            <div
              className="faqDataCard"
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className="countContianer">
                <CardHeading sectionText={data.number} />
              </div>
              <div className="questionAnswerContainer">
                <div className="questionContainer">
                  <CardHeading
                    sectionText={data.question}
                    width="45.63492063492063vw"
                  />
                  <div
                    className="plussIcon"
                    style={{
                      transform: answerVisible[index]
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                      transition: "transform .5s ease",
                    }}
                  >
                    <Image src="/+.svg" width={16} height={16} alt="ImageFaq" />
                  </div>
                </div>
                <div
                  className={`answerContainer ${
                    answerVisible[index] ? "visible" : ""
                  }`}
                >
                  <SectionDescription
                    sectionText={data.answer}
                    width="44.37830687830688vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container9;
