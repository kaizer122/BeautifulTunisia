import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { Box } from "../components";

interface Props {
  route: any;
}

export const DetailScreen = () => {
  const {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    params: { place },
  } = useRoute();
  return (
    <Box flex={1}>
      {/*    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore */}
      <Image
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        source={place.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};
