import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from expo

// import Home from "./Screens/Home";
import ShadowSeaScreen from "./src/Screens/ShadowSeaScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import Home from "./src/Screens/Home";
import JobDetailScreen from "./src/Screens/JobDetailScreen";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate("Home")}
        icon={() => <Ionicons name="home" size={24} />}
      />
      <DrawerItem
        label="Apply Jobs"
        onPress={() => navigation.navigate("Apply Jobs")}
        icon={() => <Ionicons name="briefcase" size={24} />}
      />
    </DrawerContentScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          // headerShown: false,
          drawerIcon: () => <Ionicons name="menu" size={24} />,
        }}
      >
        <Drawer.Screen name="Home" component={JobDetailScreen} />
        <Drawer.Screen name="Apply Jobs" component={ShadowSeaScreen} />
        <Drawer.Screen name="Shadow Sea" component={ShadowSeaScreen} />
        <Drawer.Screen name="Resume Reviews" component={Home} />
        <Drawer.Screen name="Sublease Rental Posts" component={Home} />
        <Drawer.Screen name="Salary Vibe" component={Home} />
        <Drawer.Screen name="Career Profile" component={Home} />
        <Drawer.Screen name="Shadow Profile" component={Home} />
        <Drawer.Screen name="Settings & Privacy" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
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
