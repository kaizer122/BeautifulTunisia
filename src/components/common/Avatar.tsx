import React from "react";
import { Image, StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";
import { ITheme } from "../../theme";
import { Box } from "./Box";

export const Avatar = ({
  url = "https://pickaface.net/gallery/avatar/66961165_171026_2019_co0p.png",
  borderColor = "white",
}: {
  url?: string;
  borderColor?: keyof ITheme["colors"];
}) => {
  return (
    <Box borderRadius={ms(30)} borderColor={borderColor} borderWidth={2}>
      <Image
        source={{
          uri: url,
        }}
        resizeMode="contain"
        style={styles.avatar}
      />
    </Box>
  );
};
const styles = StyleSheet.create({
  avatar: { borderRadius: ms(30), aspectRatio: 1, width: ms(60) },
});
