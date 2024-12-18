import type {Config} from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontSize: { // Correct key (not "fontsize")
                'xxs': '0.5rem', // Extra small font size
            },
            borderRadius: {
                'xxl': '1.5rem',
            }
        },
    },
    plugins: [],
} satisfies Config;
