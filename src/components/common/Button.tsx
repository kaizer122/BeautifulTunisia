import { ColorProps, createBox } from "@shopify/restyle";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ms, mvs } from "react-native-size-matters";
import { ITheme } from "../../theme";
import { Text } from "./Text";

export const TouchableOpacityBox = createBox<
  ITheme,
  TouchableOpacityProps & {
    children?: React.ReactNode;
  }
>(TouchableOpacity);

type Props = React.ComponentProps<typeof TouchableOpacityBox> &
  ColorProps<ITheme> & {
    label: string;
    color?: ColorProps<ITheme>;
  };

export const Button = ({
  onPress,
  label,
  color = "white",
  width = ms(295),
  height = mvs(60),
  bg = "bgTertiaryLight",
  justifyContent = "center",
  alignItems = "center",
  ...rest
}: Props) => {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
      height={height}
      bg={bg}
      {...rest}>
      <Text variant="buttonLabel" color={color}>
        {label}
      </Text>
    </TouchableOpacityBox>
  );
};
