import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/Screens/LoginScreen";
import JobDetailScreen from "./src/Screens/JobDetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./src/Components/DrawerNavigator";
import RentalDetails from "./src/Screens/RentalDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="JobDetailScreen" component={JobDetailScreen} />
        <Stack.Screen name="RentalDetails" component={RentalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FA",
    alignItems: "center",
  },
});
