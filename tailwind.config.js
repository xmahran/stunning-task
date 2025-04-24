/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4B5563", // slate-600
          DEFAULT: "#1F2937", // slate-800
          dark: "#F3F4F6", // gray-100
        },
        secondary: {
          light: "#6B7280", // gray-500
          DEFAULT: "#374151", // gray-700
          dark: "#E5E7EB", // gray-200
        },
        accent: {
          light: {
            from: "#4B5563", // slate-600
            to: "#1F2937", // slate-800
          },
          dark: {
            from: "#3B82F6", // blue-500
            to: "#8B5CF6", // purple-500
          },
        },
        background: {
          primary: {
            light: "#F8FAFC", // slate-50
            dark: "#111827", // gray-900
          },
          secondary: {
            light: "#FFFFFF", // white
            dark: "#1F2937", // gray-800
          },
        },
      },
    },
  },
  plugins: [],
};
