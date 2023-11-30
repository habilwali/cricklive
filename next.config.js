/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: 'https://backend.sportsbizz.cricket/api/',
    imageUrl:'https://backend.sportsbizz.cricket'
  },
 
  images: {
    
    domains: ['backend.sportsbizz.cricket',
      'sportsbizz.com'
    ],
  },
}

module.exports = nextConfig
