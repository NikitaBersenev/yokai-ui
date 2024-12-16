import path from "node:path";
// import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};
export default nextConfig;
//
// const withMDX = createMDX({
//
// })
//
// export default withMDX(nextConfig)
