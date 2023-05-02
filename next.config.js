module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/eunbin/:path",
        destination: "/leeeunbin/:path",
        permanent: false,
      },
    ];
  },

};