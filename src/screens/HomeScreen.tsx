import { useTheme } from "@shopify/restyle";
import React, { useCallback, useState } from "react";
import { StatusBar } from "react-native";
import { dummyRegions } from "../assets/dummy";
import { Box, HomeHeader, PlacesCarousel, RegionsCarousel } from "../components";
import { ITheme } from "../theme";

export const HomeScreen = () => {
  const { colors } = useTheme<ITheme>();
  const [regions, setRegions] = useState<any>([...dummyRegions]);
  const [places, setPlaces] = useState<any>([...dummyRegions[1].places]);

  const onRegionChange = useCallback((index) => {
    setPlaces([...dummyRegions[index].places]);
  }, []);

  return (
    <Box flex={1} bg={"bgPrimary"}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bgPrimary} />
      <HomeHeader />
      <RegionsCarousel regions={regions} onRegionChange={onRegionChange} />
      <PlacesCarousel places={places} />
    </Box>
  );
};
