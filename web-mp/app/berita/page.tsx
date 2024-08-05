import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function Home() {
  const blogDir = "data/berita";
  const files = fs.readdirSync(path.join(blogDir));

  const monthNames: { [key: string]: string } = {
    Januari: "January",
    Februari: "February",
    Maret: "March",
    April: "April",
    Mei: "May",
    Juni: "June",
    Juli: "July",
    Agustus: "August",
    September: "September",
    Oktober: "October",
    November: "November",
    Desember: "December",
  };

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
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
          className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-24 z-10"
        >
          <div className="flex flex-col -mt-20 bg-no-repeat py-3">
            <Link
              href={"/"}
              className="text-blue-400 text-base flex flex-row gap-2 py-3 pb-6"
            >
              <ChevronLeft />
              <p className="text-blue-400 font-semibold">Beranda</p>
            </Link>
            <h1 className="lg:pt-5 font-extrabold text-white font-intro uppercase leading-normal tracking-tight text-2xl md:text-4xl lg:text-[42px] mb-2 md:mb-3 lg:mb-2">
              Berita Desa Macan Putih
            </h1>
            <p className="text-white font-medium leading-relaxed max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              Perluas wawasanmu dengan membaca berita terbaru seputar Desa
              Macan Putih.
            </p>
          </div>
        </section>
      </section>
      <section
        id="news-list"
        className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl py-8"
      >
        <div className="w-full grid grid-cols-1 gap-4">
          <ul className="w-full h-full flex flex-col gap-4">
            {blogs
              .sort((a, b) => b.meta.date.localeCompare(a.meta.date))
              .map((news) => (
                <li
                  key={news.slug}
                  className="hover:bg-green-50 p-3 rounded-lg group transition-colors ease-brand duration-250 border-green-400 border-1 "
                >
                  <Link
                    href={`/berita/${news.slug}`}
                    className="flex flex-col gap-1 w-full"
                  >
                    <p className="line-clamp-2 font-semibold text-lg leading-7 text-blue-900 group-hover:text-green-900">
                      {news.meta.title}
                    </p>
                    <p className="flex justify-between text-sm items-center">
                      {new Date(news.meta.date).toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      | {news.meta.category}
                    </p>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
