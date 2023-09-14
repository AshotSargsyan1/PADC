/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'padcllc.com',
                port: '',
                pathname: '/images/team/**',
            },
        ],
    },

}

module.exports = nextConfig
