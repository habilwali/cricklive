/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webp: {
    preset: "default",
    quality: 100,
  },
  images: {
    
    domains: ['cricapp.bingerush.com',
      'sportsbizz.com'
    ],
    

  },
}

module.exports = nextConfig
