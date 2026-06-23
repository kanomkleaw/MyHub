import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false, // ปิดโหมดเข้มงวดของ React 19 ชั่วคราว
  typescript: {
    ignoreBuildErrors: true, // ข้าม TypeScript ข้อผิดพลาดทั้งหมด
  },
  eslint: {
    ignoreDuringBuilds: true, // ข้ามการเช็กโครงสร้าง Syntax
  },
};

export default nextConfig;
