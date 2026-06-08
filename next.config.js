/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // gera HTML estático — ideal para Vercel/Cloudflare
  images: {
    unoptimized: true, // necessário para export estático
  },
}

module.exports = nextConfig
