// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { unoptimized: true },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site generation
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint during builds
  },
  images: {
    unoptimized: true, // Disables image optimization for static exports
  },
  webpack: (config, { isServer }) => {
    // Resolve warnings for 'bufferutil' and 'utf-8-validate'
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        bufferutil: false,
        'utf-8-validate': false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;