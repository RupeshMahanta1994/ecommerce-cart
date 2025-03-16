import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
  },
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/my-bucket/**',
        search: '',
      },
    ]
  }
}
 
export default nextConfig