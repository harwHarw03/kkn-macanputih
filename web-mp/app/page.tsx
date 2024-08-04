import Image from "next/image";
import { NextPage } from "next";

import HeroSection from "@/containers/home/hero";
import IntroSection from "@/containers/home/intro-section";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection/>
      {/* Destinasi  */}
      {/* UMKM  */}
      {/* Pintasan  */}
      {/* Media  */}
      <section style={{ height: '100vh', background: '#a0a0a0' }}>
        <h2>Section 1</h2>
        <p>Content for section 1</p>
      </section>
      <section style={{ height: '100vh', background: '#e0e0e0' }}>
        <h2>Section 2</h2>
        <p>Content for section 2</p>
      </section>
      <section style={{ height: '100vh', background: '#d0d0d0' }}>
        <h2>Section 3</h2>
        <p>Content for section 3</p>
      </section>
      <section style={{ height: '100vh', background: '#c0c0c0' }}>
        <h2>Section 4</h2>
        <p>Content for section 4</p>
      </section>
    </main>
  )
}