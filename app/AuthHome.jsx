// Import necessary modules
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageSlider from "../components/imageSlider";
import BodyParts from "../components/BodyParts";
import { sliderImages } from "../constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

// Define your component
export default function AuthHome() {
  const router = useRouter();
  const [theme, setTheme] = useState("light");

  // Function to toggle between themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={[styles.container, { backgroundColor: theme === "light" ? "white" : "black" }]} edges={["top"]}>
        <StatusBar style={theme === "light" ? "dark" : "light"} />

        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={[styles.headerTitle, { color: theme === "light" ? "#333" : "#eee" }]}>Ready To</Text>
            <Text style={[styles.headerSubtitle, { color: theme === "light" ? "#f43f5e" : "#6eeeff" }]}>WORKOUT</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => router.push("ProfilePage")}>
              <Image
                source={require("../assets/images/profile.png")}
                style={styles.profileImage}
              />
            </TouchableOpacity>
            {/* Theme change button */}
            <TouchableOpacity style={styles.themeToggleButton} onPress={toggleTheme}>
              <Ionicons name={theme === "light" ? "moon" : "sunny"} size={24} color={theme === "light" ? "black" : "white"} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sliderContainer}>
          <ImageSlider sliderImages={sliderImages} />
        </View>

        <Text
        
        style={{ fontSize: hp(3) , marginTop: -60, marginLeft: 20, color: theme === "light" ? "#f43f5e" : "#6eeeff" }}
        className="font-semibold text-neutral-700"
      >
        Exercises
      </Text>
        <View style={styles.bodyPartsContainer}>
          <BodyParts />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Default background color
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp(5),
    marginVertical: hp(2),
  },
  headerText: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  headerTitle: {
    fontSize: hp(4.5),
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: hp(4.5),
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    height: hp(6),
    width: hp(6),
    borderRadius: hp(3),
    marginRight: wp(2),
  },
  themeToggleButton: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    padding: 10,
    marginLeft: wp(2),
  },
  sliderContainer: {
    flex: 1,
  },
  bodyPartsContainer: {
    flex: 1,
  },
});
