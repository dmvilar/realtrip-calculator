import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
// https://vitejs.dev/config/

const manifestForPlugin: Partial<VitePWAOptions> = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
	manifest: {
		name: "RealTrip - Calculadora",
		short_name: "RealTrip",
		description: "Calculadora de custo de passagens.",
		icons: [
			{
				src: "/src/assets/realtriplogo.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/src/assets/realtriplogo.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/src/assets/realtriplogo.png",
				sizes: "180x180",
				type: "image/png",
				purpose: "apple touch icon",
			},
			{
				src: "/src/assets/realtriplogo.png",
				sizes: "225x225",
				type: "image/png",
				purpose: "any maskable",
			},
		],
		theme_color: "#171717",
		background_color: "#e8ebf2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};

export default defineConfig({
	base: "./",
	plugins: [react(), VitePWA(manifestForPlugin)],
});
