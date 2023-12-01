// vite.config.js
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    base: './',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/index.html'),
                login: path.resolve(__dirname, 'src/login/index.html'),
            },
            output: {},
        },
        target: 'esnext',
        minify: true,
    },
});
