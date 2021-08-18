import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
// needed for react router
import "react-native-gesture-handler";
import { HeartIcon, HomeIcon, SearchIcon, TabBarIcon } from "../components/navigation";
import { HomeScreen } from "../screens";
import { UnderConstructionScreen } from "../screens/UnderConstructionScreen";
import { theme } from "../theme";
import { TabsParamList } from "../types";

const Tab = createBottomTabNavigator<TabsParamList>();

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
        component={UnderConstructionScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} Icon={SearchIcon} />,
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={UnderConstructionScreen}
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
