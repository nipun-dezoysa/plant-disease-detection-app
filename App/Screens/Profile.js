import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Profile() {
  return (
    <View className="flex items-center mt-5 px-10">
      <View className="flex items-center gap-1">
        <Image
          source={require("../../assets/avatar.png")}
          style={{ width: 100, height: 100 }}
        />
        <View>
          <Text className="text-lg">Admin</Text>
          <Text className="text-gray-400">@admin</Text>
        </View>
        <TouchableOpacity>
          <Text className="bg-[#1dc44a] p-2 rounded-lg text-white w-44 text-center">
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-10 border-t w-full border-gray-200">
        <TouchableOpacity className="flex flex-row items-center gap-4 mt-5">
          <AntDesign name="setting" size={30} color="black" />
          <Text className="text-lg">Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row items-center gap-4 mt-1">
          <AntDesign name="customerservice" size={30} color="black" />
          <Text className="text-lg">Support</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row items-center gap-4 mt-1">
          <AntDesign name="sharealt" size={30} color="black" />
          <Text className="text-lg">Share</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row items-center gap-4 mt-1">
          <AntDesign name="infocirlceo" size={30} color="black" />
          <Text className="text-lg">About us</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row items-center gap-4 mt-1">
          <AntDesign name="logout" size={30} color="black" />
          <Text className="text-lg">Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
