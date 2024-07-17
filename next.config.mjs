/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uniformapp.in",
      },
    ],
  },
};

export default nextConfig;
