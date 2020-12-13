import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../Components/SplashScreen';
import FirstScreen from '../Components/FirstScreen';
import LoginScreen from '../Components/LoginScreen';
import HomeScreen from '../Components/Tabs/HomeScreen';
import ForgotPassword from '../Components/ForgotPassword';
import SignUP from '../Components/SignUP';
import OTPVerification from '../Components/OTPVerification';
import SecurityPin from '../Components/SecurityPin';
import TouchAuth from '../Components/TouchAuth';
import BookTheCourt from '../Components/BookTheCourt';
import pay from '../Components/pay';
import MakePayment from '../Components/MakePayment';
import BookingConfirmed from '../Components/BookingConfirmed';

const Stack = createStackNavigator();

export default function screen(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName= "SplashScreen">
                <Stack.Screen name = "SplashScreen" component = {SplashScreen} options = {{headerShown:false }} />
                <Stack.Screen name = "FirstScreen" component = {FirstScreen} options = {{headerShown:false }} /> 
                <Stack.Screen name = "LoginScreen" component = {LoginScreen} options = {{headerShown:false, title: '' }} /> 
                <Stack.Screen name = "HomeScreen" component = {HomeScreen} options = {{headerShown:false}} />
                <Stack.Screen name = "ForgotPassword" component = {ForgotPassword} options = {{headerShown:false}} />
                <Stack.Screen name = "SignUP" component = {SignUP} options = {{headerShown:false}} />
                <Stack.Screen name = "OTPVerification" component = {OTPVerification} options = {{headerShown:false}} />
                <Stack.Screen name = "SecurityPin" component = {SecurityPin} options = {{headerShown:false}} />
                <Stack.Screen name = "TouchAuth" component = {TouchAuth} options = {{headerShown:false}} />
                <Stack.Screen name = "BookTheCourt" component = {BookTheCourt} options = {{headerShown:false}} />
                <Stack.Screen name = "pay" component = {pay} options = {{headerShown:false}} />
                <Stack.Screen name = "MakePayment" component = {MakePayment} options = {{headerShown:false}} />
                <Stack.Screen name = "BookingConfirmed" component = {BookingConfirmed} options = {{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}