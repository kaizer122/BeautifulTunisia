import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F55" }}>
      <Text>Home Screen</Text>

      <TouchableOpacity
        onPress={() => {
          console.log("hiiiiiiiiiiiiiiiiiiiiiii");
          // eslint-disable-next-line
          navigation.navigate("Home");
        }}
        style={{ padding: 20 }}>
        <Text>Go to tabs</Text>
      </TouchableOpacity>
    </View>
  );
}

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

const App = () => {
  const isDarkMode = useColorScheme() === "light";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor="red" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={TabNav} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
