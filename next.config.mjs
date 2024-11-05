const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  onDemandEntries: {
    // how long pages are kept in the buffer (in ms)
    maxInactiveAge: 60 * 1000,
    // how many pages
    pagesBufferLength: 10
  }
}

export default nextConfig;