import { createBox } from "@shopify/restyle";
import { Animated } from "react-native";
import { ITheme } from "../../theme";

export const Box = createBox<ITheme>();
export const AnimatedBox = Animated.createAnimatedComponent<typeof Box>(Box);
