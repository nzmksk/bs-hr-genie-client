import { createTheme, responsiveFontSizes } from "@mui/material";
import "@fontsource/nunito";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#2a3c98",
      },
      secondary: {
        main: "#282828",
        light: "#999999",
        dark: "#0e0e0e",
      },
      error: {
        main: "#c73838",
      },
      text: {
        main: "#f5f5f5",
      },
    },
    spacing: (factor) => `${0.4 * factor}rem`,
    typography: {
      fontFamily: "Nunito, Arial, sans-serif",
      htmlFontSize: 10,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "2rem",
            fontSize: "1.6rem",
            height: "5.2rem",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            backgroundColor: "#282828",
            borderRadius: "2rem",
            fontSize: "1.6rem",
            "& .MuiInputLabel-root": {
              color: "#f5f5f5",
            },
            "& .MuiInputLabel-shrink": {
              borderColor: "#f5f5f5",
              color: "#f5f5f5",
            },
            "& .MuiOutlinedInput-input": {
              color: "#f5f5f5",
            },
            "& .Mui-focused": {
              "& .MuiInputLabel-root": {
                color: "#f5f5f5",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#f5f5f5",
              },
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          color: "#f5f5f5",
        },
        styleOverrides: {
          h1: {
            fontSize: "3.2rem",
          },
          h2: {
            fontSize: "2.8rem",
          },
          h3: {
            fontSize: "2.4rem",
          },
          h4: {
            fontSize: "2.0rem",
          },
          h5: {
            fontSize: "1.6rem",
          },
          h6: {
            fontSize: "1.2rem",
          },
        },
      },
    },
  })
);

export default theme;
