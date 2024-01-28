import React from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={{uri:'https://i.pinimg.com/564x/7b/da/3c/7bda3cc5018a5e8af756a1ce82048cf0.jpg'}} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.topHeading}>VibeSea</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email/Phone</Text>
          <TextInput style={styles.input} placeholder="Enter your email or phone" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("DrawerNavigator")} >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>New to VibeSea? Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // opacity:0.6
  },
  container: {
      paddingHorizontal: 20,
    },
    topHeading: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
        textAlign: "center",
        fontWeight:'bold',
        
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.5)",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerText: {
    color: "#fff",
    marginTop: 20,
    textAlign: "center",
    fontSize:15,
  },
});
