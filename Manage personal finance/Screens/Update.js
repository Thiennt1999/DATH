import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DBThuNhap from '../db/DBThuNhap';
import DBChiTieu from '../db/DBChiTieu';
// import UpdateSpend from '../Screens/UpdateSpend';
// import UpdateIncome from '../Screens/UpdateIncome';


const Tab = createMaterialTopTabNavigator();

export default function Update() {
   //const [state, setState] = useState(0);
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0000ff',
        inactiveTintColor: 'gray',
        labelStyle: {fontWeight: 'bold'},
        showLabel: true,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: ' Update Income'
        }}
        name="Thu Nhập"component={DBThuNhap}
        ></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarLabel: 'Update Spend',
        }}
        name="Chi Tiêu" component={DBChiTieu}
      />
    </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    padding: 5,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'monospace',
  },
  container: {
    flex: 1,
  },
  tab: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#b2b2ff',
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#8c8cff',
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});