import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Authentication
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
import Venues from '../navigations/Venues';
import WriteReview from '../navigations/WriteReview';
import EditProfile from '../navigations/EditProfile'

//Settings
import Settings from '../navigations/Settings/Settings';
import notifications from '../navigations/Settings/notifications';
import AboutTheApp from '../navigations/Settings/AboutTheApp';
import TermsofUse from '../navigations/Settings/TermsofUse';
import PrivacyPolicy from '../navigations/Settings/PrivacyPolicy';
import Feedbacks from '../navigations/Settings/Feedbacks';

//Components
import Logout from '../navigations/Settings/Logout';
import CardSlider from '../Components/CardSlider';
import CustomTopBarNavigator from '../Components/CustomTopBarNavigator';

//alerts
import PhoneCamera from '../navigations/Alerts/PhoneCamera';
import RatethisVenue from '../navigations/Alerts/RatethisVenue';
import ThankYouForRatings from '../navigations/Alerts/ThankYouForRatings';
import ThankYouForReview from '../navigations/Alerts/ThankYouForReview';
import ThankYouForFeedbacks from '../navigations/Alerts/ThankYouForFeedbacks';
import NotificationsReminder from '../navigations/Notifications/NotificationsReminder';

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
                <Stack.Screen name = "Venues" component = {Venues} />
                <Stack.Screen name = "WriteReview" component = {WriteReview} />
                <Stack.Screen name = "EditProfile" component = {EditProfile} />

                <Stack.Screen name = "Settings" component = {Settings} />
                <Stack.Screen name = "notifications" component = {notifications} />
                <Stack.Screen name = "AboutTheApp" component = {AboutTheApp} />
                <Stack.Screen name = "TermsofUse" component = {TermsofUse} />
                <Stack.Screen name = "PrivacyPolicy" component = {PrivacyPolicy} />
                <Stack.Screen name = "Feedbacks" component = {Feedbacks} />

                <Stack.Screen name = "Logout" component = {Logout} />
                <Stack.Screen name = "PhoneCamera" component = {PhoneCamera} />
                <Stack.Screen name = "RatethisVenue" component = {RatethisVenue} />
                <Stack.Screen name = "ThankYouForRatings" component = {ThankYouForRatings} />
                <Stack.Screen name = "ThankYouForReview" component = {ThankYouForReview} />
                <Stack.Screen name = "ThankYouForFeedbacks" component = {ThankYouForFeedbacks} />
                <Stack.Screen name = "NotificationsReminder" component = {NotificationsReminder} />

                <Stack.Screen name = "CardSlider" component = {CardSlider} />
                <Stack.Screen name = "CustomTopBarNavigator" component = {CustomTopBarNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}