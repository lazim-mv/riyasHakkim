import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Riyas Hakkim - India's First Emotional Sales Leadership Coach",
  description:
    "Empowering people to achieve peak performance in sales & leadership by unleashing the power of emotions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
