import { View, TouchableOpacity } from "react-native";
import React from "react";
import Banner from "../components/Banner";
import List from '../components/List';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useLocalSearchParams, useRouter } from "expo-router";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Exercises() {
  const router = useRouter();
  const { item, type } = useLocalSearchParams();
  console.log('got item: ', item, type);
  
  return (
    <View>
     
      <View>
        <Banner />
      </View>
      <View>
        <List />
      </View>
    </View>
  );
}
