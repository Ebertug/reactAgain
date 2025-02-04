import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/screens/loginScreen';
import SignUpScreen from './src/screens/signUpScreen';
import ForgotPasswordScreen from './src/screens/forgotPasswordScreen';
import HomeScreen from './src/screens/homeScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }} >

        <Stack.Screen name="LoginScreen" component={LoginScreen}  />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}  />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}  />
        <Stack.Screen name="HomeScreen" component={HomeScreen}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;