import React, { useState } from 'react';
import { Alert, TextInput, View, StyleSheet ,Text,TouchableOpacity,Image} from 'react-native';
import FormButton from '../Component/FormButton';
import FormInput from '../Component/FormInput';
import SocialButton from '../Component/SocialButton';
import firebase from '../db/firebase';
import Home from '../Screens/Home';


const Login = ({navigation}) => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  function onLog(email,password){
    //viet ham vo day
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then((res) => {
      console.log(res.user)
        if(res.user == true)
      this.props.navigation.navigate('')
    })
    .catch((error) => {
      console.log(error)
      // ..
    });      
  }
  return(
    <View style={styles.container}>
      <Image
        source = {require('../img/imgLogin.jpg')}
        style = {styles.logo}
      />
      <Text style={styles.text}>Manage Personal Finance</Text>
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
      <FormButton
        buttonTitle="LogIn"
        onPress = {() => onLog(email,password)}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password ?</Text>
      </TouchableOpacity>

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
      onPress = {() =>navigation.navigate("SignUp")}>
        <Text style={styles.navButtonText}>Don't have an acount? Create here</Text>
      </TouchableOpacity>

    </View>
  );
 
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }
//   go = () => {
//            const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             if (reg.test(this.state.email) === true){
//                alert('valid');
//            }
//            else{
//                alert();
//            }
 
//   }
  
//   onLogin() {
//     const { username, password } = this.state;

//     Alert.alert('Credentials', `${username} + ${password}`);
//   }

//   render() {
    
//     return (
//       <View style={styles.container}>
//         <View >
//         <Image source={require('../img/imgLogin.jpg')}
//          style={{width: 300, height: 300}}/>
//         </View>
        
//       <Text style={styles.inputext}></Text>
//       <View>
//       <TextInput
//           value={this.state.username}
//           onChangeText={(username) => this.setState({ username })}
//           placeholder='Email'
//           style={styles.input}
//         />
//       </View>
//        <View>
//        <TextInput
//           value={this.state.password}
//           onChangeText={(password) => this.setState({ password })}
//           placeholder='Password'
//           secureTextEntry={true}
//           style={styles.input}
//         />
//       </View> 
        
//         <TouchableOpacity >
//         <Text style={styles.forgot_button}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
//         <Text style={styles.forgot_button}>Register</Text>
//         </TouchableOpacity>
 
//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>LOGIN</Text>
//       </TouchableOpacity>
//       </View>

//     );
//   }
 };
 export default Login;


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