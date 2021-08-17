import { ms, s } from "react-native-size-matters";

export function rms(px: number) {
  return Math.floor(ms(px));
}

export function rs(px: number) {
  return Math.floor(s(px));
}
