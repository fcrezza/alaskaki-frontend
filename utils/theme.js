import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider
} from "styled-components";
import "@fontsource/poppins/900.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/400.css";
import "normalize.css";

const colorScheme = {
  blue: "#3d5af1",
  white: "#fff",
  gray: "#d9d9d9",
  "black.100": "#333",
  "black.50": "#555",
  red: "red",
  "red.50": "#fd5e5e"
};

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
		background: ${({theme}) => theme.background};
	}
`;

function ThemeProvider({children}) {
  return (
    <StyledThemeProvider theme={colorScheme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
}

export default ThemeProvider;
