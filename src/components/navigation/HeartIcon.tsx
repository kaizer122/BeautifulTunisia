import { useTheme } from "@shopify/restyle";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { ITheme } from "../../theme";

function HeartIconFn({ focused, ...rest }: SvgProps & { focused: boolean }) {
  const { colors } = useTheme<ITheme>();
  return (
    <Svg width="26" height="24" viewBox="0 0 26 24" fill={"none"} {...rest}>
      <Path
        d="M21.308 2.61c-5.128-3.222-8.454 1.594-8.454 1.594S9.528-.612 4.4 2.61c-5.128 3.222-3.326 8.939-1.836 11.3 1.49 2.361 3.5 4.885 10.29 8.87 6.791-3.984 8.8-6.514 10.29-8.87 1.49-2.356 3.292-8.078-1.836-11.3z"
        stroke={focused ? colors.focusedIcon : colors.unfocusedIcon}
        strokeWidth={2}
        strokeOpacity={focused ? 1 : 0.4}
      />
    </Svg>
  );
}

export const HeartIcon = React.memo(HeartIconFn);
