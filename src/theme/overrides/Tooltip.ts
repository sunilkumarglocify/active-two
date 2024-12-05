import { Theme } from "@mui/material/styles";
import palette from "../palette";

export default function Tooltip(theme: Theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.light.background.default,
          color: palette.light.text.primary,
          filter: "drop-shadow(10px -5px 40px rgba(145, 158, 171, 0.16))",
          fontSize: theme.typography.pxToRem(14),
          fontWeight: "normal",
          padding: theme.spacing(2),
          boxShadow: theme.shadows[1],
        },
        arrow: {
          color: palette.light.background.default,
        },
      },
    },
  };
}
