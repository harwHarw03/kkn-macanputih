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
      {
        protocol: "https",
        hostname: "kkn-macanputih.vercel.app",
        port: "",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: nextSafe({
          contentSecurityPolicy: {
            "script-src":
              "'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com cdn.jsdelivr.net *.youtube.com *.tableau.com",
            "frame-src":
              "'self' *.googletagmanager.com *.youtube.com *.google.com *.tableau.com *.openstreetmap.org *.server.arcgisonline.com *.opentopomap.org",
            "style-src":
              "'self' 'unsafe-inline' fonts.googleapis.com cdn.jsdelivr.net",
            "connect-src":
              "'self' *.googletagmanager.com *.google-analytics.com sid.kemendesa.go.id *.openstreetmap.org *.server.arcgisonline.com *.opentopomap.org",
            "img-src":
              "'self' data: *.ytimg.com *.tile.openstreetmap.org *.bmkg.go.id server.arcgisonline.com *.opentopomap.org",
            "frame-ancestors": "'self' *.kemendesa.go.id",
          },
          frameoptions: false,
        }),
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
