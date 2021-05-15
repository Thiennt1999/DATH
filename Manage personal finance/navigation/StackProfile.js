import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import MyTabs from '../Component/BottomTab';


const Stack = createStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={MyTabs}
        options={{header: () => null}}></Stack.Screen>
    </Stack.Navigator>
  );
}
