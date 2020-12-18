import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../navigations/Authentication/SplashScreen';
import FirstScreen from '../navigations/Authentication/FirstScreen';
import LoginScreen from '../navigations/Authentication/LoginScreen';
import ForgotPassword from '../navigations/Authentication/ForgotPassword';
import SignUP from '../navigations/Authentication/SignUP';
import OTPVerification from '../navigations/Authentication/OTPVerification';
import SecurityPin from '../navigations/Authentication/SecurityPin';
import TouchAuth from '../navigations/Authentication/TouchAuth';

import HomeScreen from '../navigations/HomeScreen';
import BookTheCourt from '../navigations/BookTheCourt';
import pay from '../navigations/pay';
import MakePayment from '../navigations/MakePayment';
import BookingConfirmed from '../navigations/BookingConfirmed';

const Stack = createStackNavigator();

export default function screen(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName= "SplashScreen" screenOptions={{ headerShown: false}} >
                {
                    // authentication
                }
                <Stack.Screen name = "SplashScreen" component = {SplashScreen} />
                <Stack.Screen name = "FirstScreen" component = {FirstScreen} /> 
                <Stack.Screen name = "LoginScreen" component = {LoginScreen} /> 
                <Stack.Screen name = "ForgotPassword" component = {ForgotPassword} />
                <Stack.Screen name = "SignUP" component = {SignUP} />
                <Stack.Screen name = "OTPVerification" component = {OTPVerification} />
                <Stack.Screen name = "SecurityPin" component = {SecurityPin} />
                <Stack.Screen name = "TouchAuth" component = {TouchAuth} />
                
                {
                    //navigation
                }
                <Stack.Screen name = "HomeScreen" component = {HomeScreen} />
                <Stack.Screen name = "BookTheCourt" component = {BookTheCourt} />
                <Stack.Screen name = "pay" component = {pay}/>
                <Stack.Screen name = "MakePayment" component = {MakePayment}/>
                <Stack.Screen name = "BookingConfirmed" component = {BookingConfirmed} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}