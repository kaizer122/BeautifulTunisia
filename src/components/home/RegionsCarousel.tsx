import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Box } from "..";
import { Text } from "../common";

interface Props {
  regions: any[];
  onRegionChange: (index: number) => void;
}

const { width, height } = Dimensions.get("window");
export const REGION_ITEM_WIDTH = width / 3;
export const REGION_ITEM_HEIGHT = height * 0.15;

export const RegionsCarousel = ({ regions, onRegionChange }: Props) => {
  return (
    <Box flex={0.5} mt="m">
      <Carousel
        data={regions}
        renderItem={({ item }: any) => <RegionCarouselItem item={item} />}
        sliderWidth={width}
        itemWidth={REGION_ITEM_WIDTH}
        firstItem={1}
        onSnapToItem={(index) => onRegionChange(index)}
      />
    </Box>
  );
};

const RegionCarouselItem = ({ item }: { item: any }) => {
  return (
    <Box flex={1} key={item.id} alignItems="center" justifyContent="center">
      <Box flex={2}>
        <Image source={item.image} resizeMode="contain" style={styles.image} />
      </Box>
      <Box flex={1}>
        <Text variant="bodyBold" color="textDark" paddingTop={"s"}>
          {item.name}
        </Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: REGION_ITEM_WIDTH,
    height: "100%",
  },
});
