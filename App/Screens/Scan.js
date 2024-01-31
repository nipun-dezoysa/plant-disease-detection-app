import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";

export default function Scan({ navigation }) {
  const { width, height } = useWindowDimensions();
  const isFocused = useIsFocused();
  let cameraRef = useRef(null);
  const [hasCameraPermission, setCameraPermission] = useState();
  const [hasMediaPermission, setMediaPermission] = useState();
  const [photo, setPhoto] = useState(null);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [flashColor, setFlashColor] = useState("white");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaPermission = await MediaLibrary.requestPermissionsAsync();
      setCameraPermission(cameraPermission.status === "granted");
      setMediaPermission(mediaPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return (
      <View className="w-full h-full flex items-center justify-center">
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  } else if (!hasCameraPermission) {
    return <Text>denide</Text>;
  }

  const takePic = async () => {
    if(!loading){
      if (!photo) {
        if (cameraRef) {
          try {
            const data = await cameraRef.current.takePictureAsync();
            setPhoto(data.uri);
          } catch (e) {
            console.log(e);
          }
        }
      } else {
        setLoading(true);
        var data = new FormData();
        data.append("file", {
          uri: photo,
          name: "userProfile.jpg",
          type: "image/jpg",
        });
        axios
          .post("https://192.168.247.45:4000/predict", data, {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
            transformRequest: () => {
              return data;
            },
          })
          .then(function (response) {
            setLoading(false);
            console.log(response.data);
            if (
              response.data.result ==
              "Tomato___Spider_mites Two-spotted_spider_mite"
            ) {
              navigation.navigate("Details", {
                photo,
                res: "Tomato___Two_spotted_spider_mite",
              });
            } else {
              navigation.navigate("Details", {
                photo,
                res: response.data.result,
              });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <View className="flex flex-col gap-10 ">
      <View style={{ width, height: (width / 3) * 4 }} className="bg-black">
        {photo ? (
          <Image
            source={{ uri: photo }}
            style={{ width, height: (width / 3) * 4 }}
            resizeMethod="scale"
          />
        ) : (
          isFocused && (
            <Camera
              style={{ width, height: (width / 3) * 4 }}
              ref={cameraRef}
              flashMode={flash}
            />
          )
        )}
      </View>
      <View className="flex flex-row items-center justify-evenly relative">
        <TouchableOpacity
          onPress={pickImage}
          className="w-12 h-12 bg-gray-300 rounded-full bor flex justify-center items-center text-gray-600"
        >
          <Text className="text-white">
            <MaterialIcons name="photo" size={30} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takePic}
          className="w-20 h-20 bg-gray-300 rounded-full bor flex justify-center items-center text-gray-600"
        >
          {loading ? (
            <ActivityIndicator size="large" color="#FFFFFF" />
          ) : (
            <MaterialIcons
              name={photo ? "check" : "camera"}
              size={50}
              color="white"
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFlash(
              flash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off
            );
            setFlashColor(flashColor === "white" ? "yellow" : "white");
          }}
          className="w-12 h-12 bg-gray-300 rounded-full bor flex justify-center items-center text-gray-600"
        >
          <MaterialIcons name="flash-on" size={30} color={flashColor} />
        </TouchableOpacity>
        {photo && (
          <View className="absolute top-[-30px] w-full items-center">
            <TouchableOpacity
              onPress={() => {setPhoto(null);setLoading(false)}}
              className="w-8 h-8 bg-gray-300 rounded-full bor flex justify-center items-center text-gray-600 "
            >
              <MaterialIcons name="close" size={30} color="white" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
