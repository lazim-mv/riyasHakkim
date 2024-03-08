"use client"
import React from "react";
import { BtnComponent, SectionTitle } from "./ButtonComponent";
import { useWindowSize } from "../utils/windowSize";

const ContactComponent = () => {
  const { windowSize, isSmallScreen } = useWindowSize();

  return (
    <>
      <div className="contactContainer">
        <div className="contactContentContainer">
          <SectionTitle
            sectionText="Ready to elevate your sales journey?"
            color="#fff"
            width={
              isSmallScreen ? "75.46666666666667vw" : "33.92857142857143vw"
            }
            line="0"
          />
          <a href="/pages/Contact">
            <BtnComponent
              buttonText="Contact Us"
              bg="#96202A"
              color="#fff"
              margin="1.984126984126984vw 0 0 0"
            />
          </a>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ContactComponent;
