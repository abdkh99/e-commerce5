/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "primary-dark": "#1d4ed8",
        secondary: "#64748b",
        background: "#0f172a",
        surface: "#1e293b",
        "surface-light": "#334155",
        text: "#f8fafc",
        "text-muted": "#94a3b8",
      },
    },
  },
  plugins: [],
};
