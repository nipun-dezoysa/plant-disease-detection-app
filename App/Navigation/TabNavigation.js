import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home"; 
import Profile from "../Screens/Profile";
import ScanNavigation from "./ScanNavigation";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1dc44a",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Scans"
        component={ScanNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View
                className={
                  focused
                    ? "p-3 rounded-full bg-[#1dc44a] bottom-2"
                    : "p-3 rounded-full bg-gray-400 bottom-2"
                }
              >
                <AntDesign name="camera" size={size} color="white" />
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
