/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                custom: {
                    green: '#4CAF50',
                    darkgreen: '#2E7D32',
                    lightgray: '#F5F5F5',
                    darkgray: '#333333',
                    white: '#FFFFFF',
                },
            },
        },
    },
};
