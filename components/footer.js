"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import "../app/globals.css";

export default function Footer() {
  const pathname = usePathname();

  let addClass = "";

  if (pathname === "/equ8") {
    addClass = "equ8-background-purple";
  }

  return (
    <footer
      className={`py-10 bg-base-300 text-center ${addClass}`}
      style={
        addClass.length == 0
          ? {
              background: "black",
              color: "white",
            }
          : null
      }
    >
      <p
        className="text-lg"
        style={{ color: addClass.length > 0 ? "black" : "white" }}
      >
        © 2021 TechSweet. All Rights Reserved.
      </p>
    </footer>
  );
}
