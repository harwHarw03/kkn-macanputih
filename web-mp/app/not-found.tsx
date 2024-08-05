import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="overflow-hidden">
      <section
        id="homepage-hero"
        className="relative w-full bg-gray-800 pt-16"
        style={{
          backgroundImage: 'url("/hero.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay" />
        <section
          id="hero-content"
          className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-24 pb-40 z-10"
        >
          <div className="flex flex-col -mt-20 bg-no-repeat py-3">
            <h1 className="lg:pt-5 font-extrabold text-white font-intro uppercase leading-normal tracking-tight text-2xl md:text-4xl lg:text-[42px] mb-2 md:mb-3 lg:mb-2">
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-white font-medium leading-relaxed max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              Halaman yang anda cari tidak ditemukan. Mungkin halaman tersebut
              sedang dalam perbaikan atau sudah dihapus.
            </p>
            <div className="max-w-xl lg:max-w-2xl w-full flex flex-col gap-4">
              <Button asChild variant={"default"} className="py-6 w-full">
                <Link href="/">Kembali ke Beranda</Link>
              </Button>
              <Button asChild variant={"outline"} className="py-6 w-full">
                <Link href="/sejarah">Baca Sejarah Desa MacanPutih</Link>
              </Button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
