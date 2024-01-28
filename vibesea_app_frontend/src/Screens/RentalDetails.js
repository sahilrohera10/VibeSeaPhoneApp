import { View, Text, StyleSheet } from "react-native";
import React from "react";
// import { Card } from "react-native-paper";
import { Avatar, Card, IconButton } from "react-native-paper";
// import TabsView from "../Components/TabsView";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function RentalDetails() {
  return (
    <View style={styles.main}>
      <Card style={styles.img}>
        <Card.Cover
          source={{
            uri: "https://housing-images.n7net.in/012c1500/192e9de4f52a37406e6cd3862cba7cf2/v0/fs.jpeg",
          }}
        />
      </Card>
      <Card.Title
        title="Rahul"
        subtitle="Looking sublease"
        left={(props) => (
          <Avatar.Icon {...props} icon="home" backgroundColor="#015AAA" />
        )}
        right={(props) => (
          <View style={{ flexDirection: "row" }}>
            <IconButton
              {...props}
              style={{ marginRight: -5 }}
              icon="cash"
              onPress={() => {}}
            />
            <Text style={{ marginTop: 15, marginRight: 20 }}>$1200</Text>
          </View>
        )}
      />
      {/* <TabsView /> */}
      <View style={styles.cardMain}>
        <View style={styles.cardtxtContainer}>
          <Text style={styles.txt} variant="titleLarge">
            <AntDesign name="home" size={15} color="white" /> 1BHK{" "}
          </Text>
        </View>
        <View style={styles.cardtxtContainer}>
          <Text style={styles.txt} variant="titleLarge">
            <AntDesign name="eyeo" size={15} color="white" /> Sublease{" "}
          </Text>
        </View>
        <View style={styles.cardtxtContainer}>
          <Text style={styles.txt} variant="titleLarge">
            <EvilIcons name="location" size={15} color="white" /> Roston UA
          </Text>
        </View>
        <View style={styles.cardtxtContainer}>
          <Text style={styles.txt} variant="titleLarge">
            <Fontisto name="date" size={15} color="white" /> 12/2/23
          </Text>
        </View>
      </View>
      <Card
        style={{
          backgroundColor: "white",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Card.Content>
          <Text variant="titleLarge">About Me - </Text>
          <Text variant="bodyMedium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "95%",
    flex: 1,
    // borderWidth: 2,
    // borderColor: "black",
    marginHorizontal: 10,
  },
  img: {
    marginTop: 10,
  },
  cardtxtContainer: {
    // flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 15,
    // borderWidth: 2,
    // borderColor: "black",
    paddingHorizontal: 20,
    width: "40%",
    padding: 10,
    // justifyContent: "center",
    backgroundColor: "#015AAA",
    borderRadius: 20,

    // backgroundColor: "white",
  },
  cardMain: {
    // backgroundColor: "#F8F8FA",
    // elevation: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  txt: {
    color: "white",
  },
});
