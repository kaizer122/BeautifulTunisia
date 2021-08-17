import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { MainRouter } from "./navigation";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <MainRouter />
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
