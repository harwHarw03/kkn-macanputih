import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description: string;
  pagePreviousDescription: string;
  pagePreviousTitle: string;
  pagePreviousUrl: string;
}

export default function PageHeader({
  title,
  description,
  pagePreviousDescription,
  pagePreviousTitle,
  pagePreviousUrl,
}: PageHeaderProps) {
  return (
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
          <Link
            href={pagePreviousUrl || "/"}
            className="text-blue-400 text-base flex flex-row gap-2 py-3 pb-6"
          >
            <ChevronLeft />
            <p className="text-blue-400 font-semibold">
              {pagePreviousTitle || "Beranda"}
            </p>
          </Link>
          <h1 className="lg:pt-5 font-extrabold text-white font-intro uppercase leading-normal tracking-tight text-2xl md:text-4xl lg:text-[42px] mb-2 md:mb-3 lg:mb-2">
            {title || "MacanPutih"}
          </h1>
          <p className="text-white font-medium leading-relaxed max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
            {description || "MacanPutih"}
          </p>
        </div>
      </section>
    </section>
  );
}
