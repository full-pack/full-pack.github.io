import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'String Pack',
        social: {
            github: 'https://github.com/full-pack/string-pack'
        },
        sidebar: [

            {
                label: 'Getting Started',
                items: [{
                        label: 'Guide',
                        items: [
                            { label: 'install', link: '/pages/install' },

                        ],
                    },

                    {
                        label: 'Api',
                        items: [
                            { label: 'Padding', link: '/pages/padding' },
                            { label: 'Merge', link: '/pages/merge' },
                            { label: 'Compare', link: '/pages/compare/' },
                            { label: 'Loose Compare', link: '/pages/loosecom' },
                            { label: 'Capitalize Initial', link: '/pages/capitalizeinitial' },
                            { label: 'Capitilize word', link: '/pages/capitalizewords' },
                            { label: 'Case Conversion', link: '/pages/caseconversion' },
                            { label: 'Case Validation', link: '/pages/casevalidation' },
                            { label: 'Region Match', link: '/pages/regionmatch' },
                            { label: 'Loose Region Match', link: '/pages/looseregionmatch' },
                            { label: 'Is Alpha', link: '/pages/isalpha' },
                            { label: 'Is Numeric', link: '/pages/isalphanumeric' },
                        ],
                    },
                    {
                        label: 'Build',
                        items: [
                            { label: 'Build', link: '/pages/build' },

                        ],
                    },


                ],



            }
        ],
        title: 'String-pack Doc ',
        customCss: [
            // Path to your Tailwind base styles:
            './src/tailwind.css'
        ]
    }), tailwind({
        // Disable the default base styles:
        applyBaseStyles: false
    })]
});