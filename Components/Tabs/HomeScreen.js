import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import Icon from 'react-native-ionicons'
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'; 

//importing icons
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

const Tabs = createBottomTabNavigator();

import Home from './Home';
import MyBookings from './MyBookings';
import Plus from './Plus';
import Profile from './Profile';
import Promotions from './Promotions';

function screenOptions({route}){
  return{
      tabBarIcon:()=>{
          if (route.name === "Home"){
            return <SimpleLineIcons name="home" size={24} color="black" />
          }
          else if (route.name ==="MyBookings"){
            return  <Ionicons name="calendar-outline" size={24} color="black" />
          }
          else if (route.name ==="Plus"){
            return  <FontAwesome name="plus" size={38} color="#3aabdf" style = {{ top:8, flexDirection:'column',justifyContent:'center'}} />
          }
          else if (route.name ==="Promotions"){
            return <Entypo name="price-ribbon" size={28} color="#000" />
          }
          else if (route.name ==="Profile"){
            return <FontAwesome name="user-o" size={24} color="black" />
          }
      }
  };
}

export default function HomeScreen(){
  return(
    <Tabs.Navigator screenOptions = {screenOptions} initialRouteName = "Home" tabBarOptions={{ activeTintColor:'#3aabdf' }}>
      <Tabs.Screen name = "Home" component = {Home} ></Tabs.Screen>
      <Tabs.Screen name = "MyBookings" component = {MyBookings} ></Tabs.Screen>
      <Tabs.Screen name = "Plus" component = {Plus} options = {{ tabBarLabel:"" }} ></Tabs.Screen>
      <Tabs.Screen name = "Promotions" component = {Promotions} ></Tabs.Screen>
      <Tabs.Screen name = "Profile" component = {Profile} ></Tabs.Screen>
      
    </Tabs.Navigator>
    );
}