import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageSlider from "../components/imageSlider";
import BodyParts from "../components/BodyParts";
export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5 " edges={["top"]}>
      <StatusBar style="dark" />

      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            Ready To
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/kk.png")}
            style={{ heigth: hp(6), width: hp(6) }}
            className="rounded-full"
          />
          <View
            style={{
              backgroundColor: "#eee",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              height: hp(5.5),
              width: hp(5.5),
            }}
            className="border-[3px] border-neutral-300"
          >
            <Ionicons name="notifications" size={30} color="gray" />
          </View>
        </View>
      </View>

      <View>
        <ImageSlider />
      </View>
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}
