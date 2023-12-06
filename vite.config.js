import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import ssr from 'vike/plugin';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/jj-personal-website/',
	plugins: [preact(), ssr({ prerender: true })],
});
