import React from "react";
import Header from "../components/Header";

import Container1 from "./components/container1/Container1";
import Container2 from "./components/container2/Container2";
import Container3 from "./components/container3/Container3";
import Container4 from "./components/container4/Container4";
import Container5 from "./components/container5/Container5";
import Container6 from "./components/container6/Container6";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import MobileHeader from "../components/MobileHeader";

const page = () => {
  const header = headers();
  const host = header.get("x-host");
  if (host === "true") {
    redirect("/");
  }
  return (
    <div>
      <Header />
      <MobileHeader />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
};

export default page;
