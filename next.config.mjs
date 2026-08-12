/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/products/led-swimming-pool-light",
        destination: "/products/swimming-pool-light-manufacturer",
        permanent: true
      },
      {
        source: "/products/swimming-pool-led-light",
        destination: "/products/swimming-pool-light-manufacturer",
        permanent: true
      },
      {
        source: "/products/underwater-pool-light",
        destination: "/products/ip68-underwater-led-pool-light",
        permanent: true
      },
      {
        source: "/products/underwater-led-light",
        destination: "/products/ip68-underwater-led-pool-light",
        permanent: true
      },
      {
        source: "/products/rgb-pool-light",
        destination: "/products/rgb-swimming-pool-light",
        permanent: true
      },
      {
        source: "/products/fountain-light",
        destination: "/products/fountain-led-light",
        permanent: true
      },
      {
        source: "/products/custom-lighting-solution",
        destination: "/products/custom-pool-lighting-solution",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
