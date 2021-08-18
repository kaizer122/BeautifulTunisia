import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// needed for react router
import "react-native-gesture-handler";
import { HeartIcon, HomeIcon, SearchIcon, TabBarIcon } from "../components/navigation";
import { HomeScreen } from "../screens";
import { theme } from "../theme";
import { TabsParamList } from "../types";

const Tab = createBottomTabNavigator<TabsParamList>();

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

export function TabsRouter() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: styles.tabbar,
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

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: theme.colors.white,
    borderTopColor: "transparent",
  },
});
