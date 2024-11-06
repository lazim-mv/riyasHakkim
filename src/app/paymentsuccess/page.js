import React from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Image from "next/image";
import img1 from "../../../public/humax/thankyou.svg";
import styles from "./paymentsuccess.module.css";

const Page = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.container}>
        <Image src={img1} alt="Thank you" width={160} height={160} />
        <div className={styles.contents}>
          <h2>Payment Successful!</h2>
          <p>
            Your payment has been successfully processed. Thank you for your
            purchase! You will receive a confirmation email with the details of
            your transaction shortly.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
