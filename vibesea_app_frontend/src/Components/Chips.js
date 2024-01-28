import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";

export default function Chips({ txt }) {
  return (
    <Chip style={styles.chip}>
      {" "}
      <Text style={styles.txt}> {txt} </Text>{" "}
    </Chip>
  );
}

const styles = StyleSheet.create({
  chip: {
    marginHorizontal: 6,
    padding: 2,
    margin: 5,
    backgroundColor: "#015AAA",
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  txt: {
    fontSize: 14,
    padding: 2,
    borderRadius: 10,
    color: "white",
  },
});
