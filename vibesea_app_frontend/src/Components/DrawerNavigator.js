import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawerContent from "./CustomDrawerContent";
import Home from "../Screens/Home";
import RentalDetails from "../Screens/RentalDetails";
import ShadowSeaScreen from "../Screens/ShadowSeaScreen";
import FilterJobs from "../Screens/FilterJobs";
import SubleaseRental from "../Screens/SubleaseRental";
import ResumeReview from "../Screens/ResumeReview";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerIcon: () => <Ionicons name="menu" size={24} />,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Apply Jobs" component={FilterJobs} />
      <Drawer.Screen name="Shadow Sea" component={ShadowSeaScreen} />
      <Drawer.Screen name="Resume Review" component={ResumeReview} />
      <Drawer.Screen name="Sublease Rental Posts" component={SubleaseRental} />
      <Drawer.Screen name="Salary Vibe" component={Home} />
      <Drawer.Screen name="Career Profile" component={Home} />
      <Drawer.Screen name="Shadow Profile" component={Home} />
      <Drawer.Screen name="Settings & Privacy" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
