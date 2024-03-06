import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#012030',
        'dark-green': '#003A47',
        'light-green': '#0FC2C0',
        'light-red': '#FF3737',
        'dark-grey': '#012030',
        beige: '#F2E3D5',
        grey: '#A9A29C',
        orange: '#F6742A',
        green: {
          700: '#013440',
          800: '#012F39',
        },
      },
      borderRadius: {
        sm: '3px',
        md: '5px',
        lg: '10px',
      },
      borderWidth: {
        '10': '10px',
      },
      spacing: {
        '40px': '40px',
        '370px': '370px',
        '600px': '600px',
        '1200px': '1200px',
      },
    },
  },
  plugins: [],
};
export default config;
