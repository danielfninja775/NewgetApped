import React  from 'react'
import { Text, View , TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

export default function CartPage() {
  const navigation = useNavigation();
    return (
      <View>
        <View style={{alignSelf:'flex-end', paddingRight:10}}>
       <TouchableOpacity onPress={()=>navigation.openDrawer()}>  
       <FontAwesome name="bars" size={30} color={'black'}/>
       </TouchableOpacity>
       </View>
        <Text> Cart </Text>
      </View>
    )
  }

