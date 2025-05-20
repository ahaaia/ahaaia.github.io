import type { NextConfig } from "next";

// Redirect all paths to the landing page; 
// this is untill we implement login to restrict access to protected routes
// const nextConfig: NextConfig = {
//   async redirects() {
//     return [
//       {
//         source: '/', 
//         destination: '/landing',
//         permanent: false,
//       },
//       {
//         source: '/courses',
//         destination: '/landing',
//         permanent: false,
//       },
//       {
//         source: '/create',
//         destination: '/landing',
//         permanent: false,
//       },
//       {
//         source: '/profile',
//         destination: '/landing',
//         permanent: false,
//       },
//       {
//         source: '/search',
//         destination: '/landing',
//         permanent: false,
//       }   
//     ];
//   },
// };

const nextConfig: NextConfig = {
  output: 'export',
  // Uncomment and modify these if you're using a custom domain
  // basePath: '',
  // assetPrefix: '',
  images: {
    unoptimized: true,
  },
  // Uncomment and modify these if you need redirects
  // async redirects() {
  //   return [
  //     {
  //       source: '/', 
  //       destination: '/landing',
  //       permanent: false,
  //     },
  //     // ... other redirects
  //   ];
  // },
};

export default nextConfig;
