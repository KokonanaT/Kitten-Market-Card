/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                darkblue: "#4A4D5E",
                slate: "#E4E6F2",
                darkpurple: '#4B0082',
                onionPurple: '#9d174d',
                transparent: '#FFFFFF',
                sapphireBlue: '#0F52BA',
                warmbeige: '#F51DC',
            },
        },
    },
    plugins: [],
}