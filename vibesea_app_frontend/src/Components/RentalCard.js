import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ({ item }) {
  const navigation = useNavigation();

  return (
    <View style={styles.mainCard}>
      <View style={styles.card}>
        <View>
          <Text style={styles.cardTxt}>
            {" "}
            <AntDesign name="user" size={15} color="#015AAA" /> {item.name}
          </Text>
          <Text style={styles.cardTxt}>
            {" "}
            <AntDesign name="home" size={15} color="#015AAA" /> {item.type}
          </Text>
          <Text style={styles.cardTxt}>
            {" "}
            <AntDesign name="eyeo" size={15} color="#015AAA" /> {item.looking}
          </Text>
        </View>
        <View>
          <Text style={styles.cardTxt}>
            {" "}
            <FontAwesome name="money" size={15} color="#015AAA" /> {item.rate}{" "}
          </Text>
          <Text style={styles.cardTxt}>
            <EvilIcons name="location" size={15} color="#015AAA" />{" "}
            {item.location}{" "}
          </Text>
          <Text style={styles.cardTxt}>
            {" "}
            <Fontisto name="date" size={15} color="#015AAA" /> From {item.date}{" "}
          </Text>
        </View>
      </View>
      <Divider />
      <TouchableOpacity onPress={() => navigation.navigate("RentalDetails")} >
      <Text style={styles.txt}> View in detail </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "space-around",
    flexDirection: "row",
    paddingVertical: 15,
  },
  mainCard: {
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 10,
    marginTop: 15,
    paddingVertical: 10,
  },
  txt: {
    width: "100%",
    textAlign: "center",
    marginTop: 3,
    color: "#015AAA",
  },
  cardTxt: {
    marginTop: 4,
  },
});
