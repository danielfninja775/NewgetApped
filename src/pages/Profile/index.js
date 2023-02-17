import React from 'react';
import { View, Text,TextInput, TouchableOpacity, StyleSheet,Image, ImageBackground,SafeAreaView } from 'react-native';

export default function Profile() {

  
 return (


     <ImageBackground source={require('../images/background.png')}
       resizeMode="cover" style={styles.image}>

      <View style={StyleSheet.container}>
  
        <Image
         source={require('../images/logo.jpg')}
         style={{width:380, height:355, alignSelf:'center',marginTop:-20}}
        />
  
      <TextInput
        style={styles.inputUserName}
        placeholder="Type your username"
        placeholderTextColor="white"
          />

     <TextInput
      style={styles.inputPassword}
      placeholder="Type your password"
      placeholderTextColor="white"
          />

       <TouchableOpacity>  
          <Text style={styles.Login}> Sign In </Text>
       </TouchableOpacity>
  
        <TouchableOpacity>
          <Text style={styles.newAccount} > Create New Account!</Text>
        </TouchableOpacity>
  
    
   </View>
  </ImageBackground>

  );
}

const styles  = StyleSheet.create({

  container:{
    flex:1,
  },
    image:{
     flex:1
  },
    inputUserName:{
     marginTop:20,
    borderWidth:1,
    borderColor:'white',
    borderRadius:5,
    width:300,
    alignSelf:'center'
  },
    inputPassword:{
      marginTop:10,
      borderWidth:1,
      borderColor:'white',
      borderRadius:5,
      width:300,
      alignSelf:'center'
    },
    Login:{
      fontSize:20,
      textAlign:'center',
      fontWeight:'bold',
      marginTop:20,
      borderColor:'white',
      borderRadius:15,
      width:120,
      alignSelf:'center',
      backgroundColor:'white',
      color:'#011c43',
      padding:5
    },
    newAccount:{
      marginTop:20,
     color:'white',
     alignSelf:'center'
    }


})