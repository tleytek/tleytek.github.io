// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import Navbar from "@/app/components/Navbar";

import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});

export const metadata = {
  "google-site-verification": "S0xXXRg20vTF2y91OrHMCVEe_3fz9ITnRvKi2rX2ISE",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={libre_franklin.variable}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
