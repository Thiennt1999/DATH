import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';

const Stack = createStackNavigator();
export default function StackLogin() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}
