import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/screens/loginScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }} >

        <Stack.Screen name="LoginScreen" component={LoginScreen}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;