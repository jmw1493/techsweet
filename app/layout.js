import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechSweet",
  description: "TechSweet is a software development company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: "black" }}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
