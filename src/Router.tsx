import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, StatusBar, Text, useColorScheme, View } from "react-native";
// needed for react router
import "react-native-gesture-handler";
import { LoginScreen, OnBoardingScreen } from "./screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tab1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tab1!</Text>
    </View>
  );
}

function Tab2() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tab2!</Text>
    </View>
  );
}

function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} options={{ headerShown: false }} />
      <Tab.Screen name="Tab2" component={Tab2} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const Router = () => {
  const isDarkMode = useColorScheme() === "light";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor="red" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={OnBoardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Tabs" component={TabNav} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Router;
