/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          oxford: '#081F4A',      // Oxford blue - main background
          seashore: '#0D3C91',    // Dark seashore - secondary background
          light: '#1E5BA8',       // Hover state
        },
        // Accent colors
        accent: {
          banana: '#F3FF48',      // Banana yellow - CTA and highlights
          lime: '#E8F935',        // Lime - secondary accent
          hover: '#D9E030',       // Hover state
        },
        // Dark colors
        dark: {
          wash: '#0C0C0C',        // Black wash - dark areas
          coal: '#1A1A1A',        // Coal - card background
          charcoal: '#2D2D2D',    // Charcoal - borders
        },
        // Keep original NAECLA colors for transition
        naecla: {
          blue: '#00A8E8',
          'blue-dark': '#0077B6',
          'blue-light': '#48CAE4',
          'sky': '#90E0EF',
          'gray': '#F0F9FF',
        }
      },
      fontFamily: {
        sans: ['Urbanist', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Urbanist', 'sans-serif'],
        heading: ['Urbanist', 'Poppins', 'Inter', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1', fontWeight: '800' }],
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'count-up': 'countUp 2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(243, 255, 72, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(243, 255, 72, 0.6)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #081F4A 0%, #0D3C91 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0C0C0C 0%, #1A1A1A 100%)',
      },
    },
  },
  plugins: [],
}