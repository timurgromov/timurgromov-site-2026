/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const repoBasePath = "/timurgromov-site-2026";

const nextConfig = {
  output: "export",
  basePath: isProduction ? repoBasePath : "",
  assetPrefix: isProduction ? repoBasePath : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
