import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechSweet",
  description: "TechSweet is a software development company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <footer
          className="py-10 bg-base-300 text-center"
          style={{
            background: "black",
            color: "#FFFFFF",
          }}
        >
          <p className="text-lg">© 2021 TechSweet. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
