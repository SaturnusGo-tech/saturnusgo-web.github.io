// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Генерим статический экспорт в папку `out/`
  output: 'export',
  // Для GitHub Pages нужно отключить встроенную оптимизацию картинок
  images: { unoptimized: true },
  // Чтобы относительные ссылки работали как надо на Pages
  trailingSlash: true,
};
module.exports = nextConfig;