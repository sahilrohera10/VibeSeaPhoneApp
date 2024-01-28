import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import React from "react";
import RentalCard from "../Components/RentalCard";

const data = [
  {
    id: 1,
    name: "Rahul",
    type: "1 BHK",
    looking: "Looking Sublease",
    rate: "$1200",
    location: "Roston UA",
    date: "12/2/23",
  },
  {
    id: 2,
    name: "Rahul",
    type: "1 BHK",
    looking: "Looking Sublease",
    rate: "$1200",
    location: "Roston UA",
    date: "12/2/23",
  },
  {
    id: 3,
    name: "Rahul",
    type: "1 BHK",
    looking: "Looking Sublease",
    rate: "$1200",
    location: "Roston UA",
    date: "12/2/23",
  },
  {
    id: 4,
    name: "Rahul",
    type: "1 BHK",
    looking: "Looking Sublease",
    rate: "$1200",
    location: "Roston UA",
    date: "12/2/23",
  },
  {
    id: 5,
    name: "Rahul",
    type: "1 BHK",
    looking: "Looking Sublease",
    rate: "$1200",
    location: "Roston UA",
    date: "12/2/23",
  },
  {
    id: 6,
    name: "Rahul",
    type: "1 BHK",
    looking: "Looking Sublease",
    rate: "$1200",
    location: "Roston UA",
    date: "12/2/23",
  },
  {
    id: 7,
    name: "Rahul",
    type: "1 BHK",
    looking: "Looking Sublease",
    rate: "$1200",
    location: "Roston UA",
    date: "12/2/23",
  },
];

export default function SubleaseRental() {
  return (
    <View style={styles.main}>
      <Pressable style={styles.button}>
        <Text style={styles.text}> Make a post </Text>
      </Pressable>
      <View style={styles.listContain}>
        <FlatList
          data={data}
          renderItem={({ item }) => <RentalCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "95%",
    margin: "auto",
    marginHorizontal: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#015AAA",
    marginTop: 20,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  listContain: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
