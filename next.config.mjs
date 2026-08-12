/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/products/led-swimming-pool-light",
        destination: "/products/swimming-pool-led-light",
        permanent: true
      },
      {
        source: "/products/underwater-pool-light",
        destination: "/products/underwater-led-light",
        permanent: true
      },
      {
        source: "/products/rgb-pool-light",
        destination: "/products/custom-lighting-solution",
        permanent: true
      },
      {
        source: "/products/fountain-light",
        destination: "/products/fountain-led-light",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
