import React from "react";
import axios from "axios";
import { View, Text, TouchableOpacity } from "react-native";
export default function Home() {
  function send() {
    axios
      .get("http://192.168.174.45:4000/test", {})
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <View className="w-full h-full flex justify-center items-center">
      <Text>NIPUN AVISHKA</Text>
    </View>
  );
}
