import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, ImageBackground, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { ms, s } from "react-native-size-matters";
import Carousel from "react-native-snap-carousel";
import { MainStackNav, Place, Places } from "../../types";
import { Box, Text } from "../common";

interface Props {
  places: Places;
}
const { width, height } = Dimensions.get("window");

export const CAROUSEL_ITEM_WIDTH = width - s(80);
export const CAROUSEL_ITEM_HEIGHT = height * 0.6;

export const PlacesCarousel = ({ places }: Props) => {
  return (
    <Box flex={2.5} marginVertical="l">
      <Carousel
        data={places}
        renderItem={({ item }) => <CarouselItem item={item} />}
        sliderWidth={width}
        itemWidth={CAROUSEL_ITEM_WIDTH}
        firstItem={1}
      />
    </Box>
  );
};

const CarouselItem = ({ item }: { item: Place }) => {
  const navigation = useNavigation<MainStackNav<"Tabs">>();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Details", { place: item })}>
      <ImageBackground
        key={item.id}
        source={item.image}
        resizeMode="cover"
        style={styles.imageBg}
        imageStyle={styles.image}>
        <Box
          width="100%"
          height="95%"
          px="m"
          pb="m"
          justifyContent="flex-end"
          borderRadius={ms(20)}>
          <Text variant="bodyBold" color="white" mb={"xs"} numberOfLines={1}>
            {item.name}
          </Text>
          <Text variant="body" numberOfLines={1} color="white">
            {item.description}
          </Text>
        </Box>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

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
