import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { ms, s } from "react-native-size-matters";
import Carousel from "react-native-snap-carousel";
import { Box, Text } from "../common";

interface Props {
  places: any[];
}
const { width, height } = Dimensions.get("window");

export const CAROUSEL_ITEM_WIDTH = width - s(80);
export const CAROUSEL_ITEM_HEIGHT = height * 0.6;

export const PlacesCarousel = ({ places }: Props) => {
  return (
    <Box flex={2.5} marginVertical="l">
      <Carousel
        data={places}
        renderItem={({ item }: any) => <CarouselItem item={item} />}
        sliderWidth={width}
        itemWidth={CAROUSEL_ITEM_WIDTH}
        firstItem={1}
      />
    </Box>
  );
};

const CarouselItem = ({ item }: any) => (
  <ImageBackground
    key={item.id}
    source={item.image}
    resizeMode="cover"
    style={styles.imageBg}
    imageStyle={styles.image}>
    <Box width="100%" height="95%" px="m" pt="m" borderRadius={ms(20)}>
      <Text variant="bodyBold" color="textDark" mb={"xs"} numberOfLines={1}>
        {item.name}
      </Text>
      <Text variant="body" numberOfLines={1} color="textDark">
        {item.description}
      </Text>
    </Box>
  </ImageBackground>
);

const styles = StyleSheet.create({
  imageBg: {
    width: CAROUSEL_ITEM_WIDTH,
    height: "95%",
    borderRadius: ms(20),
    overflow: "hidden",
  },
  image: {
    borderRadius: ms(20),
  },
});
