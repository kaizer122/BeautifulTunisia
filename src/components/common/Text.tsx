import { createText } from "@shopify/restyle";
import { Animated } from "react-native";
import { ITheme } from "../../theme";

export const Text = createText<ITheme>();
export const AnimatedText = Animated.createAnimatedComponent<typeof Text>(Text);
