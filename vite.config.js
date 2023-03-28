import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
        visualizer({
            filename: './storage/bundle-analyzer.html',
            open: false,
            template: 'network', //sunburst, treemap, network, json, list
            //json: false,
            gzipSize: true,
            brotliSize: true,
        }),
    ],
});
