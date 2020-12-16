import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Text from '../../Config/CustomFont';

export default class TouchAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  pinSecurity = () => {
    this.props.navigation.navigate("SecurityPin");
  }

  fingerPrintPressed = () => {
    this.props.navigation.navigate("HomeScreen");
  }

  render() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity onLongPress = {this.fingerPrintPressed}>
          <Image source = {require('../../assets/Icons/touchid-152.png')} style = {styles.img} />
        </TouchableOpacity>
        <View style = {{marginVertical:50}}>
            <Text onPress = {console.log('Use touch Id To authenticate')}>USE TOUCH ID TO AUTHENTICATE</Text>
        </View>
        <TouchableOpacity activeOpacity = {0.5} onPress = {()=>{this.pinSecurity();}} >
            <Text style = {{fontSize:12}}>USE PIN SECURITY</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    marginHorizontal:10,
    width:120,
    height:110
  }
})
