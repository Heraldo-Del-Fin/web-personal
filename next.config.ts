import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // URL bonita en español sobre la misma ruta `app/[lang]/projects`.
      { source: "/es/proyectos", destination: "/es/projects" },
      { source: "/es/proyectos/:slug", destination: "/es/projects/:slug" },
    ];
  },
};

export default nextConfig;
