"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BtnComponent } from "./ButtonComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Header() {
  const pathname = usePathname();
  const [prevScrollpos, setPrevScrollpos] = useState(0);

  const menuList = [
    { text: "Home", href: "/" },
    { text: "About", href: "/pages/About" },
    { text: "Programs", href: "/pages/Programs" },
    { text: "E3 Global Zone", href: "/pages/E3Global" },
    { text: "Contact Us", href: "/pages/Cotact" },
  ];

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       gsap.to(".hContainer", { top: 0, duration: 0.2, ease: "ease-in-out" });
  //     } else {
  //       gsap.to(".hContainer", {
  //         top: -150,
  //         duration: 0.2,
  //         ease: "ease-in-out",
  //       });
  //     }
  //     setPrevScrollpos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollpos]);

  return (
    <div className="hContainer">
      <div className="headerLine"></div>
      <a href="/">
        <div className="logoContainer">
          <Image
            src="/logo.svg"
            width={130}
            height={101}
            alt="ImageHeader"
            quality={100}
            priority={true}
            unoptimized
          />
        </div>
      </a>
      <div className="hMenu">
        {menuList.map((item, index) => (
          <div
            key={index}
            className={`visibleWrapperContainer w-Auto ${
              pathname !== undefined &&
              pathname !== null &&
              pathname !== "" &&
              pathname === item.href
                ? "active"
                : ""
            }`}
          >
            <a href={item.href} className="linksWrapper">
              <h4 className="listHoverTop whiteSpace linksText">{item.text}</h4>
              <h4 className="listHoverBottom whiteSpace linksText">
                {item.text}
              </h4>
            </a>
          </div>
        ))}
      </div>
      <a href="/humax24">
        <BtnComponent
          bg="#C8952E1A"
          color="#ffffff"
          width="11.64021164021164vw"
          height="3.2407407407407405vw"
          buttonText="Humax'2024"
          margin="0 0 0 5.013020833333334vw"
          h5Margin="0"
          borderColor="#C8952E66"
          borderRadius="3.2407407407407405vw"
        />
      </a>
    </div>
  );
}

export default Header;
