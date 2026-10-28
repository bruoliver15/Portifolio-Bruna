import type { NextConfig } from "next";

// "export" gera um site 100% estático (só HTML, CSS e JS).
// Vantagens: carrega rápido, custo zero na Vercel e nada de servidor para manter ou proteger.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
