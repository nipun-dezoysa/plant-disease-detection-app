import React from "react";
import axios from "axios";
import { View, Text, ActivityIndicator} from "react-native";
export default function Home() {
  
  return (
    <View className="w-full h-full flex justify-center items-center">
      <Text>NIPUN AVISHKA</Text>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}
