// import React, { useState, useRef, useCallback, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   PanResponder,
//   Animated,
// } from "react-native";

// const data = [
//   {
//     id: 1,
//     name: "Microsoft",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
//     role: "Software Engineer 2",
//     location: "San Jose, CA",
//   },
//   {
//     id: 2,
//     name: "Microsoft",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
//     role: "Software Engineer 2",
//     location: "San Jose, CA",
//   },
//   {
//     id: 3,
//     name: "Microsoft",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
//     role: "Software Engineer 2",
//     location: "San Jose, CA",
//   },
// ];

// const SwipeableCard = ({ item, onSwipe }) => {
//   const pan = useState(new Animated.ValueXY())[0];
//   const [swiped, setSwiped] = useState(false);

//   useEffect(() => {
//     console.log("hi");
//   }, [swiped]);

//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: (_, { dx, dy }) =>
//         Math.abs(dx) > 5 || Math.abs(dy) > 5,
//       onPanResponderMove: useCallback((_, { dx }) => {
//         pan.setValue({ x: dx, y: 0 });
//       }, []),
//       onPanResponderRelease: ({ nativeEvent }) => {
//         console.log("swiped");
//         const { dx } = nativeEvent;
//         const isSwipedRight = dx > 0;
//         const isSwiped = Math.abs(dx) > 100;

//         if (isSwiped) {
//           const swipeDistance = isSwipedRight ? 300 : -300;
//           Animated.timing(pan.x, {
//             toValue: swipeDistance,
//             duration: 1000, // Set a longer duration
//             useNativeDriver: true,
//           }).start(({ finished }) => {
//             console.log("Animation finished:", finished);
//             if (finished) {
//               console.log("Callback executed");
//               setSwiped(true);
//               onSwipe(isSwipedRight);
//             }
//           });
//         } else {
//           Animated.spring(pan.x, {
//             toValue: 0,
//             useNativeDriver: true,
//           }).start();
//         }
//       },
//     })
//   ).current;

//   const dynamicStyles = {
//     transform: [...pan.getTranslateTransform(), { scaleX: swiped ? 0 : 1 }],
//     backgroundColor: swiped ? (pan.x._value > 0 ? "green" : "red") : "#fff",
//   };

//   return (
//     <Animated.View
//       style={[styles.card, dynamicStyles]}
//       {...panResponder.panHandlers}
//     >
//       {/* Card content here */}
//       <Text>{item.name}</Text>
//     </Animated.View>
//   );
// };

// const FilterJobs = () => {
//   const [items, setItems] = useState(data);

//   const handleSwipe = (itemId, isRightSwipe) => {
//     console.log("swiped in func");
//     setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//     // Add your logic for handling the swipe action here
//     // For example, you can perform an action based on isRightSwipe
//   };
//   const renderSwipeableCard = ({ item }) => (
//     // console.log("in func swipe")
//     <SwipeableCard
//       item={item}
//       onSwipe={(isRightSwipe) => handleSwipe(item.id, isRightSwipe)}
//     />
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={items}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderSwipeableCard}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//   },
//   card: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
// });

// export default FilterJobs;

import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  PanResponder,
  Animated,
  Image,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Searchbar, Snackbar } from "react-native-paper";

const data = [
  {
    id: 1,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    role: "Software Engineer 2",
    location: "San Jose, CA",
    promoted: true,
  },
  {
    id: 2,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png",
    role: "Software Engineer 1",
    location: "San Jose, CA",
    promoted: true,
  },
  {
    id: 3,
    name: "Apple",
    logo: "https://logowik.com/content/uploads/images/apple-black8038.jpg",
    role: "Software Engineer 3",
    location: "San Jose, CA",
    promoted: true,
  },
  {
    id: 4,
    name: "Amazon",
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png",
    role: "Software Engineer 2",
    location: "San Jose, CA",
    promoted: false,
  },
  {
    id: 5,
    name: "Adobe",
    logo: "https://logowik.com/content/uploads/images/adobe-inc-a878.logowik.com.webp",
    role: "Software Engineer 2",
    location: "San Jose, CA",
    promoted: false,
  },
  {
    id: 6,
    name: "Flipkart",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png",
    role: "Software Engineer 2",
    location: "San Jose, CA",
    promoted: false,
  },
];

const SwipeableCard = ({ item, onSwipe }) => {
  const pan = useState(new Animated.ValueXY())[0];
  const [swiped, setSwiped] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, { dx, dy }) =>
        Math.abs(dx) > 5 || Math.abs(dy) > 5,
      onPanResponderMove: useCallback((_, { dx }) => {
        pan.setValue({ x: dx, y: 0 });
      }, []),
      onPanResponderRelease: (_, { dx }) => {
        const isSwipedRight = dx > 0;
        const isSwiped = Math.abs(dx) > 100; // Adjust threshold as needed

        if (isSwiped) {
          Animated.timing(pan, {
            toValue: isSwipedRight ? { x: 300 } : { x: -300 },
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            setSwiped(true);
            onSwipe(item.id, isSwipedRight);
          });
        } else {
          Animated.spring(pan, {
            toValue: { x: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const dynamicStyles = {
    transform: pan.getTranslateTransform(),
    backgroundColor: swiped
      ? pan.x._value > 0 // Check if swiped to the right
        ? "green"
        : "red"
      : "#fff",
  };

  return (
    <Animated.View
      style={[styles.card, dynamicStyles]}
      {...panResponder.panHandlers}
    >
      {/* Card content here */}
      <View style={{ width: "40%" }}>
        <Image
          source={{ uri: item.logo }}
          style={{ width: "50%", height: 50, marginBottom: 10 }}
          resizeMode="contain"
        />
        <Text style={{ fontWeight: "700", fontSize: 15 }}>{item.name}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 17, fontWeight: "700" }}> {item.role} </Text>
        <Text style={{ marginTop: 7 }}>
          {" "}
          <EvilIcons name="location" size={15} color="#015AAA" />{" "}
          {item.location}{" "}
        </Text>

        {item.promoted && (
          <Text
            style={{
              backgroundColor: "#015AAA",
              width: "47%",
              padding: 4,
              borderRadius: 10,
              color: "white",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Promoted
          </Text>
        )}
      </View>
    </Animated.View>
  );
};

const FilterJobs = () => {
  const [items, setItems] = useState(data);

  const renderSwipeableCard = ({ item }) => (
    <SwipeableCard item={item} onSwipe={handleSwipe} />
  );

  const handleSwipe = (itemId, isRightSwipe) => {
    setVisible(true);
    const swipeDirection = isRightSwipe ? "right" : "left";
    setD(swipeDirection);
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    // Add your logic for handling the swipe action here
    // For example, you can perform an action based on isRightSwipe
  };
  const [searchQuery, setSearchQuery] = React.useState("");

  const [visible, setVisible] = React.useState(false);
  const [d, setD] = React.useState();

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        // style={{ backgroundColor: "White" }}
        rippleColor="white"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSwipeableCard}
      />
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "close",
          onPress: () => {
            setVisible(false);
          },
        }}
      >
        {d === "left" ? "Not Interesed" : "Job Applied!!"}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    width: "95%",
    borderWidth: 2,
    borderColor: "black",
    marginHorizontal: 10,
  },
  card: {
    padding: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
    // borderWidth: 2,
    // borderColor: "black",
    width: "95%",
    marginHorizontal: 5,
    marginVertical: 10,
    elevation: 3,
    backgroundColor: "whites",
    flexDirection: "row",
    justifyContent: "space-between",

    // height: "50%",
  },
});

export default FilterJobs;
