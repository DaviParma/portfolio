module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Inter',
      myname: 'Great Vibes'
    },
    screens: {
      msm: '380px',
      // => @media (min-width: 380px) { ... }
      
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

    },
    extend: {
      animation: {
        'animate-bounce': 'spin 10s linear infinite',
      }
    }
  },
  plugins: [],
};