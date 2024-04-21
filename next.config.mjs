/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: { unoptimized: true, formats: ['image/webp'] },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    })
    return config
  },
}

export default nextConfig
