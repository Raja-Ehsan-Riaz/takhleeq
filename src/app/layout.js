import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin", "latin-ext"],
});

export const metadata = {
  title: "Takhleeq",
  description: "The branding agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {/* <div className="h-20"></div> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
