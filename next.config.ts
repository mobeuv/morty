import type { NextConfig } from "next";

/**
 * MOBEUV — site institucional
 *
 * O site é distribuído como export estático (GitHub Pages).
 * `basePath` é usado quando o site é servido a partir de um subdiretório
 * (ex.: https://mobeuv.github.io/morty/). Em um domínio próprio, deixe vazio.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",

  basePath,

  images: {
    // Static export não suporta o Image Optimization padrão do Next.
    unoptimized: true,
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
