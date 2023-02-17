import React,{ useState } from 'react';
import { 
  View,
   Image,
   Text,
   StyleSheet,
   ScrollView,
   SectionList,
  TouchableOpacity,
   SafeAreaView,
  } from "react-native";

import styles from './styles'
import Icon from 'react-native-vector-icons/Entypo'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons/faPeopleCarryBox'
import { faShippingFast} from '@fortawesome/free-solid-svg-icons/faShippingFast'
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils'

import { FontFamily,Colors } from '../../assets/Util/CommonStyle';

import { MyDrawer } from '../Routes/AppRoutes';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HorizoltalScrool from '../../components/HorizontalScroll';
import HorizoltalScrool2 from '../../components/HorizontalScroll2';


 

export default function Home(){
  const navigation = useNavigation();

  return(

     <SafeAreaView style={{flex:1}}> 

      <View style={ styles.container }>
       
        <View style={styles.DrawerIcon}>


           <TouchableOpacity onPress={()=>navigation.openDrawer()}>  
             <FontAwesome name="bars" size={30} color={'#fb8500'}/>
           </TouchableOpacity>
       </View>
    
       <View style={ styles.iconsTop }> 
         <FontAwesomeIcon icon={ faShippingFast } 
           size={40} color={'#fb8500'}
           style={styles.deliveryIcon}/>

         <FontAwesomeIcon icon={ faPeopleCarryBox } 
          color={'#fb8500'}  size={40} 
          style={styles.deliveryIcon2}/>

        <FontAwesomeIcon icon={ faUtensils } 
          size={40} color={'#fb8500'}
          style={styles.deliveryIcon3}/>
      </View>

       <View style={ styles.TopBarBox }> 
          <Text style={ styles.TopBarText }>Delivery</Text>
          <Text style={ styles.TopBarText }>Self PickUp</Text>
          <Text style={ styles.TopBarText }>Dine-In</Text>
       </View>
  
   
        <ScrollView> 
          <HorizoltalScrool/>
   
         <TouchableOpacity> 
          <Text style={ styles.exploreMenuText }> Explore Menu </Text>
        </TouchableOpacity>
  
      <View style={ styles.ExploreMenuBox }>
        <TouchableOpacity onPress={ () => navigation.navigate('Menu')}>  
          <View style={ styles.exploreMenu1 }>
            <Image
              source={require('../images/pizzaa1.jpg')}
              style={ styles.exploreMenuImage }
           />
         </View>
      </TouchableOpacity>
    </View>
      
        
        <TouchableOpacity onPress={ () => navigation.navigate('Starter')} > 
           <Text style={ styles.TopDealText }> Best Starters  </Text>

             <View style={ styles.ExploreMenuBox }>
              <View style={ styles.exploreMenuDeals }>
               <Image
                 source={require('../images/starters1.png')}
                 style={ styles.exploreDealsImage }
              />
              <Image
                 source={require('../images/salad.png')}
                 style={ styles.exploreDealsImage  }
              />
             <Image
               source={require('../images/bread5.png')}
               style={ styles.exploreDealsImage  }
             /> 
        </View>


    <View style={ styles.exploreMenuDeals }>
       <Image
        source={require('../images/mozzarela2.jpg')}
        style={ styles.exploreDealsImage  }
       />
      <Image
        source={require('../images/tenders.jpg')}
        style={ styles.exploreDealsImage  }
       />
     <Image
        source={require('../images/cheeseballs1.png')}
        style={ styles.exploreDealsImage  }
       />
     </View>

   </View>
 </TouchableOpacity>
    
         <HorizoltalScrool2/> 

       <View> 
        <Text style={styles.BeatqueueText}> Beat the queue! </Text>
       </View>

       <View style={ styles.BeatqueueBox }>
          <View style={styles.BeatqueueInside}> 

             <Icon name="tablet" color="red" size={25} 
              style={{paddingRight:10,marginRight:5,marginLeft:5}}/>

             <Text style={styles.BeatNumber}>Step 1  -  </Text>
             <Text style={styles.beatText}>Order From The App</Text>
          </View>
         
          <View style={styles.BeatqueueInside}> 
             <Icon name="location" color="red" size={25}
              style={{paddingRight:10,marginRight:5}}/>

             <Text style={styles.BeatNumber}>Step 2  -  </Text>
             <Text style={styles.beatText}>Select Pick Up Store</Text>
          </View>

          <View style={styles.BeatqueueInside}> 
            <Icon name="bell" color="red" size={25} 
            style={{paddingRight:10,marginRight:5,marginLeft:10}}/>
            
             <Text style={styles.BeatNumber}>Step 3  -  </Text>
             <Text style={styles.beatText}>Notified When Ready</Text>
          </View>
      </View>

       
 
  
   
        </ScrollView>
    </View>
    </SafeAreaView>
  );
}
