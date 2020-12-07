import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../Components/SplashScreen';
import FirstScreen from '../Components/FirstScreen';
import LoginScreen from '../Components/LoginScreen';

const Stack = createStackNavigator();

export default function screen(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName= "SplashScreen">
                <Stack.Screen name = "SplashScreen" component = {SplashScreen} options = {{headerShown:false }} />
                <Stack.Screen name = "FirstScreen" component = {FirstScreen} options = {{headerShown:false }} /> 
                <Stack.Screen name = "LoginScreen" component = {LoginScreen} options = {{headerShown:true, title: '' }} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}