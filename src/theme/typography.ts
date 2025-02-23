// ----------------------------------------------------------------------

const FONT_PRIMARY = "Public Sans, sans-serif"; // Google Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 1.05,
    fontSize: 40,
    letterSpacing: 2,
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.05,
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
  },
  body1: {
    lineHeight: 1.5,
  },
  body2: {
    lineHeight: 22 / 14,
  },
  caption: {
    lineHeight: 1.5,
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    textTransform: "inherit",
  },
} as const;

export default typography;
