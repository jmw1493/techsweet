"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import "../app/globals.css";

export default function Header() {
  const pathname = usePathname();

  let logoSrc = "/logo-techsweet.png";
  let headerColor = "black";
  let addClass = "";

  if (pathname === "/" || pathname === "/contact") {
    logoSrc = "/logo-techsweet.png";
  } else if (pathname === "/equ8") {
    logoSrc = "/logo-equ8.png";
    headerColor = "white";
    addClass = "equ8-background-gray";
  } else if (pathname === "/kontact") {
    logoSrc = "/logo-kontact.png";
    headerColor = "#202C59";
  } else if (pathname === "/codercomplete") {
    logoSrc = "/logo-codercomplete.png";
  }

  return (
    <header
      className={`header sticky-header ${addClass}`}
      style={
        addClass.length == 0
          ? {
              background: headerColor,
              color: headerColor === "white" ? "black" : "white",
            }
          : null
      }
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto ">
        <div className="logo">
          <Image src={logoSrc} alt="Logo" width={50} height={50} />
        </div>
        <nav className="nav-links">
          <a href="/" className={pathname === "/" ? "active" : ""}>
            TechSweet
          </a>
          <a href="/equ8" className={pathname === "/equ8" ? "active" : ""}>
            equ8
          </a>
          <a
            href="/kontact"
            className={pathname === "/kontact" ? "active" : ""}
          >
            Kontact
          </a>
          {/* <a
          href="/codercomplete"
          className={pathname === "/codercomplete" ? "active" : ""}
        >
          CoderComplete
        </a> */}
          <a
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
