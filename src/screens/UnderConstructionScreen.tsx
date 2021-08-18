import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { UnderConstructionAnim } from "../assets/lottie";
import { Box } from "../components";

export const UnderConstructionScreen = () => {
  return (
    <Box flex={1}>
      <AnimatedLottieView source={UnderConstructionAnim as any} autoPlay loop />
    </Box>
  );
};
