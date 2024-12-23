import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";



export const metadata = {
  title: "Riyas Hakkim - India's First Emotional Sales Leadership Coach",
  description:
    "Empowering people to achieve peak performance in sales & leadership by unleashing the power of emotions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
          sizes="16x16 32x32 48x48"
        />

        <meta
          property="og:image"
          content="https://www.riyashakkim.com/openGraphImage.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />

      </head>
      <body>
        {children} <SpeedInsights />
      </body>
    </html>
  );
}
