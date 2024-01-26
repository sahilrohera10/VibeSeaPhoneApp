import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FA",
    alignItems: "center",

    // justifyContent: "center",
  },
});
