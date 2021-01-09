import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { View, Image, StyleSheet } from 'react-native';
import {Divider} from 'react-native-elements';
import BackChevron from '../../Components/BackChevron';

import Text from '../../Config/CustomFont';

class NotificationsReminder extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <View style = {styles.container}>
        <BackChevron color = "primary" onPress = {() => {this.props.navigation.navigate("Home")}} style = {styles.BackChevron}/>
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
  BackChevron:{
    zIndex:999,
    position:'absolute',
    top:StatusBar.currentHeight,
    left:20
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