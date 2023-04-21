/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/waitinglist',
        destination: 'http://127.0.0.1:84/user/waiting/list',
      }
    ]
  },
}

module.exports = nextConfig
