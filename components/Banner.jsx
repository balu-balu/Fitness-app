import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRouter } from "expo-router";

export default function Banner() {
  const { item, type } = useLocalSearchParams();
  let bannerUrl = "";
  let header = "";
  const router = useRouter();

  switch (type) {
    case "back_exercises":
      bannerUrl = require("../assets/images/back-banner.png");
      header = "Back exercise";
      break;
    case "chest_exercises":
      bannerUrl = require("../assets/images/chest-banner.png");
      header = "Chest exercise";
      break;
    case "leg_exercises":
      bannerUrl = require("../assets/images/leg-banner.png");
      header = "Leg exercise";
      break;
    case "shoulder_exercises":
      bannerUrl = require("../assets/images/shoulder-banner.png");
      header = "Shoulder exercise";
      break;
    case "cardio_exercises":
      bannerUrl = require("../assets/images/cardio-banner.png");
      header = "Cardio exercise";
      break;
    case "abs_exercises":
      bannerUrl = require("../assets/images/abs-banner.png");
      header = "ABS exercise";
      break;
    default:
      bannerUrl = require("../assets/images/back-banner.png");
      header = "Back exercise";
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.backButton} // Adjusted styling for the TouchableOpacity
      >
        <AntDesign
          name="arrowleft"
          size={hp(5)}
          color="red"
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {header}
        </Text>
      </View>
      <Image
        source={bannerUrl}
        style={styles.bannerImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: hp(0),
    left: wp(2),
    padding: hp(1),
  },

  headerContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    marginRight: 10
  },
  headerText: {
    fontSize: 25,
    padding: 5,
    fontWeight: "bold",
    color: "white",
  },
  bannerImage: {
    borderRadius: 30,
    width: 370,
    height: 230,
    alignSelf: "center",
    borderColor: 'red',
    borderWidth: 5,
    marginTop: -5,
  },
});
