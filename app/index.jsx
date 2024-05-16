import React from "react";
import { View, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn, FadeOut, FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  GestureHandlerRootView
} from "react-native-gesture-handler";

export default function index() {
  const router = useRouter();
  return (
    <GestureHandlerRootView>
      <View className="flex-1 flex justify-end">
        <StatusBar style="light" />
        <Image
          style={{ position: "absolute", height: "100%", width: "100%" }}
          source={require("../assets/images/welcome.png")}
        />

        <LinearGradient
          colors={["transparent", "#18181b"]}
          style={{ width: wp(100), height: hp(20) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        >
          <Animated.View
            entering={FadeInDown.delay(100).springify()}
            style={{ alignItems: "center" }}
          >
            <Text style={{ fontSize: hp(5), color: "white", fontWeight: "bold" }}>
              Best <Text style={{ color: "#C72222" }}>Workouts</Text>
            </Text>
            <Text style={{ fontSize: hp(5), color: "white", fontWeight: "bold" }}>
              For you
            </Text>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200).springify()}>
            <TouchableOpacity
              onPress={() => router.push("LoginPage")}
              style={{
                height: hp(7),
                width: wp(80),
                backgroundColor: "#C72222",
                opacity: 0.8,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: hp(3.5),
                marginHorizontal: wp(10),
              }}
            >
              <Text style={{ fontSize: hp(3), color: "white", fontWeight: "bold" }}>
                Get started
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
      </View>
    </GestureHandlerRootView>
  );
}
