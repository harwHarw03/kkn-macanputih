import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import nextSafe from "next-safe";
const isDev = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
      },
    ],
  },
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: nextSafe({
          contentSecurityPolicy: {
            "script-src":
              "'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com cdn.jsdelivr.net *.youtube.com *.tableau.com",
            "frame-src":
              "'self' *.googletagmanager.com *.youtube.com *.google.com *.tableau.com *.openstreetmap.org",
            "style-src":
              "'self' 'unsafe-inline' fonts.googleapis.com cdn.jsdelivr.net",
          },
          frameoptions: false,
        }),
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
