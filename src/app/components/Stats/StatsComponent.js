import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./stats.module.css";
import Image from "next/image";
import { stats } from "@/app/contents/aboutPage";

const StatsComponent = ({ mobile }) => {
  const statsRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const statsElements = statsRef.current.querySelectorAll(".number");

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const dataValue = parseInt(target.getAttribute("data-value"));
            gsap.to(target, {
              duration: 1.5,
              innerText: dataValue,
              onUpdate: () => updateValue(target, dataValue),
            });
            observerRef.current.unobserve(target);
          }
        });
      },
      {
        rootMargin: mobile ? "300px 0px 0px 0px" : "300px 0px 0px 0px",
      }
    );

    statsElements.forEach((element) => {
      observerRef.current.observe(element);
    });

    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  const updateValue = (element, initialValue) => {
    const roundedValue = Math.ceil(parseFloat(element.textContent));
    element.textContent = `${roundedValue}+`;
  };

  console.log(mobile, "fjdsklajf");

  return (
    <div className={styles.container} ref={statsRef}>
      <Image
        src={mobile ? "/stats/mobile.png" : "/stats/dk.png"}
        width={10}
        height={10}
        className={styles.bgImage}
        quality={100}
        priority={true}
        unoptimized
      />
      <div className={styles.contentContainer}>
        <div className={styles.cards}>
          {stats.statData.map((data, index) => (
            <div className={styles.card} key={index}>
              <h2
                className={typeof data.heading === "number" ? "number" : ""}
                data-value={
                  typeof data.heading === "number" ? data.heading : ""
                }
              >
                {typeof data.heading === "number" ? `${0}+` : data.heading}
              </h2>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
