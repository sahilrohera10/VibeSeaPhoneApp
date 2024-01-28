import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image, Animated } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Import the Apply icon from FontAwesome5

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 80;

const JobDetailScreen = () => {
  const scrollY = new Animated.Value(0);
  const [activeTab, setActiveTab] = useState("description");
  const [isReadMore, setIsReadMore] = useState(false);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
      >
        <View style={styles.overlay}>
          <View style={styles.contentContainer}>
            <View style={styles.topContainer}>
              <Image source={{ uri: 'https://www.pngmart.com/files/4/Microsoft-Logo-PNG-Photos.png' }} style={styles.logo} />
              <View style={styles.header}>
                <Text style={styles.companyName}>Microsoft</Text>
                <Text style={styles.jobRole}>Software Engineer</Text>
                <Text style={styles.salary}>Salary: $120k - $150k</Text>
                <View style={styles.chipsContainer}>
                  <View style={styles.chip}>
                    <Text>Full Time </Text>
                  </View>
                  <View style={styles.chip}>
                    <Text>Developer </Text>
                  </View>
                  <View style={styles.chip}>
                    <Text>Junior </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.line} />

            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text style={styles.sectionHeader}>Description</Text>
                <Text style={styles.sectionText}>
                  Join Microsoft's innovative team as a Software Engineer.{'\n'} In this role, you will contribute to cutting-edge projects and collaborate with talented professionals.
                </Text>
              </View>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text style={styles.sectionHeader}>Qualifications</Text>
                <Text style={styles.sectionText}>
                  - Bachelor's degree in Computer Science{'\n'}
                  - Relevant certifications{'\n'}
                  - Masters in Computer Engineering (preferred)
                </Text>
              </View>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text style={styles.sectionHeader}>Responsibilities</Text>
                <Text style={styles.sectionText} numberOfLines={isReadMore ? undefined : 3}>
                  - Develop and maintain software solutions{'\n'}
                  - Collaborate with cross-functional teams{'\n'}
                  - Participate in code reviews and design discussions{'\n'}
                  - Troubleshoot and debug applications
                </Text>
                {!isReadMore && (
                  <TouchableOpacity onPress={toggleReadMore}>
                    <Text style={styles.readMore}>Read More</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.applyButtonContainer}>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  overlay: {
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: windowHeight * 0.1, // 10% of window height for bottom padding
  },
  topContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginRight: 10,
  },
  header: {
    flex: 1,
    zIndex: 1,
  },
  companyName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  jobRole: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 1,
  },
  salary: {
    fontSize: 16,
    color: "grey",
  },
  chipsContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: 'center',
  },
  chip: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginRight: 5,
    alignSelf: 'center',
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  tab: {
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabText: {
    fontSize: 14,
    color: "#000",
  },
  activeTab: {
    borderBottomColor: "#4CAF50",
  },
  line: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    width: "80%",
    marginVertical: 20,
    alignSelf: 'center',
  },
  cardContainer: {
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3498db",
    marginTop: 5,
  },
  sectionText: {
    fontSize: 16,
    color: "#000",
  },
  readMore: {
    color: "#4CAF50",
    marginTop: 5,
  },
  applyButtonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  applyButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 8,
    width: windowWidth / 2 - 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 5,
  },
});

export default JobDetailScreen;
