import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Profile({ navigation }) {
  return (
    <View className="flex items-center mt-5 px-5">
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
      <View className="mt-10 border-t w-full border-gray-200 flex pt-5">
        <TouchableOpacity className="flex flex-row p-3 bg-white rounded-lg justify-between ">
          <View className="flex flex-row gap-5">
            <AntDesign name="setting" size={30} color="black" />
            <Text className="text-lg">Settings</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row p-3 bg-white rounded-lg mt-2 justify-between">
          <View className="flex flex-row gap-5">
            <AntDesign name="customerservice" size={30} color="black" />
            <Text className="text-lg">Support</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row p-3 bg-white rounded-lg mt-2 justify-between">
          <View className="flex flex-row gap-5">
            <AntDesign name="sharealt" size={30} color="black" />
            <Text className="text-lg">Share</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("About")} className="flex flex-row p-3 bg-white rounded-lg mt-2 justify-between">
          <View className="flex flex-row gap-5">
            <AntDesign name="infocirlceo" size={30} color="black" />
            <Text className="text-lg">About us</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row p-3 bg-white rounded-lg mt-2 justify-between">
          <View className="flex flex-row gap-5">
            <AntDesign name="logout" size={30} color="black" />
            <Text className="text-lg">Log out</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
