module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'art-primary': '#6B46C1',
          'art-secondary': '#F472B6',
          'art-accent': '#F59E0B',
          'art-dark': '#1F2937',
          'art-light': '#F9FAFB',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'float-reverse': 'float-reverse 7s ease-in-out infinite',
          'float-slow': 'float 8s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          'float-reverse': {
            '0%, 100%': { transform: 'translateY(-10px)' },
            '50%': { transform: 'translateY(10px)' },
          }
        }
      },
    },
    plugins: [],
  }