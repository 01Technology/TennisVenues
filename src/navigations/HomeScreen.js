import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, View, StyleSheet} from 'react-native';

import tabIcons from '../utils/urls';
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
                    style={styles.imageSize}
                    source={tabIcons.home}
                  />
                );
                else{
                  return (
                  <Image
                    style={styles.imageSize}
                    source={tabIcons.homeUnfocused}
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
                    style={styles.imageSize}
                    source={tabIcons.mybookings}
                  />
                );
                else{
                  return (
                  <Image
                    style={styles.imageSize}
                    source={tabIcons.mybookingsUnfocused}
                  />
                );
                }
            },
      }} />
      <Tabs.Screen name = "Plus" component = {Plus} options={{
            tabBarLabel: "",
            tabBarIcon: ({size,focused}) => {
                return (
                  <View style = {styles.plusContainer}>
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
                    style={styles.imageSize}
                    source={tabIcons.promotions}
                  />
                );
                else{
                  return (
                  <Image
                    style={styles.imageSize}
                    source={tabIcons.promotionsUnfocused}
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
                    style={styles.imageSize}
                    source={tabIcons.profile}
                  />
                );
                else{
                  return (
                  <Image
                    style={styles.imageSize}
                    source={tabIcons.profileUnfocused}
                  />
                );
                }
            }
      }} />
      
    </Tabs.Navigator>
    );
}

const styles = StyleSheet.create({
  imageSize:{
    width: 32, 
    height: 32
  },
  plusContainer:{
    marginTop:15, 
    justifyContent:'center', 
    alignItems:'center'
  }
})