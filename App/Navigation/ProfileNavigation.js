import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profile from "../Screens/Profile";
import About from "../Screens/About";
import Settings from "../Screens/Settings";
const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
