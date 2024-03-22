/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            },
            {
                protocol: 'https',
                hostname: 'www.datocms-assets.com'
            },
            {
                protocol: 'https',
                hostname: 'static.agilitycms.com'
            },
            {
                protocol: 'https',
                hostname: 'nextjs.org'
            },
            {
                protocol: 'https',
                hostname: 'assets.entrepreneur.com'
            }
        ]
    }
};

export default nextConfig;
