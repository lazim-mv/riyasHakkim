"use client";
import Container11 from "./components/Container11/Container11";
import ContactComponent from "./components/ContactComponent";
import Container10 from "./components/Container10/Container10";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import Container4 from "./components/Container4";
import Container5 from "./components/Container5";
import Container6 from "./components/Container6";
import Container7 from "./components/Container7";
import Container8 from "./components/Container8";
import Container9 from "./components/Container9";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileHeader from "./components/MobileHeader";
import Testimonial from "./components/Testimonial";
import UnderMaintainance from "./components/UnderMaintainance";
import { container4Data, container7Data } from "./contents/contents";
import { useWindowSize } from "./utils/windowSize";
import Container12 from "./components/Container12/Container12";

export default function Home() {
  const { windowSize, isSmallScreen } = useWindowSize();

  return (
    <UnderMaintainance />
    // <main className="">
    //   <Header />
    //   <MobileHeader />
    //   <Hero mobile={isSmallScreen} />
    //   <Container2 mobile={isSmallScreen} />
    //   <Container3 mobile={isSmallScreen} />

    //   <Container10 mobile={isSmallScreen} />
    //   <Container5 mobile={isSmallScreen} />
    //   {/* <Container6 mobile={isSmallScreen} /> */}
    //   <Container12 mobile={isSmallScreen} mainPage={true} />

    //   <Container11 mobile={isSmallScreen} />

    //   <Container8 />
    //   <Testimonial mobile={isSmallScreen} />
    //   {/* <Container9 mobile={isSmallScreen} /> */}
    //   <ContactComponent />
    //   <Footer />
    // </main>
  );
}

//  <BtnComponent
//   buttonText="hello"
//   bg="#C8952E"
//   color="#fff"
//   arrow={true}
//  />
