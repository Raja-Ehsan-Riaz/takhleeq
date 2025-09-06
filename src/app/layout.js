import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactBar from "@/components/LandingPage/ContactBar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin", "latin-ext"],
});

export const metadata = {
  title: { default: "Takhleeq.io", template: "%s | Takhleeq.io" },
  description: "At takhleeq.io, we specialize in crafting personalized roadmaps for businesses of all sizes. Whether you're a startup or an established enterprise, our expertise in branding and digital services ensures a tailored approach to help you achieve your marketing goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {/* <div className="h-20"></div> */}

        {children}
        <Footer />
        <ContactBar/>
      </body>
    </html>
  );
}
