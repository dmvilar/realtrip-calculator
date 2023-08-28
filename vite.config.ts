import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
	registerType: "prompt",
	manifest: {
    "theme_color": "#000000",
    "background_color": "#000000",
    "display": "standalone",
    "scope": "/",
    "start_url": "/",
    "name": "RealTrip Calculadora",
    "short_name": "RealTrip Calculadora",
    "icons": [
        {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
},
};

export default defineConfig({
	base: "/",
	plugins: [react(), VitePWA(manifestForPlugin)],
});
