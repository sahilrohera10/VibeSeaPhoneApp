import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";

export default function SmallCard({ title, count, bcolor }) {
  return (
    <View style={[styles.smallcard, { backgroundColor: bcolor }]}>
      {count && (
        <View style={styles.num}>
          <Text style={styles.numtxt}> {count} </Text>
        </View>
      )}
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  smallcard: {
    marginHorizontal: 10,
    height: "90%",
    width: "30%",
    padding: 5,
    alignItems: "center",
    backgroundColor: "white",
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
  num: {
    height: "60%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#015AAA",
    padding: 5,
    borderRadius: 10,
    width: "90%",
    textAlign: "center",
    color: "white",
  },
  numtxt: {
    fontSize: 16,
  },
});
