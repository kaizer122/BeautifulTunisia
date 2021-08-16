import React from "react";
import { ms } from "react-native-size-matters";
import { SvgProps } from "react-native-svg";
import { Box } from "../common";
export const TabBarIcon = ({
  focused,
  Icon,
}: {
  focused: boolean;
  Icon: React.FC<SvgProps & { focused: boolean }>;
}) => (
  <Box alignItems="center" justifyContent="center" height={ms(30)} width={ms(30)}>
    <Icon height={ms(30)} focused={focused} />
    {focused && (
      <Box
        position="absolute"
        bottom={ms(-5)}
        right={ms(-2)}
        width={ms(15)}
        height={ms(15)}
        borderRadius={ms(15)}
        bg="bgSecondaryDark"
        zIndex={-1}
      />
    )}
  </Box>
);
