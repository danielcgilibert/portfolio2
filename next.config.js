/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const rewrites = async () => [
  {
    destination: 'https://cdn.splitbee.io/sb.js',
    source: '/sb.js',
  },
  {
    destination: 'https://hive.splitbee.io/:slug',
    source: '/sb-api/:slug',
  },
]
module.exports = {
  rewrites,
  nextConfig,
}
