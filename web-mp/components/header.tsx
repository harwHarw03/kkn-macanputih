"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [navbarColor, setNavbarColor] = useState("bg-transparent");
//   const [currentRoute, setCurrentRoute] = useState("");
    const pathname = usePathname();

  useEffect(() => {
    const changeNavbarColor = () => {
      if (pathname.includes("/peta")) {
        setNavbarColor("bg-blue-500");
      } else if (window.scrollY >= 80) {
        setNavbarColor("bg-black");
      } else {
        setNavbarColor("lg:bg-opacity-10 lg:backdrop-filter");
      }
    };

    // if (pathname === "/statistik/kependudukan") {
    //   setCurrentRoute(" | Statistik");
    // } else {
    //   setCurrentRoute("");
    // }

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
        <nav className="flex mx-auto justify-between items-center">
          <Link href={"/"} className="font-bold text-white py-2">
            Desa MP {/*{currentRoute}*/}
          </Link>

        <ul className="hidden md:flex space-x-4">
            <li>
                <Link href="/" className="hover:text-gray-300">
                Beranda
                </Link>
            </li>
            <li>
                <Link href="/sejarah" className="hover:text-gray-300">
                Sejarah
                </Link>
            </li>
            <li>
                <Link href="/profil" className="hover:text-gray-300">
                Profil
                </Link>
            </li>
            <li>
                <Link href="/peta" className="hover:text-gray-300">
                Peta
                </Link>
            </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}
