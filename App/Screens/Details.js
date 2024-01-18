import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  useWindowDimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
const Details = ({ route }) => {
  const { width, height } = useWindowDimensions();
  const { photo } = route.params;
  return (
    <SafeAreaView className="w-full h-full flex items-center">
      <ScrollView>
        <View className="w-full flex flex-row justify-center m-1 gap-10">
          <Image
            className="rounded-lg"
            source={{ uri: photo }}
            style={{ width: width / 2.5, height: width / 2.5 }}
            resizeMethod="scale"
          />
          <Text className="text-xl font-semibold">Tomato</Text>
        </View>
        <View className="p-2 gap-2">
          <Text className="text-xl font-semibold">Tomato</Text>
          <Text className=" text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cum
            doloremque quibusdam ea! Animi sapiente reprehenderit suscipit dolor
            quas eveniet atque, fuga perspiciatis eligendi assumenda hic esse
            laborum vel porro!
          </Text>
          <Text className="font-semibold text-gray-500">Diseases (01)</Text>
          <View className=" bg-red-100 p-2 rounded-lg">
            <Text className="text-lg text-red-600">Disease</Text>
            <Text className=" text-red-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              cum doloremque quibusdam ea! Animi sapiente reprehenderit suscipit
              dolor quas eveniet atque, fuga perspiciatis eligendi assumenda hic
              esse laborum vel porro!
            </Text>
            <Text className=" text-red-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              cum doloremque quibusdam ea! Animi sapiente reprehenderit suscipit
              dolor quas eveniet atque, fuga perspiciatis eligendi assumenda hic
              esse laborum vel porro!
            </Text>
          </View>
          <Text className="font-semibold text-gray-500">Solutions (02)</Text>
          <View className=" bg-green-200 p-2 rounded-lg ">
            <Text className="text-lg text-green-700">Solution 1</Text>
            <Text className=" text-green-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              cum doloremque quibusdam ea! Animi sapiente reprehenderit suscipit
              dolor quas eveniet atque, fuga perspiciatis eligendi assumenda hic
              esse laborum vel porro!
            </Text>
          </View>
          <View className=" bg-green-200 p-2 rounded-lg">
            <Text className="text-lg text-green-700">Solution 2</Text>
            <Text className=" text-green-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              cum doloremque quibusdam ea! Animi sapiente reprehenderit suscipit
              dolor quas eveniet atque, fuga perspiciatis eligendi assumenda hic
              esse laborum vel porro!
            </Text>
            <Text className=" text-green-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              cum doloremque quibusdam ea! Animi sapiente reprehenderit suscipit
              dolor quas eveniet atque, fuga perspiciatis eligendi assumenda hic
              esse laborum vel porro!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
