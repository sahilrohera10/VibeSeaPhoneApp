import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";

const ResumeReview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainCard}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Video Chat Based Resume Review</Text>
        </View>

        <View style={styles.card}>
          <Text style={{ width: "50%", fontSize: 15, marginTop: 20 }}>
            This is the Video Chat Based Resume Review service content.
          </Text>
          <Image
            style={styles.img}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/10311/10311826.png",
            }}
          />
        </View>
        <Button buttonColor="#015AAA" mode="contained">
          Buy $100
        </Button>
      </View>
      <View style={styles.mainCard}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Chat Based Resume Review</Text>
        </View>

        <View style={styles.card}>
          <Text style={{ width: "50%", fontSize: 15, marginTop: 20 }}>
            This is the chat Based Resume Review service content.
          </Text>
          <Image
            style={styles.img}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVx2nnLWAJ4ZqXsvEDK3CX5-BW9ZTKpknaQ&usqp=CAU",
            }}
          />
        </View>
        <Button buttonColor="#015AAA" mode="contained">
          Buy $50
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "2.5%", // Adjust as needed
  },
  header: {
    width: "95%",
    marginTop: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    width: "95%",
    backgroundColor: "#ffffff",
    // padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    height: "40%",
    flexDirection: "row",
    justifyContent: "space-around",
    // Add any other styling properties you need for the cards
  },
  img: {
    width: "25%",
    height: "65%",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  mainCard: {
    height: "45%",
    marginTop: -50,
  },
});

export default ResumeReview;
