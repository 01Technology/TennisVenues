import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';

import colors from '../Config/colors';
import { Entypo } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

import Home from './Tabs/Home';
import MyBookings from './Tabs/MyBookings';
import Plus from './Tabs/Plus';
import Profile from './Tabs/Profile';
import Promotions from './Tabs/Promotions';

export default function HomeScreen(){
  return(
    <Tabs.Navigator initialRouteName = "Home" tabBarOptions={{ activeTintColor:colors.secondary }}>
      <Tabs.Screen name = "Home" component = {Home} options={{
            tabBarLabel: "HOME",
            tabBarIcon: ({size,focused}) => {
              if(focused)
                return (
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={require('../assets/Icons/home.png')}
                  />
                );
                else{
                  return (
                  <Image
                    style={{ width: size, height: size }}
                    source={require('../assets/Icons/home_uncofused.png')}
                  />
                );
                }
            }
      }} />
      <Tabs.Screen name = "MyBookings" component = {MyBookings} options={{
            tabBarLabel: "MY BOOKINGS",
            tabBarIcon: ({size,focused}) => {
              if(focused)
                return (
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={require('../assets/Icons/mybookings_selected.png')}
                  />
                );
                else{
                  return (
                  <Image
                    style={{ width: size, height: size }}
                    source={require('../assets/Icons/mybookings.png')}
                  />
                );
                }
            },
      }} />
      <Tabs.Screen name = "Plus" component = {Plus} options={{
            tabBarLabel: "",
            tabBarIcon: ({size,focused}) => {
                return (
                  <View style = {{marginTop:15, justifyContent:'center', alignItems:'center'}}>
                    <Entypo name="plus" size={46} color={colors.primary} />
                  </View>
                );
            }
      }} />
      <Tabs.Screen name = "Promotions" component = {Promotions} options={{
            tabBarLabel: "PROMOTIONS",
            tabBarIcon: ({size,focused}) => {
              if(focused)
                return (
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={require('../assets/Icons/PROMOTIONS-49.png')}
                  />
                );
                else{
                  return (
                  <Image
                    style={{ width: size, height: size }}
                    source={require('../assets/Icons/PROMOTIONS-50.png')}
                  />
                );
                }
            }
      }} />
      <Tabs.Screen name = "Profile" component = {Profile} options={{
            tabBarLabel: "PROFILE",
            tabBarIcon: ({size,focused}) => {
              if(focused)
                return (
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={require('../assets/Icons/NAVIGATION-342.png')}
                  />
                );
                else{
                  return (
                  <Image
                    style={{ width: size, height: size }}
                    source={require('../assets/Icons/profile.png')}
                  />
                );
                }
            }
      }} />
      
    </Tabs.Navigator>
    );
}