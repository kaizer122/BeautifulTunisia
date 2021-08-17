import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { dummyRegions } from "../assets/dummy";
import { Box, HomeHeader, PlacesCarousel, RegionsCarousel } from "../components";
import { ITheme } from "../theme";

export const HomeScreen = () => {
  const { colors } = useTheme<ITheme>();
  const [regions, setRegions] = useState<any>([...dummyRegions]);
  const [places, setPlaces] = useState<any>([...dummyRegions[0].places]);
  return (
    <Box flex={1} bg={"bgPrimary"}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bgPrimary} />
      <HomeHeader />
      <RegionsCarousel regions={regions} />
      <PlacesCarousel places={places} />
    </Box>
  );
};
