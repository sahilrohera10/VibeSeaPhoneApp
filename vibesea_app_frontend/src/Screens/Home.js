import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SmallCard from "../Components/SmallCard";
import { Divider } from "react-native-paper";
import Chips from "../Components/Chips";

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
  const jobsearches = [
    {
      key: 1,
      txt: "CS",
    },
    {
      key: 2,
      txt: "California",
    },
  ];
  const shadowsea = [
    {
      key: 1,
      txt: "Job search",
    },

    {
      key: 2,
      txt: "H/B",
    },
    {
      key: 3,
      txt: "Space",
    },
  ];

  return (
    <View style={styles.home}>
      <View style={styles.jobContainer}>
        <Text style={styles.jobhead}>Your job applications</Text>
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
        <Text style={styles.jobhead}>Your shadow sea participation</Text>
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
      <View style={styles.jobSearchContainer}>
        <Text style={styles.jobhead}>Your job search priorities</Text>
        <View style={styles.jobSearchCards}>
          {jobsearches.map((d) => (
            <Chips key={d.key} txt={d.txt} />
          ))}
        </View>
        <Divider />
      </View>
      <View style={styles.jobSearchContainer}>
        <Text style={styles.jobhead}>Your shadow sea interests</Text>
        <View style={styles.jobSearchCards}>
          {shadowsea.map((d) => (
            <Chips key={d.key} txt={d.txt} />
          ))}
        </View>
        <Divider />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    width: "95%",
    alignItems: "center",
  },
  homehead: {
    fontSize: 20,
    fontWeight: "500",
  },
  jobContainer: {
    width: "95%",
    height: "17%",
    marginTop: 20,
    marginBottom: 30,
  },
  jobhead: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 20,
    marginBottom: 0,
    color: "#015AAA",
  },
  jobcardContainer: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    marginBottom: 15,
  },
  jobSearchContainer: {
    width: "95%",
    height: "10%",
    marginTop: 20,
    marginBottom: 30,
  },
  jobSearchCards: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 15,
  },
});
