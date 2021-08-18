import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Place } from "./regions";

export type TabsParamList = {
  Home: undefined;
  Tab2: undefined;
  Tab3: undefined;
};

export type MainStackParamList = {
  Auth: undefined;
  Onboarding: undefined;
  Tabs: undefined;
  Details: { place: Place };
};
export type MainStackNav<T extends keyof MainStackParamList> = StackNavigationProp<
  MainStackParamList,
  T
>;

export type MainStackNavProps<T extends keyof MainStackParamList> = {
  navigation: MainStackNav<T>;
  route: RouteProp<MainStackParamList, T>;
};
