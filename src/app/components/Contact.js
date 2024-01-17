import React from "react";
import { BtnComponent, SectionTitle } from "./ButtonComponent";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactContentContainer">
        <SectionTitle
          sectionText="Ready to elevate your sales journey?"
          color="#fff"
          textAllign="center"
          width="33.92857142857143vw"
        />
        <a href="/pages/Contact">
        <BtnComponent
          buttonText="Contact Us"
          bg="#96202A"
          color="#fff"
          arrow={true}
          margin="1.984126984126984vw 0 0 0"
        />
        </a>
      </div>
    </div>
  );
};

export default Contact;
