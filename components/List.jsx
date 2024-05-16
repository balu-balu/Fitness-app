import React from "react";
import {StyleSheet, TouchableOpacity, FlatList, View, Text, Image} from "react-native";
import { back_exercises, chest_exercises, leg_exercises, shoulder_exercises, cardio_exercises, abs_exercises } from "../constants";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function List() {
    const { item, type } = useLocalSearchParams();
    const router = useRouter();
    let exercises = [];
    switch (type) {
        case "back_exercises":
            exercises = back_exercises;
            break;
        case "chest_exercises":
            exercises = chest_exercises;
            break;
        case "leg_exercises":
            exercises = leg_exercises;
            break;
        case "shoulder_exercises":
            exercises = shoulder_exercises;
            break;
        case "cardio_exercises":
            exercises = cardio_exercises;
            break;
        case "abs_exercises":
            exercises = abs_exercises;
            break;
        default:
            exercises = [];
    }

    console.log('list:', type);

    return (
        <View>
            <FlatList 
                contentContainerStyle={{ paddingBottom: 650}}
                data={exercises}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => router.push({ pathname: "/exerciseDetails", params: item })}
                    >
                        <View style={{ padding: 20, marginHorizontal: 5, flexDirection: "row" }}>
                            <View>
                                <Image
                                    source={item.imgUrl}
                                    style={{ borderRadius: 10, width: 100, height: 100 }}
                                />
                            </View>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.desc}>{item.repNum}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    name:{
        fontWeight:"bold",
        fontSize:20
    },
    desc:{

    }
  });