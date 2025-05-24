/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'instagram.fccu2-2.fna.fbcdn.net',
            'instagram.fccu2-1.fna.fbcdn.net',
            'instagram.fccu2-4.fna.fbcdn.net',
            'instagram.fccu2-3.fna.fbcdn.net',
            'instagram.fccu20-1.fna.fbcdn.net',
            'media-hosting.imagekit.io',
            'drive.google.com'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            }
        ]
    }
};

export default nextConfig;
