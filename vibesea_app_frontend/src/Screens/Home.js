import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SmallCard from "../Components/SmallCard";
import { Divider } from "react-native-paper";

export default function Home() {
  const jobs = [
    {
      key: 1,
      title: "Applied",
      count: "17",
      bcolor: "white",
    },
    {
      key: 2,
      title: "Rejected",
      count: "13",
      bcolor: "white",
    },
    {
      key: 3,
      title: "Interviewed",
      count: "4",
      bcolor: "white",
    },
  ];
  const shadow = [
    {
      key: 1,
      title: "Posts",
      count: "17",
      bcolor: "white",
    },
    {
      key: 2,
      title: "Replies",
      count: "13",
      bcolor: "white",
    },
  ];
  const search = [
    {
      key: 1,
      title: "CS",
      bcolor: "#9EE8EC",
    },
    {
      key: 2,
      title: "California",
      bcolor: "#FBB3DE",
    },
  ];
  return (
    <View style={styles.home}>
      <Text style={styles.homehead}>Home</Text>
      <View style={styles.jobContainer}>
        <Text style={styles.jobhead}>Your Job Applications</Text>
        <View style={styles.jobcardContainer}>
          {jobs.map((d) => (
            <SmallCard
              key={d.key}
              title={d.title}
              count={d.count}
              bcolor={d.bcolor}
            />
          ))}
        </View>
        <Divider />
      </View>
      <View style={styles.jobContainer}>
        <Text style={styles.jobhead}>Your Shadow Sea Participation</Text>
        <View style={styles.jobcardContainer}>
          {shadow.map((d) => (
            <SmallCard
              key={d.key}
              title={d.title}
              count={d.count}
              bcolor={d.bcolor}
            />
          ))}
        </View>
        <Divider />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    paddingTop: 40,
    flex: 1,
    // borderWidth: 2,
    // borderColor: "black",
    width: "95%",
    alignItems: "center",
  },
  homehead: {
    fontSize: 20,
    fontWeight: "500",
  },
  jobContainer: {
    // borderWidth: 2,
    // borderColor: "black",
    width: "95%",
    height: "15%",
    marginTop: 20,
  },
  jobhead: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 20,
    marginBottom: 0,
  },
  jobcardContainer: {
    // borderWidth: 2,
    // borderColor: "black",
    width: "100%",
    height: "90%",
    alignItems: "center",
    // marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 0,
  },
});
