import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Organization, WithContext } from "schema-dts";

import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#051B2E'
};

export const metadata: Metadata = {
  title: "Profil Desa MacanPutih",
  publisher: "",
  keywords: ["KKN", "Macan Putih", "Desa", "Profil", "Banyuwangi"],
  description: "Website Profil Desa MacanPutih, Banyuwangi",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  );
};
