import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from "react-native";

export default function RegistrationScreen() {
  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/7b/da/3c/7bda3cc5018a5e8af756a1ce82048cf0.jpg' }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.subHeading}>Make the most of your professional life</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email/Phone</Text>
          <TextInput style={styles.input} placeholder="Enter your email or phone" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput style={styles.input} placeholder="Confirm your password" secureTextEntry={true} />
        </View>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.signInText}>Already in VibeSea? Sign In</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
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
  registerButton: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
  },
});
