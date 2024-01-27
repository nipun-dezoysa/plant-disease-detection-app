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
const dataset = {
  Tomato___Septoria_leaf_spot: {
    leaf: "Tomato",
    disease: "Bacterial spot",
    des: "In rainy and wet weather conditions, the disease can cause early defoliation and fruit spotting, which results in reduced yield and non-marketable fruit. On leaves, the initial symptom appears as small, round, water-soaked spots that gradually turn dark-brown or black and are surrounded by yellow halo.",
    sol: [
      {
        name: "Copper Hydroxide",
        about:
          "Products containing copper hydroxide are commonly used to control bacterial spot. Follow the manufacturer's instructions regarding application rates and timing.",
      },
      {
        name: "Copper Sulfate",
        about:
          "Copper sulfate is another common copper-based product. It can be applied as a spray, but excessive use can lead to phytotoxicity, so careful application is essential.",
      },
      {
        name: "Copper Oxychloride",
        about:
          "This is another copper-based compound effective against bacterial spot. It's important to use these products according to recommended guidelines, as excessive use can lead to copper buildup in the soil.",
      },
    ],
  },
};

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
          <Text className="text-lg">
            <Text className="font-medium">Leaf:</Text> {dataset[res].leaf}
          </Text>
          <Text className="text-lg">
            <Text className="font-medium">Disease:</Text> {dataset[res].disease}
          </Text>
          <View>
            <Text className="text-lg font-medium">Description :</Text>
            <Text className="">{dataset[res].des}</Text>
            <TouchableOpacity>
              <Text className="bg-green-200 p-2 w-24 flex items-center rounded-lg">
                Read more
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-lg font-medium">Solutions:</Text>
            {dataset[res].sol.map((item, index) => (
              <Text key={index}>
                <Text className="font-medium">{item.name}:</Text>
                <Text>{" " + item.about}</Text>
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
