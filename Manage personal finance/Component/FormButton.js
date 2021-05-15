import React from 'react'
import { TouchableOpacity,StyleSheet, Text } from 'react-native'
import {windowHeight,windowWidth} from '../until/Dimention';

export default function FormButton({buttonTitle, ...rest}) {
    return (
      <TouchableOpacity style={style.buttonContainer} {...rest}>
          <Text style={style.buttonText}>{buttonTitle}</Text>
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
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#ffffff',
        fontFamily:'Lato-Regular',
    }
})