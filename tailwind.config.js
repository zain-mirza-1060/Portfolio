/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy colors (kept for backward compatibility during migration)
        primary: "#3B82F6",
        secondary: "#60A5FA",
        dark: "#0a0a0f",
        light: "#F8FAFC",
      },
      fontFamily: {
        // Geist fonts (install with: npm install geist)
        // Then import in app/layout.tsx
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '400ms',
      },
    },
  },
  plugins: [],
} 