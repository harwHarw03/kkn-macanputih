import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import Footer from "../components/footer";
import type { Viewport } from "next";
import Header from "../components/header";
import Head from 'next/head';
import { GoogleAnalytics } from "@next/third-parties/google";
import { Organization, WithContext } from "schema-dts";

export const viewport: Viewport = {
  themeColor: "#051B2E",
};

const PJS = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <Head>
          <link rel="icon" href="./favicon.ico" />
        </Head>
      <body className={PJS.className}>
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
