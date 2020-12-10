import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

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
          <Image source = {require('../assets/fingerprint.png')} style = {styles.img} />
        </TouchableOpacity>
        <View style = {{marginTop:60}}>
            <Text onPress = {()=>{this.guestVisitor();}}>USE TOUCH ID TO AUTHENTICATE</Text>
        </View>
        <TouchableOpacity style = {{marginTop:40}}>
            <Text onPress = {()=>{this.pinSecurity();}}>USE PIN SECURITY</Text>
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
    width:200,
    height:150
  }
})
