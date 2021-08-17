import React from "react";
import { HomeMenu } from "../../assets/svg";
import { Avatar, Box, Text, TouchableOpacityBox } from "../common";

export const HomeHeader = () => {
  return (
    <Box flexDirection="row" marginHorizontal="m" marginVertical="s" justifyContent="space-between">
      <Box flex={1} flexDirection="row" justifyContent="space-around">
        <Avatar borderColor={"bgSecondaryDark"} />
        <Box flex={1} ml={"m"} justifyContent="center">
          <Text variant="body">Kais</Text>
          <Text variant="bodyBold">Ladjemi</Text>
        </Box>
      </Box>
      <TouchableOpacityBox flex={0.3} alignItems="flex-end" justifyContent="center">
        <HomeMenu />
      </TouchableOpacityBox>
    </Box>
  );
};
