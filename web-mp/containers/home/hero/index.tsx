
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroImage from "@/public/hero.webp";

export default function HeroSection() {
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
        className="flex justify-center items-center w-full absolute top-0 min-h-[65vh]"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center -mt-20 bg-no-repeat py-3">
            <h1 className="lg:pt-5 font-extrabold text-white font-intro uppercase text-center leading-10 text-2xl md:text-4xl lg:text-[42px] mb-2 md:mb-3 lg:mb-2 max-w-screen-sm">
              Media Desa MacanPutih
            </h1>
            <p className="text-gray-300 font-medium leading-relaxed text-center max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              Temukan referensi dan informasi terkini seputar Desa MacanPutih
            </p>
            <div className="max-w-xl lg:max-w-2xl w-full">
              <section>
                <h2 className="font-bold text-base leading-6 text-center text-gray-300 mb-4">
                  Seputar Desa MacanPutih
                </h2>
                {/* <Carousel>
                  <CarouselContent>
                    <CarouselItem className="basis-1/2">
                      <Link
                        className={`${buttonVariants({
                          variant: "outline",
                        })} w-full py-4 font-semibold`}
                        href={"/sejarah"}
                      >
                        Sejarah Kuy
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
                </Carousel> */}
              </section>
            </div>
            <div className="w-full max-w-xl">
              <div className="flex flex-col mt-6 content-center">
                <Button asChild variant={"default"} className="py-6">
                  <Link href="/profil">Profil Desa MacanPutih</Link>
                </Button>

              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="curved"></div>
    </div>
  );
}
