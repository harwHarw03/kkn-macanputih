import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

interface FeaturedArticleProps {
  id: string;
  title: string;
  date: string;
  category: string;
  instagramURL: string;
  className?: string;
  photo?: string;
}

interface Blog {
  meta: {
    title: string;
    date: string;
    category: string;
    author: string;
    editor: string;
    originalSource?: string;
    instagramURL?: string;
    photo?: string;
  };
  slug: string;
}

interface LatestNewsProps {
  blogs: Blog[];
}

export default function BeritaSection() {
  const blogDir = "data/berita";
  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join(blogDir, filename),
        "utf-8"
      );
      const { data: frontMatter } = matter(fileContent);
      return {
        meta: frontMatter,
        slug: filename.replace(".mdx", ""),
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.meta.date);
      const dateB = new Date(b.meta.date);
      return dateB.getTime() - dateA.getTime(); // For descending order
    });
  return (
    <section className="relative  top-[-12rem] mb-[-12rem] md:top-[-14rem] md:mb-[-14rem] lg:-top-40 lg:-mb-40 z-10 pb-6 md:pb-8 xl:pb-12">
      <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              Berita Terkini
            </CardTitle>
            <CardDescription className="flex justify-center items-center"></CardDescription>
          </CardHeader>
          <CardContent className="md:grid grid-cols-2 gap-8">
            <FeaturedArticle
              id={blogs[0].slug}
              title={blogs[0].meta.title}
              date={blogs[0].meta.date}
              category={blogs[0].meta.category}
              instagramURL={blogs[0].meta.instagramURL}
              photo={blogs[0].meta.photo}
            />
            <div className="w-full md:flex flex-col grid grid-cols-1 gap-4 mt-8">
              <h3 className="text-2xl font-extrabold text-center">
                Terbitan Terbaru
              </h3>
              <ul className="w-full flex flex-col md:grid grid-cols-2 grid-rows-3 gap-4">
                {blogs.slice(0, 5).map((news) => (
                  <li
                    key={news.slug}
                    className="hover:bg-green-50 p-3 rounded-lg group transition-colors ease-brand duration-250"
                  >
                    <Link
                      href={
                        news.meta.instagramURL
                          ? news.meta.instagramURL
                          : `/berita/${news.slug}`
                      }
                      className="flex flex-col gap-1 w-full"
                    >
                      <h4 className="line-clamp-2 font-semibold text-base leading-7 text-blue-900 group-hover:text-green-900">
                        {news.meta.title}
                      </h4>
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
          </CardContent>
          <CardFooter>
            <Button asChild variant={"default"} className="w-full py-6 text-xl">
              <Link href={"/berita"}>Baca berita lainnya </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  id,
  title,
  date,
  category,
  instagramURL,
  className,
  photo,
}) => {
  return (
    <Card className={`relative overflow-hidden ${className}`}>
      <div id="hero-image" className="relative">
        <AspectRatio ratio={1 / 1}>
          <Image
            fill
            src={photo ? photo : "/kkn.jpg"}
            alt="KKN Penerjunan"
            className="object-cover filter transition-all ease-brand duration-500 transform group-hover:scale-110 group-hover:filter-none group-hover:grayscale-0 group-hover:opacity-100 object-top"
          />
        </AspectRatio>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-blue-800 mix-blend-multiply" /> */}
        <Link href={instagramURL ? instagramURL : `/berita/${id}`}>
          <Card className="border-0 visible inline-block absolute bottom-0 w-full bg-black bg-opacity-50 transition duration-500 ease-in-out group-hover:bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg px-8 py-6 text-white">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold line-clamp-2">{title}</p>
              <p className="text-xs">
                {new Date(date).toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {" | "}
                {category}
              </p>
            </div>
          </Card>
        </Link>
      </div>
    </Card>
  );
};
