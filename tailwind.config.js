module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#347aff',
        secondary: '#b3d7ff',
        titlebar: '#faf2f4',
        panel: '#f5eff0',
        'black-text': '#2e1d1f',
        'white-text': '#f7eef1',
      },
      fontFamily: {
        sans: ['SF Pro', 'sans-serif'],
      },
      backgroundImage: {
        colorful: `url("${process.env.NEXT_PUBLIC_BASE_PATH}/wallpapers/colorful.jpg")`,
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
