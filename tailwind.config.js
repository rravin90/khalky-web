/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nature: {
                    50: '#f7f9f2',  // Very light green/cream
                    100: '#ecf3e0', // Light green
                    300: '#9bc568', // Leaf green
                    500: '#5c8d3d', // Khalky Green (primary)
                    800: '#2d4420', // Dark Green
                    900: '#1a2815', // Very Dark Green
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Fallback
                arabic: ['Noto Sans Arabic', 'sans-serif'], // For Arabic
                kurdish: ['Noto Sans Arabic', 'sans-serif'], // Shared with Arabic usually, or similar
            }
        },
    },
    plugins: [],
}
