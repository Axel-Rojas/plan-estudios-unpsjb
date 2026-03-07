import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Plan de Estudios UNPSJB',
        short_name: 'Plan UNPSJB',
        description: 'Visualizá y seguí tu progreso en el plan de estudios de la Universidad Nacional de la Patagonia San Juan Bosco.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/logo192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/logo512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
        ],
    }
}
