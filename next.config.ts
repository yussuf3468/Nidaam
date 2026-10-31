import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Send the default Vercel address to the real domain, so Google sees one site, not two.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'nidaam.vercel.app' }],
        destination: 'https://www.nidaam.co.ke/:path*',
        permanent: true,
      },
      { source: '/get-started', destination: '/contact', permanent: false },
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/work', destination: '/case-studies', permanent: true },
    ];
  },
};

export default nextConfig;
