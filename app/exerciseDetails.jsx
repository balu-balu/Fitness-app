import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function ExerciseDetails() {
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log('got item: ', item);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View>
        {/* Add any header or additional content here */}
        <Image
          source={item.imgUrl}
          style={{ borderRadius: 30, marginTop: 40, width: wp('100'), height: wp('100') }}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ position: 'absolute', top: hp(6), right: wp(2) }}
        >
          <AntDesign name="closecircle" size={hp(4.5)} color="#f43f5e" />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 4, marginTop: 3 }}>
          <Text style={{ fontSize: hp(3.5), fontWeight: 'bold' }}>{item.name}</Text>
        </View>
        <View style={{ marginHorizontal: 10, marginTop: 10 }}>
          <Text style={{ fontSize: hp(2), textAlign: 'justify' }}>{item.introduction}</Text>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
