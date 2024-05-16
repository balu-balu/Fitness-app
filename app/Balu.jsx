import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function Balu() {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
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
              </View></View>
              </SafeAreaView>
              </GestureHandlerRootView>
    )
}