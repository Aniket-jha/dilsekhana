/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/", // When users visit the root URL `/`
        destination: "/login", // Redirect them to `/login`
        permanent: true, // Set to `true` for a 308 permanent redirect or `false` for a 307 temporary redirect
      },
    ];
  },
};

module.exports = nextConfig;
