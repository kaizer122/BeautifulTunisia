import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
// needed for react router
import "react-native-gesture-handler";
import { LoginScreen, OnBoardingScreen } from "../screens";
import { DetailScreen } from "../screens/DetailScreen";
import { TabsRouter } from "./TabsRouter";

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Onboarding"
            component={OnBoardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Tabs" component={TabsRouter} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={DetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainRouter;
