// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true }
    // basePath / assetPrefix НЕ нужны, т.к. у тебя корневой домен, а не поддомен репозитория
  };
  export default nextConfig;
  