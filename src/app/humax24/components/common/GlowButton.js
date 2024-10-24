import React from "react";
import styles from "./glowbtn.module.css";

const GlowButton = ({title}) => {
  return (
    <div className={styles.btnContainer}>
      <p>{title}</p>
    </div>
  );
};

export default GlowButton;
