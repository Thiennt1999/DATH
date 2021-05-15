
// import React, { useState } from 'react';
// import { Alert, TextInput, View, StyleSheet ,Text,TouchableOpacity,Image} from 'react-native';
// import FormButton from '../Component/FormButton';
// import FormInput from '../Component/FormInput';
// import DBChiTieu from '../db/DBChiTieu';
// import DBThuNhap from '../db/DBThuNhap';

// const UpdateIncome = ({navigation}) => {
//   const [money,setMoney] = useState();
//   const [date,setDate] = useState();
//   const [content,setContent] = useState();
//   // function onLog(email,password){
//   //   //viet ham vo day
//   //   firebase
//   //   .auth()
//   //   .signInWithEmailAndPassword(email,password)
//   //   .then((res) => {
//   //     console.log(res.user)
//   //       if(res.user == true)
//   //     this.props.navigation.navigate('')
//   //   })
//   //   .catch((error) => {
//   //     console.log(error)
//   //     // ..
//   //   });      
//   // }
//   return(
//     <View style={styles.container}>
//       <Text style={styles.text}>Update Income </Text>
//       <FormInput
//         labelValue={money}
//         onChangeText={(userMoney) => setMoney(userMoney)}
//         placeholderText="Money"
//         iconType="cash"
//         autoCapitalize="none"
//         autoCorrect={false}
//       />
//       <FormInput
//         labelValue={date}
//         onChangeText={(userDate) => setDate(userDate)}
//         placeholderText="Date"
//         iconType="calendar"
//         autoCapitalize="none"
//         autoCorrect={false}
//       />
//       <FormInput
//         labelValue={content}
//         onChangeText={(userContent) => setContent(userContent)}
//         placeholderText="Content"
//         iconType="content-paste"
//         autoCapitalize="none"
//         autoCorrect={false}
//       />
//       <FormButton
//         buttonTitle="Update"
//         onPress = {() => DBThuNhap({
//             name:this.state.current
//           })}
//       />
//     </View>
//   );
//  };
//  export default UpdateIncome;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f9fafd',
//     padding:20,
//   },
//   logo:{
//     height:150,
//     width:150,
//     resizeMode:'cover',
//   },
//   text:{
//     fontFamily:'kufam-SemiBoldItalic',
//     fontSize:28,
//     marginBottom:10,
//     color:'#051d5f',
//   },
//   navButton:{
//     marginTop:15,
//   },
//   forgotButton:{
//     marginVertical:35,
//   },
//   navButtonText:{
//     fontSize:18,
//     fontWeight:'500',
//     color:'#2e64e5',
//     fontFamily:'Lato-Regular',
//   },
// });