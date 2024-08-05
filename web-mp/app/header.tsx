"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [navbarColor, setNavbarColor] = useState("bg-black");
  const [currentRoute, setCurrentRoute] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const changeNavbarColor = () => {
      if (pathname.includes("/statistik")) {
        setNavbarColor("bg-blue-500");
      } else if (window.scrollY >= 80) {
        setNavbarColor("bg-greenBrand");
      } else {
        setNavbarColor("lg:bg-opacity-10 lg:backdrop-filter");
      }
    };

    if (pathname === "/statistik/kependudukan") {
      setCurrentRoute(" | Statistik");
    } else {
      setCurrentRoute("");
    }

    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, [pathname]);

  return (
    <header
      className={`sm:h-16 lg:h-20 lg:hover:bg-green-primary flex items-center w-screen h-14 fixed top-0 z-50 ease-in-out transition-all duration-200 ${navbarColor}`}
    >
      <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
        <nav className="flex items-center">
          <Link href={"/"} className="font-bold text-white py-2">
            Macan Putih {currentRoute}
          </Link>
        </nav>
      </div>
    </header>
  );
}
