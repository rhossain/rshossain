function withOpacity(variableName) {
    return ({ opacityValue }) => {
      if (opacityValue != undefined) {
        return `rgba(var(${variableName}), ${opacityValue})`
      }
      return `rgb(var(${variableName}))`
    }
}

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        colors: {
            'primary': withOpacity('--color-primary'),
        }
    },
  },
  plugins: [],
}
