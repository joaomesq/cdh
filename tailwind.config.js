/**
 @type {import('tailwindcss').Config}
 */

 module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx,md}",
    ],
    theme: {
        extend: {
            colors: {
        'cdh-pink': '#E5397A',
        'cdh-coral': '#F1615A',
        'cdh-orange': '#EE9B4A',
        'cdh-teal': '#59B5AD',
        'cdh-blue': '#3498C6',
        'cdh-purple': '#6F57A6',
        'cdh-dark': '#4A4A4A',
      },
        },
    },
    plugins: [],
 }