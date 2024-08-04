"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 p-4 z-10 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Desa MacanPutih
        </Link>

        {/* desktop */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/profil" className="hover:text-gray-300">
              Profil
            </Link>
          </li>
          <li>
            <Link href="/sejarah" className="hover:text-gray-300">
              Sejarah
            </Link>
          </li>
          <li>
            <Link href="/peta" className="hover:text-gray-300">
              Peta
            </Link>
          </li>
        </ul>

        {/* mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 mt-4">
            <li>
              <Link
                href="/"
                className="block hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/profil"
                className="block hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Profil
              </Link>
            </li>
            <li>
              <Link
                href="/sejarah"
                className="block hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sejarah
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
