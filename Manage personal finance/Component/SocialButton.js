import React from 'react'
import { TouchableOpacity,StyleSheet,View, Text } from 'react-native'
import {windowHeight,windowWidth} from '../until/Dimention';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';


export default function SocialButton({buttonTitle,btnType,color,backgroundColor, ...rest}) {

    let bgcolor = backgroundColor;
    return (
      <TouchableOpacity style={[style.buttonContainer,{backgroundColor:bgcolor}]} {...rest}>
          <View style={style.iconWrapper}>
                <MaterialCommunityIcons name={btnType} style={style.icon} size={22} color={color}/>
          </View>
          <View style={style.iconWrapper}>
          <Text style={[style.buttonText,{color:color}]}>{buttonTitle}</Text>
          </View>
      </TouchableOpacity>
    );
}
const style = StyleSheet.create({
    buttonContainer:{
        marginTop : 10,
        width:'100%',
        height:windowHeight/15,
        backgroundColor:'#2e64e5',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    iconWrapper:{
        width:30,
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        fontWeight:'bold'
    },
    btnTxtWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#ffffff',
        fontFamily:'Lato-Regular',
    }
})