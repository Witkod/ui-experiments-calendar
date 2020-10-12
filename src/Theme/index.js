import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "rgba(118, 67, 215, 0.8)",
    days: {
      today: "rgb(254, 212, 46)"
    }
  }
};

export function AppTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
