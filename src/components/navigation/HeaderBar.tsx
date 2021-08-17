import { BoxProps, useTheme } from "@shopify/restyle";
import React from "react";
import { Image } from "react-native";
import { ms } from "react-native-size-matters";
import { HomeMenu } from "../../assets/svg";
import { ITheme } from "../../theme";
import { Box, Text, TouchableOpacityBox } from "../common";

interface Props {
  title: string;
  showMenu?: boolean;
  onPressBack: () => void;
}

export const HeaderBar = ({ onPressBack, title, showMenu, ...rest }: Props & BoxProps<ITheme>) => {
  const { colors } = useTheme<ITheme>();
  return (
    <Box flexDirection="row" padding="m" flex={1} {...rest}>
      <Box alignItems="flex-start">
        <TouchableOpacityBox
          alignItems="center"
          justifyContent="center"
          width={ms(50)}
          height={ms(50)}
          borderRadius={ms(25)}
          bg={"cardTransparent"}
          onPress={() => onPressBack()}>
          <Image
            source={require("../../assets/images/icons/leftArrow.png")}
            resizeMode="contain"
            style={{ width: ms(20), height: ms(20), tintColor: colors.white }}
          />
        </TouchableOpacityBox>
      </Box>

      <Box flex={1} alignItems="center" justifyContent="center">
        <Text variant="bodyBold" color={"white"}>
          {title}
        </Text>
      </Box>
      <TouchableOpacityBox
        width={ms(50)}
        height={ms(50)}
        borderRadius={ms(50)}
        alignItems="center"
        justifyContent="center"
        bg={showMenu ? "cardTransparent" : undefined}>
        {showMenu && <HomeMenu />}
      </TouchableOpacityBox>
    </Box>
  );
};
