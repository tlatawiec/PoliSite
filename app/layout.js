import { Roboto_Slab } from "next/font/google";
import Navbar from "./Navbar";
import "./globals.css";

const rslab = Roboto_Slab({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rslab.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
