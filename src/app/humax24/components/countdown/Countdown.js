import React from "react";
import styles from "./countdown.module.css";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

// Target date for the countdown
const targetDate = new Date("December 14, 2024 00:00:00");

// Custom renderer to display days, hours, minutes, and seconds vertically
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className={styles.row}>
        <div className={styles.days}>
          <div className={styles.dataAndDots}>
            <span>{days}</span>
          </div>
          <span className={styles.dot}>:</span>
          <h3>Days</h3>
        </div>
        <div className={`${styles.hours} ${styles.days}`}>
          <div className={styles.dataAndDots}>
            <span>{hours}</span>
          </div>
          <span className={styles.dot2}>:</span>
          <h3>Hours</h3>
        </div>
        <div className={`${styles.minutes} ${styles.days}`}>
          <div className={styles.dataAndDots}>
            <span>{minutes}</span>
          </div>
          <span className={styles.dot2}>:</span>
          <h3>Minutes</h3>
        </div>
        <div className={`${styles.seconds} ${styles.days}`}>
          <div className={styles.dataAndDots}>
            <span>{seconds}</span>
          </div>
          <h3>Seconds</h3>
        </div>
      </div>
    );
  }
};

// Main component
const CountdownComponent = () => {
  return (
    <div className={styles.container}>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default CountdownComponent;
