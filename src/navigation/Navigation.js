// In App.js in a new project

import * as React from 'react';
import { 
    
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ThirdScreen from '../screens/ThirdScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
        />

        <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
        />

        <Stack.Screen 
          name="Third" 
          component={ThirdScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;