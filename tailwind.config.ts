import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand is monochrome: white text on black. `white` is matched to the
        // logo's own fill (#ececec) so the mark and the type never disagree.
        black: '#0a0a0a',
        white: '#ececec',
        mid: '#141414',
        muted: '#6b6b6b',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      borderColor: {
        hairline: 'rgba(236,236,236,0.14)',
      },
      keyframes: {
        'scroll-brands': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-brands': 'scroll-brands 50s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
