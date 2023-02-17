import { View, Text,ScrollView,Image } from 'react-native'
import React from 'react'

export default function HorizoltalScrool2() {
  return (

    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >

      <Image source={require('../.././pages/images/flyer5.jpg')}
       style={{width:200, height:200,borderRadius:7,margin:5}}
      /> 

     <Image source={require('../.././pages/images/flyer6.jpg')}
      style={{width:200, height:200,borderRadius:7,margin:5}}
     /> 
    <Image source={require('../.././pages/images/flyer7.jpg')}
     style={{width:200, height:200,borderRadius:7,margin:5}}
    /> 

    <Image source={require('../.././pages/images/flyer8.jpg')}
     style={{width:200, height:200,borderRadius:7,margin:5}}
   /> 

     </ScrollView>
    </View>
  )
}