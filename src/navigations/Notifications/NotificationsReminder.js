import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {Divider} from 'react-native-elements';

import Text from '../../Config/CustomFont';

class NotificationsReminder extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <View style = {styles.container}>
        <View>
          <Image source = {require('../../assets/Inputs/NotificationTop.png')}  />
        </View>
        <View style = {styles.contentContainer}>
            <Text type = "black" style = {styles.text}>BOOKING REMINDER!</Text>
            <Text style = {styles.text}>YOUR BOOKING AT QUEENSLAND TENNIS CENTER IS UPCOMING</Text>
            <Divider style = {styles.divider}/>
        </View>
        <View style = {styles.contentContainer}>
            <Text type = "black" style = {styles.text}>BOOKING REMINDER!</Text>
            <Text style = {styles.text}>YOUR BOOKING AT QUEENSLAND TENNIS CENTER IS UPCOMING</Text>
            <Divider style = {styles.divider}/>
        </View>
        <View style = {styles.contentContainer}>
            <Text type = "black" style = {styles.text}>BOOKING REMINDER!</Text>
            <Text style = {styles.text}>YOUR BOOKING AT QUEENSLAND TENNIS CENTER IS UPCOMING</Text>
            <Divider style = {styles.divider}/>
        </View>
      </View>
    );
  }
}

export default NotificationsReminder;

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'flex-start',
    marginRight:20
  },
  contentContainer:{
    marginHorizontal:20,
    marginVertical:10
  },
  divider:{
    height:1
  },
  text:{
    marginVertical:10
  }
})