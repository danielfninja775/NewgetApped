import 'react-native-gesture-handler';

import React from 'react';
import {View } from 'react-native';
import { StatusBar} from 'react-native';

import { AppRoutes, Stackfunction} from './src/pages/Routes/AppRoutes';
import { NavigationContainer } from '@react-navigation/native';

export default function App(){

return(

<View style={{ flex:1}}> 
      <StatusBar
      hidden={false}
      barStyle="default"
      animated={true}
      backgroundColor="#011c43"
      />
      
      <AppRoutes/>
     
      </View>
   
  );
}