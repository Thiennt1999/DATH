import React from 'react'
import { View, TextInput,StyleSheet } from 'react-native'
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { windowHeight, windowWidth } from '../until/Dimention';

export default function FormInput({iconType,labelValue,placeholderText,...rest }) {
    return (
     <View style = {styles.inputContainer} >
         <View style ={styles.iconStyle}>
            <MaterialCommunityIcons name={iconType} size={25} color="#666"/>
         </View>
         <TextInput 
            value ={labelValue}
            style={styles.input}
            numberOfLines={1}
            placeholder ={placeholderText}
            placeholderTextColor="#666"
            {...rest}
        />
     </View>
    );
};
const styles = StyleSheet.create({
    input:{
        padding:10,
        flex:1,
        fontSize:16,
        fontFamily:'Lato-Regular',
        color:'#333',
        justifyContent:'center',
        alignItems:'center',
    },
    inputField:{
        padding:10,
        marginTop:5,
        marginBottom:10,
        width:windowWidth/1.5,
        height:windowHeight/15,
        fontSize:16,
        borderRadius:8,
        borderWidth:1,
    },
    iconStyle:{
        padding:10,
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1,
        borderRightColor:'#ccc',
        width:50,
    },
    inputContainer:{
        marginTop:5,
        marginBottom:10,
        width:'100%',
        height:windowHeight/15,
        borderColor:'#ccc',
        borderRadius:3,
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff'
    }
})

