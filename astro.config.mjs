import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import starlightScrollToTop from 'starlight-scroll-to-top'
import starlightThemeObsidian from 'starlight-theme-obsidian'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Full-Pack',
            favicon: 'favicon.png',
            logo: { dark: '/src/assets/fp_logo_dark.png', light: '/src/assets/fp_logo_light.png', replacesTitle: true },
            sidebar: [
                {
                    label: 'String-Pack',
                    badge: { text: 'v1', variant: 'note', size: 'small' },
                    items: [
                        { label: 'Getting Started', link: '/string-pack/' },
                        {
                            label: 'APIs',
                            items: [
                                { label: 'merge', link: '/string-pack/merge' },
                                { label: 'reverse', link: '/string-pack/reverse' },
                                { label: 'compare', link: '/string-pack/compare/' },
                                { label: 'padding', link: '/string-pack/padding' },
                                { label: 'regionMatchers', link: '/string-pack/region-matchers' },
                                { label: 'caseConversion', link: '/string-pack/case-conversion' },
                                { label: 'caseValidation', link: '/string-pack/case-validation' }
                            ]
                        }
                    ]
                },
                {
                    label: 'Classes',
                    badge: { text: 'Coming Soon', variant: 'note', size: 'medium' },
                    items: [
                        { label: 'StringBuilder', link: '/string-pack/#' },
                        { label: 'StringValidator', link: '/string-pack/#' }
                    ]
                }
            ],
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/full-pack' }],
            customCss: [
                // Path to your Tailwind base styles:
                './src/tailwind.css'
            ],
            expressiveCode: {
                // You can set configuration options here
                themes: ['dark-plus', 'slack-ochin'],
                styleOverrides: {
                    // You can also override styles
                    borderRadius: '0.5rem'
                }
            },
            plugins: [
                starlightScrollToTop({
                    position: 'right',
                    tooltipText: 'Back to top',
                    showTooltip: true,
                    smoothScroll: true,
                    threshold: 10,
                    svgPath: 'M12 4L6 10H9V16H15V10H18L12 4M9 16L12 20L15 16',
                    svgStrokeWidth: 2,
                    borderRadius: '20'
                }),
                starlightThemeObsidian({
                    graph: false
                })
            ]
        }),
        tailwind({
            // Disable the default base styles:
            applyBaseStyles: false
        })
    ]
})
