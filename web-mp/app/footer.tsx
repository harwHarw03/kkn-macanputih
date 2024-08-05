import { MapPin, Mail, GitFork, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoLong from "@/app/logo-long.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import sosmedData from "@/data/sosmed.json";
import { Instagram, Youtube, Github, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#16a75c] relative pt-8">
      <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
        <div className="py-6 md:py-12 flex flex-col gap-6 md:gap-12 bg-no-repeat">
          <Link href={"/"} className="w-fit lg:w-1/4 h-16 md:h-fit">
            <Image
              src={logoLong}
              alt="Media Macan Putih"
              className="h-full w-full object-contain"
            />
          </Link>
          <div className="min-w-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            {/* HQ Media Macan Putih */}
            <div className="flex items-start gap-3">
              <MapPin size={24} />
              <div className="flex flex-col gap-1">
                <p className="font-roboto font-bold leading-7">
                  Macan Putih
                </p>
                <div className="flex flex-col text-sm leading-6">
                  <p>Desa Macan Putih, Kec. kabat</p>
                  <p>Kab. Banyuwangi, Jawa Timur, 00000</p>
                </div>
              </div>
            </div>
            {/* Surel Media Macan Putih */}
            <div className="flex items-start gap-3">
              <Mail size={24} />
              <div className="flex flex-col gap-1">
                <p className="font-roboto font-bold leading-7">Alamat Email</p>
                <div className="flex flex-col text-sm leading-6">
                  <p>halo@example.com</p>
                </div>
              </div>
            </div>

            {/* Sosial media */}
            <div className="flex items-start gap-3">
              <Share2 size={24} />
              <div className="flex flex-col gap-1">
                <p className="font-roboto font-bold leading-7">Sosial Media</p>
                <ul className="flex w-full max-w-xl justify-between gap-6">
                  {sosmedData.map((sosmed, index) => (
                    <li key={index} className="flex items-center">
                      <Link
                        href={sosmed.url}
                        className="relative size-11 items-center justify-center flex rounded-md p-2 border-[1px] border-white border-opacity-20 hover:bg-green-800 transition-colors duration-300 ease-in-out"
                        aria-label={sosmed.media}
                      >
                        {/* if sosmed are facebook, show facebook components and so on */}
                        {sosmed.media === "instagram" && (
                          <Instagram color="#fff" className="z-10" />
                        )}
                        {sosmed.media === "youtube" && (
                          <Youtube color="#fff" className="z-10" />
                        )}
                        {sosmed.media === "github" && (
                          <Github color="#ffffff" className="z-10" />
                        )}
                        {sosmed.media === "facebook" && (
                          <Facebook color="#fff" className="z-10" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sitemap group */}
          </div>
          <div id="sitemap-group" className="text-white">
            <div className="flex items-start gap-3">
              <GitFork size={24} />
              <div className="flex flex-col gap-1 w-full">
                <p className="font-roboto font-bold leading-7">Sitemap</p>
                <SitemapGroup />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="IT-Disclaimer"
        className="w-full py-4 lg:py-6 border-t border-green-500"
      >
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
          <div className="flex flex-col items-center lg:items-start gap-5">
            <p className="text-sm font-normal leading-6 text-white lg:text-left">
              Website ini tidak dalam pengelolaan pemerintah desa Macan Putih.
              Segala konten yang ada di website ini merupakan referensi semata
              yang dikelola oleh Tim Media Macan Putih. Seluruhnya yang
              terdapat pada website ini tidak menyatakan sikap resmi dari
              pemerintah desa Macan Putih.
            </p>
            <p className="text-sm font-normal leading-6 text-white lg:text-left">
              Pengelola IT:{" "}
              <Link
                className="underline"
                href={"https://www.linkedin.com/in/luthfiharw"}
              >
                Luthfi Harw
              </Link>
            </p>
            <p className="text-base font-normal leading-6 text-white text-center lg:text-left">
              Hakcipta © 2024 Desa Macan Putih & KKN UGM 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SitemapGroup() {
  return (
    <>
      <Accordion type="multiple" className="flex flex-col lg:hidden">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold">
            Profil Macan Putih
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <Link href={"/sejarah"}>Sejarah Desa</Link>
            <Link href={"/kepemudaan"}>Kepemudaan</Link>
            <Link href={"/peta"}>Peta Desa</Link>
          </AccordionContent>
        </AccordionItem>



        <AccordionItem value="item-3">
          <AccordionTrigger className="font-semibold">
            Ekosistem Macan Putih
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <Link href={"https://Macan Putih-wonoayu.desa.id"}>
              Website Desa
            </Link>
            <Link href={"https://kemendesa.go.id"}>Kementerian Desa</Link>
            <Link href={"https://tanahair.indonesia.go.id/portal-web"}>
              Geo Spasial Desa
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="font-semibold">
            Kebijakan Informasi & Teknologi
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <Link href={"/kebijakan/privasi"}>Kebijakan Privasi</Link>
            <Link href={"/kebijakan/penggunaan"}>Kebijakan Penggunaan</Link>
            <Link href={"/kebijakan/teknologi"}>Kebijakan Teknologi</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="hidden lg:grid grid-cols-4 lg:gap-12">
        <div className="flex flex-col gap-3 py-4">
          <p className="font-semibold">Profil Macan Putih</p>
          <div className="flex flex-col gap-2">
            <Link href={"/sejarah"}>Sejarah Desa</Link>
            <Link href={"/kepemudaan"}>Kepemudaan</Link>
            <Link href={"/peta"}>Peta Desa</Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-4">
          <p className="font-semibold">Kebijakan Informasi & Teknologi</p>
          <div className="flex flex-col gap-2">
            <Link href={"/kebijakan/privasi"}>Kebijakan Privasi</Link>
            <Link href={"/kebijakan/penggunaan"}>Kebijakan Penggunaan</Link>
            <Link href={"/kebijakan/teknologi"}>Kebijakan Teknologi</Link>
          </div>
        </div>
      </div>
    </>
  );
}
