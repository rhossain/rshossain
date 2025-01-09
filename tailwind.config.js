function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue != undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'primary-1': withOpacity("--color-primary-1"),
        'brand-facebook': withOpacity("--color-brand-facebook"),
        'brand-google': withOpacity("--color-brand-google"),
        'brand-instagram': withOpacity("--color-brand-instagram"),
        'brand-linkedin': withOpacity("--color-brand-linkedin"),
        'brand-pinterest': withOpacity("--color-brand-pinterest"),
        'brand-skype': withOpacity("--color-brand-skype"),
        'brand-twitter': withOpacity("--color-brand-twitter"),
      },
    },
  },
  plugins: [],
};
