import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import sosmedData from "@/data/sosmed.json";
import { Instagram, Youtube, Github, Facebook } from "lucide-react";
import Image from "next/image";
import HeroImage from "@/public/hero.webp";

export default function HomepageHero() {
  return (
    <div id="homepage-hero" className="relative">
      <div id="hero-image" className="h-[720px] relative">
        <Image
          src={HeroImage}
          alt="Macan Putih"
          className="w-full h-full object-cover filter grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-green-800 to-blue-800 mix-blend-multiply" />
      </div>
      <section
        id="hero-content"
        className="flex justify-center items-center w-full absolute top-0 min-h-[650px]"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center -mt-20 bg-no-repeat py-3">
            <h1 className="lg:pt-5 font-extrabold text-white font-intro uppercase text-center leading-10 text-2xl md:text-4xl lg:text-[42px] mb-2 md:mb-3 lg:mb-2 max-w-screen-sm">
              Desa MacanPutih
            </h1>
            <p className="text-gray-300 font-medium leading-relaxed text-center max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              Temukan referensi dan informasi terkini seputar Desa Macan Putih
            </p>
            <div className="max-w-xl lg:max-w-2xl w-full">
              <section>
                <h2 className="font-bold text-base leading-6 text-center text-gray-300 mb-4">
                  Seputar Desa Macan Putih
                </h2>
                <Carousel>
                  <CarouselContent>
                    <CarouselItem className="basis-1/2">
                      <Link
                        className={`${buttonVariants({
                          variant: "outline",
                        })} w-full py-4 font-semibold`}
                        href={"/sejarah"}
                      >
                        Sejarah
                      </Link>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                      <Link
                        className={`${buttonVariants({
                          variant: "outline",
                        })} w-full py-4 font-semibold`}
                        href={"/berita"}
                      >
                        Berita
                      </Link>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                      <Link
                        className={`${buttonVariants({
                          variant: "outline",
                        })} w-full py-4 font-semibold`}
                        href={"/kepemudaan"}
                      >
                        Kepemudaan
                      </Link>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </section>
            </div>
            <div className="w-full max-w-xl">
              <div className="flex flex-col mt-6 content-center">
                <Button asChild variant={"default"} className="py-6">
                  <Link href="/statistik">Statistik Desa Macan Putih</Link>
                </Button>
                {/* <Button asChild variant={"default"} className="py-6">
                  <Link href={"https://instagram.com/"}>
                    Kirim Berita atau Artikel
                  </Link>
                </Button> */}
              </div>
            </div>
            <ul className="flex w-full max-w-xl mt-4 justify-evenly gap-6">
              {sosmedData.map((sosmed, index) => (
                <li key={index} className="flex items-center">
                  <Link
                    href={sosmed.url}
                    className="relative size-12 items-center justify-center flex rounded-full p-2 hover:bg-gray-700 transition-colors duration-300 ease-in-out"
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
                    <div className="absolute bg-black top-0 left-0 w-full h-full rounded-full z-[1] opacity-50 " />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="curved"></div>
    </div>
  );
}
