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
        'secondary-1': withOpacity("--color-secondary-1"),
        'light-1': withOpacity("--color-light-1"),
        'light-2': withOpacity("--color-light-2"),
        'light-3': withOpacity("--color-light-3"),
        'light-4': withOpacity("--color-light-4"),
        'light-5': withOpacity("--color-light-5"),
        'light-6': withOpacity("--color-light-6"),
        'light-7': withOpacity("--color-light-7"),
        'light-8': withOpacity("--color-light-8"),
        'dark-1': withOpacity("--color-dark-1"),
        'dark-2': withOpacity("--color-dark-2"),
        'dark-3': withOpacity("--color-dark-3"),
        'dark-4': withOpacity("--color-dark-4"),
        'dark-5': withOpacity("--color-dark-5"),
        'dark-6': withOpacity("--color-dark-6"),
        'dark-7': withOpacity("--color-dark-7"),
        'dark-8': withOpacity("--color-dark-8"),
        'dark-9': withOpacity("--color-dark-9"),
        'dark-10': withOpacity("--color-dark-10"),
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
