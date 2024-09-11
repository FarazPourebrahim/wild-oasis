/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nbksejkvesbuylrfhndz.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/avatars/**',
            },
        ],
    },
};

export default nextConfig;
