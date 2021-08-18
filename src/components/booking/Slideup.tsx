import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Image, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import SlidingUpPanel from "rn-sliding-up-panel";
import { Box, Button, HeaderBar, Text } from "..";
import { SwipeUpAnim } from "../../assets/lottie";
import { mapStyle } from "../../assets/mapStyle";
import { rms } from "../../utils";

const { height } = Dimensions.get("window");

interface Props {
  place: any;
}

export const Slideup = ({ place }: Props) => {
  let panel = useRef(null).current;
  const [selectedHotel, setSelectedHotel] = useState<any | undefined>();
  const [allowDragging, setAllowDragging] = useState<boolean>(true);
  const draggedValue = new Animated.Value(rms(120));

  useEffect(() => {
    draggedValue.addListener(({ value }) => {
      value > height
        ? allowDragging
          ? setAllowDragging(false)
          : undefined
        : allowDragging
        ? undefined
        : setAllowDragging(true);
    });
    return () => {
      draggedValue.removeAllListeners();
    };
  });

  return (
    <SlidingUpPanel
      ref={(c) => (panel = c)}
      animatedValue={draggedValue}
      draggableRange={{ top: height + rms(120), bottom: rms(120) }}
      showBackdrop={false}
      allowDragging={allowDragging}
      snappingPoints={[height + rms(120)]}
      height={height + rms(120)}
      friction={0.7}>
      <Box flex={1}>
        <Box height={rms(120)} alignItems="center" justifyContent="flex-end">
          {allowDragging && (
            <LottieView
              source={SwipeUpAnim as any}
              autoPlay
              loop
              speed={0.7}
              style={styles.swipeUpAnim}
            />
          )}
        </Box>
        <Box flex={1} bg={"bgPrimary"} alignItems="center" justifyContent="center">
          <MapView
            style={styles.mapview}
            provider={PROVIDER_GOOGLE}
            initialRegion={place.mapInitialRegion}
            customMapStyle={mapStyle}>
            {place.hotels.map((hotel, index) => (
              <Marker
                key={index}
                coordinate={hotel.latlng}
                identifier={hotel.id}
                onPress={() =>
                  selectedHotel?.id !== hotel.id
                    ? setSelectedHotel(hotel)
                    : setSelectedHotel(undefined)
                }>
                <Image
                  source={
                    selectedHotel?.id !== hotel.id
                      ? require("../../assets/images/icons/bedOff.png")
                      : require("../../assets/images/icons/bedOn.png")
                  }
                  style={styles.markerImg}
                />
              </Marker>
            ))}
          </MapView>
          <HeaderBar
            title={selectedHotel?.name || ""}
            onPressBack={() => panel.hide()}
            position="absolute"
            top={rms(20)}
          />
          {selectedHotel && (
            <Box position="absolute" bottom={rms(30)} left={0} right={0} p={"m"}>
              <Text variant="header" color="white">
                Hotels in {place.name}
              </Text>
              <Box
                flexDirection="row"
                mt="m"
                borderRadius={15}
                bg="cardTransparent2"
                height={rms(140)}>
                <Image source={selectedHotel.image} resizeMode="cover" style={styles.hotelImg} />
                <Box flex={1} ml={"m"} p="xs" justifyContent="space-around">
                  <Box>
                    <Text variant="bodyBold" color="white">
                      {selectedHotel.name}
                    </Text>
                    <Box flexDirection="row">
                      {Array(Math.floor(selectedHotel.rate))
                        .fill("")
                        .map((_, i) => (
                          <Image
                            key={i}
                            source={require("../../assets/images/icons/star.png")}
                            style={{ width: rms(15), height: rms(15) }}
                          />
                        ))}
                    </Box>
                  </Box>
                  <Box flexDirection="row" mt="s">
                    <Button
                      label="Details"
                      width={rms(70)}
                      height={rms(30)}
                      borderRadius={rms(5)}
                      bg={"white"}
                      color="black"
                    />
                    <Box flex={1} alignItems="flex-end" justifyContent="center">
                      <Text variant="tiny" color="cardPrice">
                        {`From ${selectedHotel.price}$ / night`}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </SlidingUpPanel>
  );
};

const styles = StyleSheet.create({
  slideupAnim: { height: rms(80), marginTop: rms(15) },
  mapview: { width: "100%", height: "100%" },
  markerImg: { width: rms(50), height: rms(50) },
  hotelImg: {
    width: rms(150),
    height: "100%",
    borderRadius: 15,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
});
