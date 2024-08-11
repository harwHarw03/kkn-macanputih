import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface PageProps {
  source: string | MDXRemoteSerializeResult;
  frontMatter: Record<string, any>;
}

export default function MdxRender({ source, frontMatter }: PageProps) {
  return (
    <article className="prose prose-base md:prose-base lg:prose-lg prose-slate">
      <MDXRemote source={source} />
    </article>
  );
}
