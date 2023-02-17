import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import CustomDrawer from '../../components/CustomDrawer';

import Home from '../Home/index';
import ExploreMenu from '../../pages/Menu';
import CartPage from '../../pages/Cart';
import Icon from 'react-native-vector-icons/Entypo';
import Profile from '../Profile';
import Feedback from '../Feedback';
import TermsCondition from '../TermsCondition';
import PrivacyPolicy from '../PrivacyPolicy';
import Nutrition from '../Nutrition';
import MenuPage from '../MenuPage';
import DesertsPage from '../MenuCategory/Deserts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontFamily } from '../../assets/Util/CommonStyle';
import Deserts from '../MenuCategory/Deserts';
import DrinksPage from '../MenuCategory/Drinks';
import PizzaPage from '../MenuCategory/Pizzas';
import SaladsPage from '../MenuCategory/Salads';
import StarterPage from '../MenuCategory/Starter';


const {Navigator, Screen } = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


  export function BottomRoutes() {

    return (

   <View style={styles.container }>

      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
         headerShown:false,
         tabBarShowLabel: false,
         tabBarStyle:{
          position: 'absolute',
          bottom: 5,
          left:10,
          right: 10,
          elevation: 4,
          borderRadius: 15,
          height:70,
          backgroundColor: '#011c43',
          }
         }}
       >

      <Tab.Screen
           name="Profile" 
          component={Profile} 
          options={{
         tabBarShowLabel: false,
         tabBarIcon: ({ focused }) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
               <Image
                 source={require('../images/profileicone.png')}
                 resizeMode="contain"
               style={{
                width:30,
                height:30,
                }}
               />
            </View>
            ),
                }}
          />


          <Tab.Screen
           name="Home" 
           component={Home} 
           options={{
           tabBarIcon: ({ focused }) => (
             <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
               <Image
                 source={require('../images/iconhome.png')}
                 resizeMode="contain"
                style={{
                   width:30,
                   height:30,
                      }}
                 />
           </View>
          ),
              }}
           />
            

          <Tab.Screen
           name="Menu" 
           component={MenuPage}
         
           options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                <Image
                 source={require('../images/iconemenu.png')}
                 resizeMode="contain"
                 style={{
                   width:30,
                   height:30,
                    }}
               />
             </View>
            ),
                }}
          />

          <Tab.Screen
           name="Cart" 
           component={CartPage} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                <Image
                  source={require('../images/cart.png')}
                  resizeMode="contain"
                  style={{
                   width:30,
                   height:30,
                    }}
               />
             </View>
            ),
            }}
          />


       </Tab.Navigator>
   </View>
        );
            }


export function AppRoutes(){

  return(
   
    <NavigationContainer>
     
    <Drawer.Navigator drawerContent={ props => <CustomDrawer {...props}/>}
      initialRouteName="Home"
      screenOptions={{
         headerShown: false,
         drawerActiveBackgroundColor:'#fb8500',
         drawerActiveTintColor:'white',
         drawerInactiveTintColor:'white',
         drawerStyle: {
          backgroundColor: '#f8f9fa',
          width: 260,
          height:'95%',
          marginTop:10,
          paddingBottom:10,
          paddingTop:10,
          borderRadius:10
        },
        drawerLabelStyle:{
          marginLeft:50,
        fontFamily:'Roboto-Medium'
        },
        headerStyle:{
          backgroundColor:'#f8f9fa',
         },
       }}>

     <Drawer.Screen name="Home Page" component={BottomRoutes}
       options={{
       drawerIcon: (color) =>(
         <Ionicons name="home-outline" size={22} color={'white'} 
           style={{marginRight:-70}}/>
       )
     }}
     /> 

      <Drawer.Screen name="Explore Menu" component={MenuPage} 
        options={{
        drawerIcon: (color) =>(
          <Ionicons name="reader-outline" size={22} color={'white'} 
            style={{marginRight:-70}} />
          )
         }}
      />

      <Drawer.Screen name="Cart" component={CartPage}  
        options={{
          drawerIcon: (color) =>(
            <Ionicons name="cart-outline" size={22} color={'white'} 
            style={{marginRight:-70}} />
          )
         }}
      />
      
      <Drawer.Screen name="Profile" component={Profile}
        options={{
          drawerIcon: (color) =>(
            <Ionicons name="person-outline" size={22} color={'white'} 
            style={{marginRight:-70}} />
          )
         }}
      />
    
    <Drawer.Screen name="Feedback" component={Feedback}
        options={{
          drawerIcon: (color) =>(
            <Ionicons name="chatbox-ellipses-outline" size={22} color={'white'} 
            style={{marginRight:-70,}} />
          )
         }}
      />

<Drawer.Screen name="Terms & Condition" component={TermsCondition}/>

<Drawer.Screen name="Privacy Policy" component={PrivacyPolicy}/>

<Drawer.Screen name="Nutrition Information" component={Nutrition}/>

<Drawer.Screen
  name="Deserts"
  component={DesertsPage}
  options={{
    drawerItemStyle: { height: 0 }
  }}
/>

<Drawer.Screen
  name="Drinks"
  component={DrinksPage}
  options={{
    drawerItemStyle: { height: 0 }
  }}
/>

<Drawer.Screen
  name="Pizzas"
  component={PizzaPage}
  options={{
    drawerItemStyle: { height: 0 }
  }}
/>

<Drawer.Screen
  name="Salads"
  component={ SaladsPage}
  options={{
    drawerItemStyle: { height: 0 }
  }}
/>

<Drawer.Screen
  name="Starter"
  component={ StarterPage}
  options={{
    drawerItemStyle: { height: 0 }
  }}
/>
     </Drawer.Navigator>
   
   </NavigationContainer>
   
  
  );
}





      const styles = StyleSheet.create({
        container:{
            flex:1,
        }
      });

     export function Stackfunction() {
        return (
      
            <Stack.Navigator>
              <Stack.Screen
                name="menupage"
                component={MenuPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="menupage2" component={Profile} />
            </Stack.Navigator>
    
        );
      }
