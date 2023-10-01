import { Poppins } from "next/font/google";
import "./globals.css";
import ProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";

const inter = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital-Agency | Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <Navbar />
      {children}
       <Subscribe />
      <Footer />
      <ProgressBar />
      </body>
    </html>
  );
}
