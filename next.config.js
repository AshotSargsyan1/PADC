/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'padcllc.com',
                port: '',
                pathname: '/assets/images/team/**',
            },
        ],
    },

}

module.exports = nextConfig
