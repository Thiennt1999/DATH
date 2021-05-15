import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from '../Component/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import StackScreen from '../Screens/StackScreen';

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{header: () => null}}></Stack.Screen>
    </Stack.Navigator>
  );
}
