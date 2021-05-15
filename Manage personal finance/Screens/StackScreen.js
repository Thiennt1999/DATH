import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Profile from './Profile';
import Update from './Update';

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3399ff',
        },
      }}>
      <Stack.Screen
        name="Số Tiền Từ Trang "
        component={Home}
        options={{headerTintColor: 'white'}}
      />
    </Stack.Navigator>
  );
}
function UpdateStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3399ff',
        },
      }}>
      <Stack.Screen
        name="Update"
        component={Update}
        options={{headerTintColor: 'white'}}
      />
    </Stack.Navigator>
  );
}
function ProfileStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3399ff',
        },
      }}>
      <Stack.Screen
        name="Profile "
        component={Profile}
        options={{headerTintColor: 'white'}}
      />
    </Stack.Navigator>
  );
}
export {HomeStackScreen,ProfileStackScreen,UpdateStackScreen};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: '#333333',
  },
});
