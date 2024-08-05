import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MdxRender from "@/app/mdx-render";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import { Article, WithContext } from "schema-dts";

type MetadataProps = {
  params: any;
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("data/berita"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("data/berita", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata(
  { params, searchParams }: MetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const markdownFile = fs.readFileSync(
    path.join("data/berita", params.slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);
  return {
    title: frontMatter.title,
    description: content.split(" ").slice(0, 20).join(" "),
    openGraph: {
      title: frontMatter.title,
      description: content.split(" ").slice(0, 20).join(" "),
      images: [
        {
          url: frontMatter.image,
          alt: frontMatter.title,
        },
      ],
    },
  };
}

export default function Post({ params }: any) {
  const props = getPost(params);
  
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
          className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-20 pb-10 z-10"
        >
          <div className="flex flex-col -mt-20 bg-no-repeat py-3">
            <Link
              href={"/berita"}
              className="text-blue-400 text-base flex flex-row gap-2 py-3 pb-6"
            >
              <ChevronLeft />
              <p className="text-blue-400 font-semibold">Daftar Berita</p>
            </Link>
            <h1 className="lg:pt-5 font-extrabold text-white font-intro uppercase leading-normal tracking-tight text-2xl md:text-4xl lg:text-[42px] mb-2 md:mb-3 lg:mb-2">
              {props.frontMatter.title}
            </h1>
            <p className="text-white font-medium leading-relaxed max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              {props.content.split(" ").slice(0, 20).join(" ")}...
            </p>
            <p className="text-white font-medium leading-relaxed max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              Penulis {props.frontMatter.author} | Editor{" "}
              {props.frontMatter.editor}
            </p>
            <p className="text-white font-medium leading-relaxed max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              {new Date(props.frontMatter.date).toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </section>
      </section>
      <section id="content" className="bg-white">
        <div className="container mx-auto px-6 py-8 2xl:px-0 xl:max-w-7xl relative">
          <MdxRender frontMatter={props.frontMatter} source={props.content} />
        </div>
      </section>
      {/* if originalsource frontmatter is present, show disclaimer */}
      {props.frontMatter.orginalSource && (
        <section
          id="content"
          className="bg-gray-200"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <div className="container mx-auto px-6 py-8 2xl:px-0 xl:max-w-7xl relative">
            <div className="p-6 md:p-6 lg:py-8 lg:px-10 rounded-xl bg-white">
              <h2 className="text-xl font-bold text-red-500">
                Disclaimer: Sumber Asli
              </h2>
              <p className="text-gray-500">
                Artikel ini berasal dari{" "}
                <Link
                  href={props.frontMatter.orginalSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 line-clamp-1 hover:underline"
                >
                  {props.frontMatter.orginalSource}
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
