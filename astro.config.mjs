import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Full-Pack',
            favicon: 'favicon.png',
            logo: {
                dark: '/src/assets/fp_logo_dark.png',
                light: '/src/assets/fp_logo_light.png',
                replacesTitle: true
            },
            sidebar: [
                {
                    label: 'String-Pack',
                    items: [
                        { label: 'Getting Started', link: '/string-pack/' },
                        {
                            label: 'APIs',
                            items: [
                                {
                                    label: 'Functions',
                                    items: [
                                        { label: 'merge', link: '/string-pack/merge' },
                                        { label: 'reverse', link: '/string-pack/reverse' },
                                        { label: 'compare', link: '/string-pack/compare/' },
                                        { label: 'padding', link: '/string-pack/padding' },
                                        { label: 'regionMatchers', link: '/string-pack/region-matchers' },
                                        { label: 'caseConversion', link: '/string-pack/case-conversion' },
                                        { label: 'caseValidation', link: '/string-pack/case-validation' }
                                    ]
                                },
                                {
                                    label: 'Classes',
                                    badge: {
                                        text: 'Coming Soon',
                                        variant: 'note',
                                        size: 'medium'
                                    },
                                    items: [
                                        { label: 'StringBuilder', link: '/string-pack/#' },
                                        { label: 'StringValidator', link: '/string-pack/#' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            social: {
                github: 'https://github.com/full-pack'
            },
            customCss: [
                // Path to your Tailwind base styles:
                './src/tailwind.css'
            ]
        }),
        tailwind({
            // Disable the default base styles:
            applyBaseStyles: false
        })
    ]
})
