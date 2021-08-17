import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
// needed for react router
import "react-native-gesture-handler";
import { HeartIcon, HomeIcon, SearchIcon, TabBarIcon } from "./components/navigation";
import { HomeScreen, LoginScreen, OnBoardingScreen } from "./screens";
import { ITheme } from "./theme";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tab2() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tab2!</Text>
    </View>
  );
}

function Tab3() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tab3!</Text>
    </View>
  );
}

function TabNav() {
  const { colors } = useTheme<ITheme>();
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: colors.white,
          borderTopColor: "transparent",
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} Icon={HomeIcon} />,
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} Icon={SearchIcon} />,
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Tab3}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} Icon={HeartIcon} />,
        }}
      />
    </Tab.Navigator>
  );
}

const Router = () => {
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
          <Stack.Screen name="Tabs" component={TabNav} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Router;
