import { useTheme } from "@shopify/restyle";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { ITheme } from "../../theme";

export function HomeIcon({ focused, ...rest }: SvgProps & { focused: boolean }) {
  const { colors } = useTheme<ITheme>();
  React.useEffect(() => {
    console.log(focused, "AAAAAAAAAAAAAAA");
  }, [focused]);
  return (
    <Svg width="23" height="23" viewBox="0 0 23 25" fill={"none"} {...rest}>
      <Path
        d="M22.212 10L11.554.233a.889.889 0 00-1.218.018L.27 10.02a.888.888 0 00-.27.637v13.034a.888.888 0 00.888.888h20.724a.888.888 0 00.888-.888V10.658a.887.887 0 00-.288-.658zm-1.488 12.8c-9.921-.067-12.225-.161-18.947 0V11.033l9.2-8.925 9.752 8.94V22.8h-.005z"
        fill={focused ? colors.focusedIcon : colors.unfocusedIcon}
        fillOpacity={focused ? 1 : 0.4}
      />
    </Svg>
  );
}
