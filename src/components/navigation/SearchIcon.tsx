import { useTheme } from "@shopify/restyle";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { ITheme } from "../../theme";

export function SearchIcon({ focused, ...rest }: SvgProps & { focused: boolean }) {
  const { colors } = useTheme<ITheme>();

  return (
    <Svg width="23" height="23" viewBox="0 0 25 25" fill="none" {...rest}>
      <Path
        d="M24.697 23.026l-5.959-5.959a10.437 10.437 0 10-1.462 1.462l5.959 5.954a1.033 1.033 0 001.462-1.457zM10.66 18.812a8.37 8.37 0 118.372-8.367 8.377 8.377 0 01-8.372 8.367z"
        fill={focused ? colors.focusedIcon : colors.unfocusedIcon}
        fillOpacity={focused ? 1 : 0.4}
      />
    </Svg>
  );
}
