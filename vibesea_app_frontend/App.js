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
import SubleaseRental from "./src/Screens/SubleaseRental";
import RentalDetails from "./src/Screens/RentalDetails";
import FilterJobs from "./src/Screens/FilterJobs";

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
        label="Details"
        onPress={() => navigation.navigate("Details")}
        icon={() => <Ionicons name="briefcase" size={24} />}
      />
      <DrawerItem
        label="Sublease Rental"
        onPress={() => navigation.navigate("Sublease Rental Posts")}
        icon={() => <Ionicons name="briefcase" size={24} />}
      />
      <DrawerItem
        label="Apply to jobs"
        onPress={() => navigation.navigate("Apply to jobs")}
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
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Details" component={RentalDetails} />
        <Drawer.Screen name="Shadow Sea" component={ShadowSeaScreen} />
        <Drawer.Screen name="Apply to jobs" component={FilterJobs} />
        <Drawer.Screen
          name="Sublease Rental Posts"
          component={SubleaseRental}
        />
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
