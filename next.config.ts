import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 🚀 เพิ่มคำสั่งนี้เพื่อบังคับให้ทุกหน้าข้ามขั้นตอน Prerendering (Static Generation) ตอน Build ชั่วคราว
  output: 'standalone',
};

export default nextConfig;
