import React,{useState,useEffect, AsyncStorage} from 'react-native';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {GoogleSignin}from '@react-native-community/google-signin';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '896673415576-c36s8ssa7cek3emtgjaggniqlr9i5gd8.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Navigator
      name="SignUp"
      component={SignUp}
      options={({navigation})=> ({
        title:'',
        headerStyle:{
          backgroundColor:'#f9fafd',
          shadowColor:'#f9fafd',
          elevation:0,
        },
        headerLeft: () =>{
          <View>
            <MaterialCommunityIcons.Button
            name="arrow-left-thick"
            size="25"
            backgroundColor="#f9fafd"
            color="#333"
            onPress={()=> navigation.navigate('Login')}
            />
          </View>
        }
      })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;


