import React, {useState} from 'react';
import Home from './Screens/Home.js';
import Register from './Screens/SignUp';
import Login from './Screens/Login';
import KeyboardAvoidingView from './Screens/Update';
import MyTabs from './Component/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Screens/Profile';
import Update from './Screens/Update';
import AuthProvider from './navigation/AuthProvider';
import SignUp from './Screens/SignUp';
import AuthStack from './navigation/AuthStack';
import StackLogin from './Screens/StackLogin';
import DBChiTieu from './db/DBChiTieu.js';
import UpdateList from './Screens/UpdateList';
import HomeStackScreen from './Screens/StackScreen';
const App=()=>{
  return <MyTabs></MyTabs>;
}
export default App;
// import React,{Component} from 'react'
// import {
//   SafeAreaView,
//   FlatList,
//   Button
// } from 'react-native';
// import {ListItem,Divider} from 'react-native-elements';
// import {Add,getAdd} from './navigation/Add';
// import { TextInput } from 'react-native-gesture-handler';
// class DBChiTieu extends Component{
//   state={
//     listCT:[],
//     currentCTItem:null,
//   }
//   onCT = (ct)=>{
//     this.setState(prevState => ({
//         listCT: [...prevState.listCT,ct]
//       }));
//   }
//   onCtReceived=(listCT) =>{
//     console.log(listCT)
//     this.setState(prevState => ({
//       listCT:prevState.listCT =listCT 
//     }));
//   }
//   componentDidMount(){
//     getAdd(this.onCtReceived);
//   }
//   render(){
//     return(
//       <SafeAreaView>
//           <TextInput
//           placeholder=" Add Spending"
//           value={this.state.currentCTItem}
//           onChangeText = {(text) => this.setState(prevState => ({
//               currentCTItem: prevState.currentCTItem = text
//           }))
//         }  
//           />
//           <Button
//             title=" Update"
//             onPress={() => Add(
//                 {
//                     name: this.state.currentCTItem
//                 },
//                 this.onCT
//             )}
//           />
//         <FlatList
//           data={this.state.listCT}
//           ItemSeparatorComponent = {() => < Divider style ={{backgroundColor: black}} />}
//           keyExtractor={(item,index)=>index.toString()}
//           renderItem = {({item})=>{
//             console.log(item);
//               return(
//                 <ListItem
//                   title={item.name}
//                   onPress={() => {}}
//                   />
//                 );
//               }}
//               />
//       </SafeAreaView>
      
//     )
//   }
// }
// export default DBChiTieu();
