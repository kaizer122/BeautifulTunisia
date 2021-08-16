import { useTheme } from "@shopify/restyle";
import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { Image, StatusBar, StyleSheet } from "react-native";
import { ms, vs } from "react-native-size-matters";
import { ArrowsRight } from "../assets/lottie";
import { OnBoardingBot, OnBoardingTop } from "../assets/svg";
import { Box, Text, TouchableOpacityBox } from "../components";
import { ITheme } from "../theme";

export const OnBoardingScreen = ({ navigation }: any) => {
  const theme = useTheme<ITheme>();
  const { bgSecondaryDark } = theme.colors;
  return (
    <Box flex={1}>
      <StatusBar backgroundColor={bgSecondaryDark} />

      <Box position="absolute" top={vs(-150)} left={0} right={0} width="100%" height="100%">
        <OnBoardingTop height={vs(650)} width={"100%"} preserveAspectRatio="xMinYMin slice" />
      </Box>
      <Box position="absolute" bottom={vs(-260)} left={0} right={0} width="100%" height="100%">
        <OnBoardingBot height={vs(555)} width={"100%"} preserveAspectRatio="xMinYMin slice" />
      </Box>
      <Box flex={1} marginHorizontal="xl">
        <Box
          height={vs(60)}
          justifyContent="space-between"
          alignItems="center"
          marginVertical="m"
          flexDirection="row">
          <Box>
            <Text variant="header">Kais</Text>
            <Text variant="headerBold">Ladjemi</Text>
          </Box>
          <Box borderRadius={ms(30)} borderColor="white" borderWidth={2}>
            <Image
              source={{
                uri: "https://pickaface.net/gallery/avatar/66961165_171026_2019_co0p.png",
              }}
              resizeMode="contain"
              style={styles.avatar}
            />
          </Box>
        </Box>
        <Box>
          <Text variant="body" pb={"s"}>
            Welcome to Beautiful Tunisia Kais.
          </Text>
          <Text variant="body">Here you can discover everything about this beautiful country!</Text>
        </Box>
        <Box
          flex={1}
          flexDirection="row"
          alignItems="flex-end"
          justifyContent="center"
          mb={"l"}
          ml={"xl"}>
          <TouchableOpacityBox
            justifyContent="center"
            alignItems="center"
            height={ms(34, 0.4)}
            onPress={() => navigation.navigate("Tabs")}>
            <Text variant="headerBold" color="white" pr={"s"}>
              Discover
            </Text>
          </TouchableOpacityBox>
          <AnimatedLottieView source={ArrowsRight as any} autoPlay loop style={styles.arrows} />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  avatar: { borderRadius: ms(30), aspectRatio: 1, width: ms(60) },
  arrows: {
    height: ms(34, 0.4),
  },
});
