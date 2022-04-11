/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "via.placeholder.com",
            "localhost",
            "strapi.devwulfcodes.com"
        ]
    }
};

module.exports = nextConfig;
