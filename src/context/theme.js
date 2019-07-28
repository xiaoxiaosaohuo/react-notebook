export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: 'red',
    },
  };
  const calculateChangedBits = (currentValue, nextValue) =>
  nextValue.theme.background === 'red' ? 0b10 : 0b00;
  debugger;
  export const ThemeContext = React.createContext(
    themes.dark, // default value
    calculateChangedBits

  );
  