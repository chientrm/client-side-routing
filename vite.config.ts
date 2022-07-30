import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import {
	initWatcher,
	generateRoutesDefinition
} from './src/lib/routing/scripts/generate_routes.js';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		hmr: process.env.GITPOD_WORKSPACE_URL
			? {
					host: process.env.GITPOD_WORKSPACE_URL.replace('https://', '5173-'),
					protocol: 'wss',
					clientPort: 443
			  }
			: true
	},
	plugins: [
		svelte(),
		{
			name: 'routes-generator',
			configureServer(vite) {
				initWatcher(vite.watcher);
			},
			buildStart() {
				generateRoutesDefinition();
			}
		}
	]
});
