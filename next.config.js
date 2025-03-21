const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
  },
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensure App Router is enabled
  },
};

module.exports = nextConfig;
