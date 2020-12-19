import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Text from '../../Config/CustomFont';
import { Entypo } from '@expo/vector-icons'; 

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  gottoNotifications = () => {
    this.props.navigation.navigate("notifications");
  }

  gottoAboutTheApp = () => {
    this.props.navigation.navigate("AboutTheApp");
  }

  gottoTermsofUse = () => {
    this.props.navigation.navigate("TermsofUse");
  }

  gotoPrivacyPolicy = () => {
    this.props.navigation.navigate("PrivacyPolicy");
  }

  gotoFeedbacks = () => {
    this.props.navigation.navigate("Feedbacks");
  }

  Logout = () => {
      this.props.navigation.navigate("FirstScreen");
  }

  render() {
    return (
      <View style = {styles.container}>
        <View>
            <Text type = "bold" style = {styles.settingsText}>SETTINGS</Text>
        </View>
        <TouchableOpacity style = {styles.settingsContent} activeOpacity= {0.7} onPress = {()=>{this.gottoNotifications();}}>
            <Text style = {styles.commonFontSize} >NOTIFICATIONS</Text>
            <Entypo name="chevron-thin-right" size={30} style = {styles.rightChevron}/>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.settingsContent} activeOpacity= {0.7} onPress = {()=>{this.gottoAboutTheApp();}}>
            <Text style = {styles.commonFontSize} >ABOUT THIS APPLICATION</Text>
            <Entypo name="chevron-thin-right" size={30} style = {styles.rightChevron}/>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.settingsContent} activeOpacity= {0.7} onPress = {()=>{this.gottoTermsofUse();}}>
            <Text style = {styles.commonFontSize} >TERMS OF USE</Text>
            <Entypo name="chevron-thin-right" size={30} style = {styles.rightChevron}/>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.settingsContent} activeOpacity= {0.7} onPress = {()=>{this.gotoPrivacyPolicy();}}>
            <Text style = {styles.commonFontSize} >PRIVACY POLICY</Text>
            <Entypo name="chevron-thin-right" size={30} style = {styles.rightChevron}/>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.settingsContent} activeOpacity= {0.7} onPress = {()=>{this.gotoFeedbacks();}}>
            <Text style = {styles.commonFontSize} >FEEDBACKS</Text>
            <Entypo name="chevron-thin-right" size={30} style = {styles.rightChevron}/>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.settingsContent} activeOpacity= {0.7} onPress = {()=>{this.Logout();}}>
            <Text style = {styles.commonFontSize} >LOGOUT</Text>
            <Entypo name="chevron-thin-right" size={30} style = {styles.rightChevron}/>
        </TouchableOpacity>
        </View>
      
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal:25
    },
    commonFontSize:{
        fontSize:16
    },
    settingsText:{
        fontSize:32,
        marginBottom:40
    },
    rightChevron:{
        opacity:0.6,
    },
    settingsContent:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems: 'center',
        marginVertical:10,
        alignSelf:'stretch'
    }
    
})