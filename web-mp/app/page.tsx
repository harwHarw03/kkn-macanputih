import type { Metadata } from "next";

import HeroSection from "@/containers/home/hero";
import BeritaSection from "@/containers/home/berita";
import PintasanSection from "@/containers/home/pintasan";


export const metadata: Metadata = {
  title: "Selamat Datang Di Media Informasi Desa Macan Putih",
  description:
    "Media Informasi Desa Macan Putih. Inisiatif Tim KKN UGM 2024.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <BeritaSection />
      <PintasanSection />
    </main>
  );
}
