import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  settings = () => {
    this.props.navigation.navigate('Settings');
  }

  render() {
    return (
      <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress = {()=>{this.settings();}} activeOpacity = {0.7} style = {styles.settingContainer}>
          <Image source={require('../../assets/Icons/gear-242.png')} style = {styles.setting} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  settingContainer:{
    position:'absolute',
    top:30,
    left:15,
  },
  setting:{
    width:50,
    height:50
  }
})