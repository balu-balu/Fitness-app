import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function LoginPage() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Text} className="font-bold ">
          Welcome
        </Text>
      </View>
      <View className=" items-center justify-center flex-1 ">
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"white"}
          className="font-light"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"white"}
          className="font-light"
        ></TextInput>
      </View>
      <View className=" flex-1" style={{ justifyContent: "center" }}>
        <View
          style={{
            justifyContent: "space-between",
            marginHorizontal: 50,
          }}
          className=" flex-row items-center justify-center"
        >
          <Text
            style={{ fontSize: hp(3), color: "white", marginRight: 10 }}
            className="font-white"
          >
            Sign in
          </Text>
          <TouchableOpacity
            onPress={() => router.push("Home")}
            style={{ marginTop: 20 }}
          >
            <AntDesign
              name="arrowright"
              size={10}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 50, marginTop: 40 }}>
          <TouchableOpacity onPress={() => router.push("RegisterPage")}>
            <Text className="font-light color-white">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <input placeholder="Email"></input> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(20),

    backgroundColor: "black",
  },
  input: {
    width: "75%",
    borderBottomColor: "white",
    paddingVertical: 20,
    borderWidth: 1,
    marginVertical: 40,
  },
  Text: {
    fontSize: hp(4),
    color: "white",
    marginLeft: 50,
  },
  icon: {
    backgroundColor: "red",
    borderRadius: 90,
    padding: 20,
    width: hp(7.4),
    fontSize: hp(3),
  },
});
