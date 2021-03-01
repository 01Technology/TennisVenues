import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';
import {Input} from 'react-native-elements';

import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';
import ToogleImage from '../../Components/ToogleImage';

import { Entypo } from '@expo/vector-icons'; 


class notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  backChevronPressed = () => {
    this.props.navigation.navigate("Settings");
  }

  render() {
    return (
      <ScrollView>
        <TouchableOpacity style = {styles.backChevronContainer}>
          <Entypo name="chevron-thin-left" opacity={0.7} size={30} color="grey" onPress = {()=>{this.backChevronPressed()}}/>
        </TouchableOpacity>
        <View style = {styles.container}>
          <View>
              <Text type = "bold" style = {styles.settingsText}>NOTIFICATIONS SETTINGS</Text>
          </View>
          <View style = {{marginBottom:20}}>
              <Text type= "bold">PUSH NOTIFICATIONS</Text>
          </View>
          <View style = {styles.pushnotificationsContainer}>
            <TouchableOpacity style = {styles.settingsContent} activeOpacity= {0.7}>
                <Text style = {styles.pushnotificationsContent}>UPCOMING BOOKINGS REMINDER</Text>
                <ToogleImage />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.settingsContent} activeOpacity= {0.7}>
                <Text style = {styles.pushnotificationsContent}>EVENTS AND ANNOUNCEMENTS</Text>
                <ToogleImage />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.settingsContent} activeOpacity= {0.7}>
                <Text style = {styles.pushnotificationsContent}>OFFERS</Text>
                <ToogleImage />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.settingsContent} activeOpacity= {0.7}>
                <Text style = {styles.pushnotificationsContent}>APPLICATION UPDATES</Text>
                <ToogleImage />
            </TouchableOpacity>
          </View>
          <View style = {{marginBottom:20}}>
              <Text type= "bold">SMS NOTIFICATIONS</Text>
          </View>
          <View style = {styles.pushnotificationsContainer}>
            <TouchableOpacity style = {styles.settingsContent} activeOpacity= {0.7}>
                <Text style = {styles.pushnotificationsContent}>GET AN SMS REMINDER PRIOR TO MY UPCOMING BOOKINGS</Text>
                <ToogleImage />
            </TouchableOpacity>
          </View>
          <View style = {{marginBottom:20}}>
              <Text type= "bold">REMINDER SCHEDULE</Text>
          </View>
          <View style = {styles.pushnotificationsContainer}>
            <TouchableOpacity  activeOpacity= {0.7}>
                <Text style = {[styles.pushnotificationsContent, styles.reminder]}>HOW WOULD YOU LIKE TO BE REMINDED OF YOUR UPCOMING BOOKINGS ?</Text>
                <View style = {{flexDirection:'row', alignItems:'center'}}>
                  <Input 
                    placeholder = "01"
                    keyboardType = "number-pad"
                    containerStyle = {{width:'10%'}}
                  />
                  <Input 
                    placeholder = "DAYS"
                    keyboardType = "number-pad"
                    containerStyle = {{width:'40%'}}
                    rightIcon = {
                      <Entypo name="chevron-thin-down" opacity={0.7} size={10} color={colors.black} onPress = {()=>{this.backChevronPressed()}}/>
                    }
                  />
                </View>     
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default notifications;

const styles = StyleSheet.create({
  backChevronContainer:{
    top:40,
    marginBottom:100,
    left:20
  },
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft:35
    },
    commonFontSize:{
        fontSize:16
    },
    pushnotificationsContainer:{
      marginLeft:30,
      marginRight:20,
      alignSelf:'stretch',
      marginBottom:50
    },
    pushnotificationsContent:{
      fontSize:10,
      width:'60%'
    },
    rightChevron:{
      opacity:0.6,
    },
    reminder:{
      width:'40%',
      marginBottom:20
    },
    settingsText:{
        fontSize:24,
        marginBottom:50
    },
    settingsContent:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems: 'center',
        marginVertical:10,
        alignSelf:'stretch',
    }
    
})