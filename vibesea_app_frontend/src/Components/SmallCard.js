import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

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
    // borderWidth: 1,
    // borderColor: "black",
    marginHorizontal: 10,
    height: "60%",
    width: "27%",
    padding: 8,
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
    // borderWidth: 1,
    // borderColor: "black",
    height: "70%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 13,
    justifyContent: "center",
    alignItems: "center",
    // color: "white",
  },
  numtxt: {
    fontSize: 16,
    // color: "white",
  },
});
