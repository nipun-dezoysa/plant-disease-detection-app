import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useEffect, useState, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Scan() {
  let cameraRef = useRef(null);
  const [hasCameraPermission, setCameraPermission] = useState();
  const [hasMediaPermission, setMediaPermission] = useState();
  const [photo, setPhoto] = useState(null);
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaPermission = await MediaLibrary.requestPermissionsAsync();
      setCameraPermission(cameraPermission.status === "granted");
      setMediaPermission(mediaPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting</Text>;
  } else if (!hasCameraPermission) {
    return <Text>denide</Text>;
  }

  const takePic = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setPhoto(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View className="flex flex-col gap-10">
      {photo ? (
        <Image source={{ uri: photo }} className="w-full h-[500px]" />
      ) : (
        <Camera className="h-[500px]" ref={cameraRef}></Camera>
      )}
      <View className="flex flex-row items-center justify-evenly">
        <TouchableOpacity
          onPress={takePic}
          className="w-12 h-12 bg-gray-300 rounded-full bor flex justify-center items-center text-gray-600"
        >
          <MaterialIcons name="photo" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takePic}
          className="w-20 h-20 bg-gray-300 rounded-full bor flex justify-center items-center text-gray-600"
        >
          <MaterialIcons name="camera" size={50} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takePic}
          className="w-12 h-12 bg-gray-300 rounded-full bor flex justify-center items-center text-gray-600"
        >
          <MaterialIcons name="flash-on" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
