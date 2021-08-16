import { useTheme } from "@shopify/restyle";
import LottieView from "lottie-react-native";
import React from "react";
import { StatusBar } from "react-native";
import { ms, mvs, vs } from "react-native-size-matters";
import { BirdsAnim, TreeAnim } from "../assets/lottie";
import { Boats, Sun, TunsiaLogo } from "../assets/svg";
import { Box, Button, Text } from "../components";
import { ITheme } from "../theme";

export const LoginScreen = ({ navigation }: any) => {
  const theme = useTheme<ITheme>();
  const { bgSecondary } = theme.colors;
  return (
    <Box flex={1}>
      <StatusBar backgroundColor={bgSecondary} />
      <Box flex={1.75} bg="bgSecondary">
        <Box margin={"s"} flexDirection="row" width={"50%"}>
          <TunsiaLogo width={ms(60)} height={mvs(60)} />
          <Box marginLeft={"xs"}>
            <Text color="white" fontSize={ms(20)} lineHeight={ms(25)} textAlign="center">
              Beautiful
            </Text>
            <Text
              fontWeight="bold"
              fontSize={ms(34, 0.4)}
              color="white"
              lineHeight={ms(34)}
              textAlign="center">
              Tunisia
            </Text>
          </Box>
        </Box>
        <Box position="absolute" top={0} right={0} bottom={0} zIndex={2}>
          <LottieView source={TreeAnim as any} autoPlay loop speed={0.2} autoSize={true} />
        </Box>
        <Box position="absolute" top={"40%"} left={"10%"} zIndex={2}>
          <LottieView source={BirdsAnim as any} autoPlay speed={0.2} autoSize={true} loop={false} />
        </Box>
        <Box position="absolute" top={"40%"} right={0} width="100%" height="100%">
          <Sun height="100%" width="100%" preserveAspectRatio="xMinYMin slice" />
        </Box>
      </Box>

      <Box flex={1} bg="bgTertiary" paddingTop="m">
        <Box position="absolute" top={vs(-118)} left={0} right={0} bottom={0}>
          <Boats height="100%" width="100%" preserveAspectRatio="xMinYMin slice" />
        </Box>
        <Box flex={1} justifyContent="space-between" alignItems="center" marginTop="l">
          <Button label={"SignIn"} onPress={() => console.log("SIGN IN")} />
          <Button label={"SignUp"} onPress={() => console.log("SIGN IN")} bg={"bgSecondary"} />
          <Button label={"Skip"} onPress={() => navigation.navigate("Home")} bg={"transparent"} />
        </Box>
      </Box>
    </Box>
  );
};
