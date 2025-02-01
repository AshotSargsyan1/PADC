/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'padcllc.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.padcllc.com',
                port: '',
                pathname: '/**',
            }
        ],
    }
}

module.exports = nextConfig
