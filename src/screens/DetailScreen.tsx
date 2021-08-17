import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { ms, mvs } from "react-native-size-matters";
import { Box, HeaderBar, Slideup, Text, TouchableOpacityBox } from "../components";
import { rms } from "../utils";

export const DetailScreen = () => {
  const {
    params: { place },
  } = useRoute<any>();
  const navigation = useNavigation();

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <ImageBackground source={place.image} resizeMode="cover" style={styles.imageBg}>
        <HeaderBar title="" onPressBack={() => navigation.goBack()} mt="m" />
        <Box p={"m"} justifyContent="flex-end" pb={"xxl"} bg="cardTransparent">
          <Box flexDirection="row" alignItems="center" justifyContent="space-between">
            <Text variant="subheader" color="white">
              {place.name}
            </Text>
            <Box flexDirection="row" alignItems="center">
              <Text variant="bodyBold" mr={"s"} mt={"xs"} color="white">
                {place.rate}
              </Text>
              <Image source={require("../assets/images/icons/star.png")} style={styles.starIcon} />
            </Box>
          </Box>

          <Text variant="body" mt={"s"} color="white">
            {place.description}
          </Text>
          <Box alignItems="center" justifyContent="center" m="s">
            <TouchableOpacityBox
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              height={mvs(60)}
              width={ms(295)}
              borderRadius={20}
              bg="bgSecondaryDark">
              <Text variant="buttonLabel" mr={"s"}>
                Book a flight
              </Text>
              <Image
                source={require("../assets/images/icons/aeroplane.png")}
                style={styles.buttonIcon}
              />
            </TouchableOpacityBox>
          </Box>
        </Box>
      </ImageBackground>
      <Slideup place={place} />
    </Box>
  );
};

const styles = StyleSheet.create({
  imageBg: { width: "100%", height: "100%" },
  starIcon: { width: rms(20), height: rms(20) },
  buttonIcon: { width: rms(25), height: rms(25), tintColor: "white" },
});
