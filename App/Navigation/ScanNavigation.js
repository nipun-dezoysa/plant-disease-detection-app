import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Scan from '../Screens/Scan';
import Details from '../Screens/Details';

const Stack = createStackNavigator();

const ScanNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    );
};

export default ScanNavigation;
