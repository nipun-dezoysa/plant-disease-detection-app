import React, { useState,useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Settings() {
  const[server, setServer] = useState("");
  useEffect(() => {
    checkserver();
  }, []);
  async function checkserver() {
    const token = await AsyncStorage.getItem("server");
    if (!token) {
      setServer("no");
    } else {
      setServer(token);
    }
  }
  async function saveServer(){
    await AsyncStorage.setItem("server", server);
  }
  return (
    <View className="w-full h-full flex p-5">
      <Text>Server</Text>
      <TextInput
        className="w-full bg-white p-3 rounded-lg mt-2"
        onChangeText={setServer}
        value={server}
        placeholder="Server URL"
      />
      <TouchableOpacity onPress={saveServer} className="bg-[#1dc44a] p-3 rounded-lg mt-2">
        <Text className="text-white text-center">Save</Text>
      </TouchableOpacity>
    </View>
  );
}
