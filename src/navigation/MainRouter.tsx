import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
// needed for react router
import "react-native-gesture-handler";
import { AuthScreen, OnBoardingScreen } from "../screens";
import { DetailsScreen } from "../screens/DetailsScreen";
import { MainStackParamList } from "../types";
import { TabsRouter } from "./TabsRouter";

const Stack = createStackNavigator<MainStackParamList>();

export const MainRouter = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Onboarding"
            component={OnBoardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Tabs" component={TabsRouter} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
