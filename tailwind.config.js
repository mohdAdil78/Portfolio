/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Nebula Glass Color Palette
        'space-primary': '#05070F',
        'space-secondary': '#0B1020',
        'accent-primary': '#7C7CFF',
        'accent-secondary': '#38BDF8',
        'glow-highlight': '#A855F7',
        'text-primary': '#E5E7EB',
        'text-secondary': '#94A3B8',
        'text-muted': '#64748B',
        'glass-bg': 'rgba(255,255,255,0.06)',
        'glass-border': 'rgba(255,255,255,0.12)',
      },
      backgroundImage: {
        'gradient-nebula': 'linear-gradient(135deg, #7C7CFF, #38BDF8)',
        'gradient-space': 'radial-gradient(ellipse at top, rgba(124,124,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(168,85,247,0.1) 0%, transparent 50%)',
        'grid-pattern': "linear-gradient(rgba(124,124,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,124,255,0.08) 1px, transparent 1px)",
        'noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        'grid': '60px 60px',
        'noise': '256px 256px',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(124,124,255,0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(124,124,255,0.8)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(10px) translateY(-10px)' },
          '50%': { transform: 'translateX(-5px) translateY(5px)' },
          '75%': { transform: 'translateX(-10px) translateY(-5px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        'nebula': '18px',
      },
      boxShadow: {
        'glow-primary': '0 0 25px rgba(124,124,255,0.6)',
        'glow-secondary': '0 0 25px rgba(56,189,248,0.6)',
        'glow-highlight': '0 0 25px rgba(168,85,247,0.6)',
        'glass-inset': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
