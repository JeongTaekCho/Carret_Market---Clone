/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "Carret_Market---Clone";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};

module.exports = nextConfig;
