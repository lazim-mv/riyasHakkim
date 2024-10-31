import React from "react";
import styles from "./glowbtn.module.css";

const GlowButton = ({ title }) => {
  return (
    <a href="https://humax.riyashakkim.com/" className="bookTicket">
      <div className={styles.btnContainer}>
        <p>{title}</p>
      </div>
    </a>
  );
};

export default GlowButton;
