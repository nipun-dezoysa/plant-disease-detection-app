import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  useWindowDimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import { dataset } from "../../assets/Data";

const Details = ({ route }) => {
  const { width, height } = useWindowDimensions();
  const { photo, res } = route.params;
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
      } else {
        let location = await Location.getCurrentPositionAsync({});

        axios
          .get(
            "https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=agro+shops+near+me&location=6.8213291%2C80.038998&radius=100000&type=shopt&key=AIzaSyBBd0d_AUbqVuVbFhzp_qez25koa2bbtm8"
          )
          .then(function (response) {
            setPlaces(response.data.results);
          })
          .catch(function (error) {
            console.log(error);
          });
        setLocation(location);
      }
    })();
  }, []);

  return (
    <SafeAreaView className="w-full h-full flex  px-5">
      <ScrollView>
        <View className="w-full flex flex-row justify-center gap-5">
          <Image
            className="rounded-lg"
            source={{ uri: photo }}
            style={{ width: width / 2.5, height: width / 2.5 }}
            resizeMethod="scale"
          />
        </View>

        <View className="flex gap-2 flex-col mb-5">
          <Text className="text-lg text-gray-700">
            <Text className="font-medium text-gray-700">Leaf:</Text>{" "}
            {dataset[res].leaf}
          </Text>
          <Text className="text-lg text-gray-700">
            <Text className="font-medium text-gray-700">Disease:</Text>{" "}
            {dataset[res].disease}
          </Text>
          <View>
            <Text className="text-lg font-medium text-gray-700">
              Description :
            </Text>
            <Text className="text-gray-700">{dataset[res].des}</Text>
            <TouchableOpacity>
              <Text className="bg-green-200 p-2 w-24 flex items-center rounded-lg">
                Read more
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-lg font-medium text-gray-700">
              Solutions:
            </Text>
            {dataset[res].sol.map((item, index) => (
              <Text key={index}>
                <Text className="font-medium text-gray-700">*{item.name}:</Text>
                <Text className="text-gray-500">{" " + item.about}</Text>
              </Text>
            ))}
          </View>
        </View>

        <MapView
          style={styles.map}
          showsUserLocation
          showsMyLocationButton
          initialRegion={{
            latitude: 6.8186037,
            longitude: 80.0382564,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
          }}
        >
          {places.map((place, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: place.geometry.location.lat,
                longitude: place.geometry.location.lng,
              }}
              title={place.name}
              description={place.vicinity}
            />
          ))}
        </MapView>
        <View className=" border-t my-5 border-gray-300">
          <Text className="text-lg font-medium text-gray-500">
            General guidelines:
          </Text>

          <Text>
            <Text className="font-medium text-gray-500">
              1) Read and Follow Instructions:
            </Text>
            <Text className="text-gray-400">
              {" "}
              Carefully read and follow the instructions provided by the product
              manufacturer. Adhere to recommended application rates, timing, and
              safety precautions.
            </Text>
          </Text>
          <Text>
            <Text className="font-medium text-gray-500">
              2) Rotate Fungicides:
            </Text>
            <Text className="text-gray-400">
              {" "}
              Rotate between different fungicides with different modes of action
              to help prevent the development of resistance.
            </Text>
          </Text>
          <Text>
            <Text className="font-medium text-gray-500">
              3) Integrated Pest Management (IPM):
            </Text>
            <Text className="text-gray-400">
              {" "}
              Utilize an integrated approach that includes cultural practices,
              resistant varieties, and biological control methods.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

export default Details;
