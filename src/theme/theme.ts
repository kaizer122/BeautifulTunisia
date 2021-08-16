import { createTheme } from "@shopify/restyle";
import { ms } from "react-native-size-matters";
import { palette } from "./palette";

export const theme = createTheme({
  colors: {
    bgPrimary: palette.white,
    bgSecondary: palette.lightRed,
    bgTertiary: palette.blue,
    bgTertiaryLight: palette.lightBlue,
    textDark: palette.darkBlue,
    textLight: palette.white,
    white: palette.white,
    black: palette.black,
  },
  spacing: {
    s: ms(8, 0.3),
    m: ms(16, 0.3),
    l: ms(24, 0.3),
    xl: ms(40, 0.3),
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontSize: ms(34, 0.4),
      lineHeight: "120.1%",
      color: "textDark",
    },
    headerBold: {
      fontWeight: "bold",
      fontSize: ms(34, 0.4),
      lineHeight: "120.1%",
      color: "textDark",
    },
    subheader: {
      fontWeight: "semiBold",
      fontSize: ms(21, 0.4),
      lineHeight: ms(32, 0.4),
      color: "textDark",
    },
    body: {
      fontSize: ms(16, 0.4),
      lineHeight: ms(24, 0.4),
      color: "textDark",
    },
    bodyBold: {
      fontSize: ms(16, 0.4),
      fontWeight: "bold",
      lineHeight: ms(24, 0.4),
      color: "textDark",
    },
  },
});

export type ITheme = typeof theme;
