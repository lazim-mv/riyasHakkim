import Contact from "./components/Contact";
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
import { container4Data, container7Data } from "./contents/contents";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Container2 />
      <Container3 />
      <Container4 content={container4Data} />
      <Container5 />
      <Container6 />
      <Container7 content={container7Data}/>
      <Container8 />
      <Container9 />
      <Contact />
      <Footer />
    </main>
  );
}

//  <BtnComponent
//   buttonText="hello"
//   bg="#96202A"
//   color="#fff"
//   arrow={true}
//  />
