import { createTheme } from "@mui/material";

// NOTE create custom theme
export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: "#bd93f9",
    },
    background: {
      default: "#bdbdbd",
    },
  },
  typography: {
    fontFamily: "vazir, roboto",
  },
});

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: "#bd93f9",
    },
    background: {
      default: "#212121",
    },
  },
  typography: {
    fontFamily: "vazir, roboto",
  },
});
