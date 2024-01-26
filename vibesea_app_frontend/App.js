import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from expo

import HomeScreen from "./Screens/HomeScreen";
import ShadowSeaScreen from "./Screens/ShadowSeaScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

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
          headerShown: false,
          drawerIcon: () => <Ionicons name="menu" size={24} />,
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Apply Jobs" component={HomeScreen} />
        <Drawer.Screen name="Shadow Sea" component={ShadowSeaScreen} />
        <Drawer.Screen name="Resume Reviews" component={HomeScreen} />
        <Drawer.Screen name="Sublease Rental Posts" component={HomeScreen} />
        <Drawer.Screen name="Salary Vibe" component={HomeScreen} />
        <Drawer.Screen name="Career Profile" component={HomeScreen} />
        <Drawer.Screen name="Shadow Profile" component={HomeScreen} />
        <Drawer.Screen name="Settings & Privacy" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
