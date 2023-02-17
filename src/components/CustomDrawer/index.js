import React from 'react';
import { View,ImageBackground,Text,TouchableOpacity} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import CartPage from '../../pages/Cart';

const CustomDrawer = (props) => {

    const navigation = useNavigation();
    return(
        <View style={{flex:1}}>  

         <DrawerContentScrollView
               {...props}
              contentContainerStyle={{flex:1,backgroundColor:'#011c43'}}>
   
              <ImageBackground source={require('../../pages/images/logo4.jpeg')}
               style={{paddingTop:190}}/>

           <View style={{flex:1,paddingTop:15}}>
              <DrawerItemList {...props} />
           </View>
         </DrawerContentScrollView>
        </View>
  
    )
}

export default CustomDrawer