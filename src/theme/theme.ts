import { createTheme } from "@shopify/restyle";
import { ms } from "react-native-size-matters";
import { palette } from "./palette";

export const theme = createTheme({
  colors: {
    bgPrimary: palette.white,
    bgSecondary: palette.lightRed,
    bgSecondaryDark: palette.darkRed,
    bgTertiary: palette.blue,
    bgTertiaryLight: palette.lightBlue,
    textDark: palette.darkBlue,
    textLight: palette.white,
    white: palette.white,
    black: palette.black,
    transparent: palette.transparent,
    focusedIcon: palette.blue,
    unfocusedIcon: palette.gray,
    cardTransparent: palette.transparentBlack,
    cardTransparent2: palette.transparentBlack2,
    cardPrice: palette.lightGray,
  },
  spacing: {
    xs: ms(4, 0.3),
    s: ms(8, 0.3),
    m: ms(16, 0.3),
    l: ms(24, 0.3),
    xl: ms(40, 0.3),
    xxl: ms(60, 0.3),
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      fontFamily: "poppins-regular",
    },
    header: {
      fontSize: ms(34, 0.4),
      lineHeight: ms(41, 0.4),
      color: "textDark",
    },
    headerBold: {
      fontFamily: "poppins-bold",
      fontSize: ms(34, 0.4),
      lineHeight: ms(41, 0.4),
      color: "textDark",
    },
    subheader: {
      fontFamily: "poppins-semibold",
      fontSize: ms(21, 0.4),
      lineHeight: ms(32, 0.4),
      color: "textDark",
    },
    tiny: {
      fontSize: ms(10, 0.4),
      color: "textDark",
    },
    body: {
      fontSize: ms(16, 0.4),
      lineHeight: ms(24, 0.4),
      color: "textDark",
    },
    bodyBold: {
      fontFamily: "poppins-bold",
      fontSize: ms(16, 0.4),
      lineHeight: ms(24, 0.4),
      color: "textDark",
    },
    buttonLabel: {
      fontFamily: "poppins-semibold",
      fontSize: ms(16, 0.4),
      lineHeight: ms(24, 0.4),
      color: "white",
      textAlign: "center",
    },
  },
});

export type ITheme = typeof theme;
