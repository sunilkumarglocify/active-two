import { alpha, Theme } from '@mui/material/styles';

export default function Button(theme: Theme) {
  const shadowColor = alpha(theme.palette.common.black, 0.25)
  return {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: `0px 4px 8px ${shadowColor}`,
          },
          '&:focus': {
            boxShadow: `0px 2px 4px ${shadowColor}`,
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
