import React, { useEffect,useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
export default function Home({ navigation }) {
 
  return (
    <View className="w-full h-full p-5">
      <Text className="text-2xl font-semibold">Welcome, Admin</Text>
      <View className="bg-green-600 p-5 rounded-2xl my-5">
        <Text className="text-white">This app can identify 15+ disease</Text>
        <View className="flex flex-row w-full justify-between mt-2">
          <Text className="text-white text-2xl font-semibold">Capture Now</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Scans")}
            className="bg-white flex items-center justify-center px-5 rounded-lg"
          >
            <Text className="text-green-600 text-lg">Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ActivityIndicator size="large" color="#1dc44a" />
    </View>
  );
}
