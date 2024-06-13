import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#b0c9f6', 600: '#1f60e0', 900: '#122f66', 950: '#102245' };
const gray = { 100: '#f8f6f5', 200: '#f1ecec', 300: '#c6c0c0', 400: '#938988', 500: '#5f5555', 700: '#3f3635', 800: '#2d2424', 900: '#1b1717' };

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: { accent, gray },
        },
    },
    plugins: [starlightPlugin()],
};