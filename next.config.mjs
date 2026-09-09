/** @type {import('next').NextConfig} */
const nextConfig = {
  // Saída otimizada para Docker/EasyPanel (server.js mínimo em .next/standalone)
  output: "standalone",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
};

export default nextConfig;
