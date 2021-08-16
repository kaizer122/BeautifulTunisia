import { useTheme } from "@shopify/restyle";
import React from "react";
import { StatusBar } from "react-native";
import { vs } from "react-native-size-matters";
import { Boats } from "../assets/svg";
import { Box } from "../components";
import { ITheme } from "../theme";

export const LoginScreen = ({ navigation }: any) => {
  const theme = useTheme<ITheme>();
  const { bgSecondary } = theme.colors;
  return (
    <Box flex={1}>
      <StatusBar backgroundColor={bgSecondary} />
      <Box flex={1.75} bg="bgSecondary"></Box>
      <Box flex={1} bg="bgTertiary">
        <Box position="absolute" top={vs(-118)} left={0} right={0} bottom={0}>
          <Boats height={"100%"} width="100%" preserveAspectRatio="xMinYMin slice" />
        </Box>
      </Box>
    </Box>
  );
};
