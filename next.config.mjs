/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["cdn.sanity.io"]
  },
  experimental: {
    middleware: true
  }
};

export default nextConfig;
