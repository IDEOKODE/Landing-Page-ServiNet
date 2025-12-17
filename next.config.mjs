/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false
  },
  images: {
    unoptimized: false
  },
  // Desactiva el indicador/menú de Dev Tools en el servidor de desarrollo
  devIndicators: false,
}

export default nextConfig
