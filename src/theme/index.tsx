import { createTheme } from "@mui/material/styles";
import shadows, { customShadows } from "./shadows";
import componentsOverride from "./overrides";

import palette from "./palette";
import typography from "./typography";
const isLight = "light";
const theme = createTheme({
  palette: isLight ? palette.light : palette.dark,
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shape: { borderRadius: 8 },
  shadows: isLight ? shadows.light : shadows.dark,
  customShadows: isLight ? customShadows.light : customShadows.dark,
});

theme.components = componentsOverride(theme);

export default theme;
