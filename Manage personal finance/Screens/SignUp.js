import React, { useState } from 'react';
import { Alert, TextInput, View, StyleSheet ,Text,TouchableOpacity,Image} from 'react-native';
import FormButton from '../Component/FormButton';
import FormInput from '../Component/FormInput';
import SocialButton from '../Component/SocialButton';
import firebase from '../db/firebase'

const Signup = ({navigation}) => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [confirmPassword,setConfirmPassword] = useState();
  function onSign(email,password){
    //viet ham vo day
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
        // Signed in 
        console.log(res.additionalUserInfo.isNewUser)
        if(res.additionalUserInfo.isNewUser == true){
          return navigation.navigate("Login")
        }
        
        // ...
      })
      .catch((error) => {
        console.log(error)
        // ..
      });
    
    }
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Create an acount</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="account"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="account-lock"
        secureTextEntry={true}
      />
      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
        placeholderText="ConfirmPassword"
        iconType="account-lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign Up"
        onPress = {() => onSign(email,password)} 
      />

      <View style={styles.text}>
        <Text> By registering, you confirm that you accept our Terms of serveice and Privacy Policy </Text>
      </View>

      <SocialButton
        buttonTitle = "Sign In with Facebook"
        btnType = "facebook"
        color = "#4867aa"
        onPress = {()=>{}}
        backgroundColor = "#e6eaf4" 
      />
       <SocialButton
        buttonTitle = "Sign In with Google"
        btnType = "google"
        color = "#de4d41"
        onPress = {()=>{}}
        backgroundColor = "#f5e7ea"
      />

      <TouchableOpacity style={styles.forgotButton}
      onPress = {() => navigation.navigate("Login")}
      >
        <Text style={styles.navButtonText}>Don't have an acount? Create here</Text>
      </TouchableOpacity>

    </View>
  );
 };
 export default Signup;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafd',
    padding:20,
  },
  logo:{
    height:150,
    width:150,
    resizeMode:'cover',
  },
  text:{
    fontFamily:'kufam-SemiBoldItalic',
    fontSize:28,
    marginBottom:10,
    color:'#051d5f',
  },
  navButton:{
    marginTop:15,
  },
  forgotButton:{
    marginVertical:35,
  },
  navButtonText:{
    fontSize:18,
    fontWeight:'500',
    color:'#2e64e5',
    fontFamily:'Lato-Regular',
  },
});