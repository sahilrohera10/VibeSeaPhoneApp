import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons, Entypo, FontAwesome, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";

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
      <DrawerItem
        label="Shadow Sea"
        onPress={() => navigation.navigate("Shadow Sea")}
        icon={() => <Entypo name="message" size={24} color="black" />}
      />
      <DrawerItem
        label="Resume Review"
        onPress={() => navigation.navigate("Resume Review")}
        icon={() => <SimpleLineIcons name="docs" size={24} color="black" />}
      />
      <DrawerItem
        label="Sublease Rental"
        onPress={() => navigation.navigate("Sublease Rental Posts")}
        icon={() => <FontAwesome name="home" size={24} color="black" />}
      />
      <DrawerItem
        label="Salary Vibe"
        onPress={() => navigation.navigate("Salary Vibe")}
        icon={() => <FontAwesome5 name="money-check-alt" size={24} color="black" />}
      />
      <DrawerItem
        label="Career Profile"
        onPress={() => navigation.navigate("Career Profile")}
        icon={() => <Entypo name="user" size={24} color="black" />}
      />
      <DrawerItem
        label="Shadow Profile"
        onPress={() => navigation.navigate("Shadow Profile")}
        icon={() => <FontAwesome name="user-secret" size={24} color="black" />}
      />
      <DrawerItem
        label="Settings & Privacy"
        onPress={() => navigation.navigate("Settings & Privacy")}
        icon={() => <Ionicons name="settings" size={24} />}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
