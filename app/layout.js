import { Roboto_Mono } from "next/font/google";
import Navbar from "./Navbar";
import "./globals.css";

const rmono = Roboto_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rmono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
