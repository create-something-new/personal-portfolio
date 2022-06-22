import { blue, green, red, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export default function getTheme(themeType) {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      common: { black: "#1D1A1B", white: "#F7F7F7" },
      primary: {
        main: "#FFFFFF",
        light: "",
        dark: "",
        contrastText: "#1D1A1B",
      },
      secondary: {
        main: "#1D1A1B",
        light: "",
        dark: "",
        contrastText: "#FFFFFF",
      },
      error: red,
      warning: yellow,
      info: blue,
      success: green,
      text: { primary: "#1D1A1B", secondary: "#FFFFFF", disabled: "#DFDFDF" },
      background: { paper: "#F7F7F7", default: "#FFFFFF" },
    },
    typography: {
      fontFamily: "DM Mono",
      fontWeightLight: "300",
      fontWeightRegular: "400",
      fontWeightBold: "500",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      common: { black: "#1D1A1B", white: "#F7F7F7" },
      primary: {
        main: "#1D1A1B",
        light: "",
        dark: "",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#FFFFFF",
        light: "",
        dark: "",
        contrastText: "#1D1A1B",
      },
      error: red,
      warning: yellow,
      info: blue,
      success: green,
      text: { primary: "#FFFFFF", secondary: "#1D1A1B", disabled: "#DFDFDF" },
      background: { paper: "#F7F7F7", default: "#1D1A1B" },
    },
    typography: {
      fontFamily: "DM Mono",
      fontWeightLight: "300",
      fontWeightRegular: "400",
      fontWeightBold: "500",
    },
  });
  return themeType === "dark" ? darkTheme : lightTheme;
}
