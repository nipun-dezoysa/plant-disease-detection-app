import React from "react";

import { View, Text, ActivityIndicator,Image } from "react-native";
export default function About() {
  return (
    <View className="w-full h-full flex justify-center items-center">
      <Text className="text-2xl font-semibold text-gray-400">Green Scan</Text>
      <Text className="font-semibold text-gray-400">Version 1.002</Text>
      <Image
        source={require("../../assets/adaptive-icon.png")}
        style={{ width: 200, height: 200 }}
      />

      <Text className="font-semibold text-gray-400">@2024 nA Projects</Text>
      <Text className="font-semibold text-gray-400">App developed & design by Nipun Avishka De Zoysa</Text>
    </View>
  );
}
