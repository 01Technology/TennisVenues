import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class TouchAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  pinSecurity = () => {
    this.props.navigation.navigate("HomeScreen");
  }

  render() {
    return (
      <View style = {styles.container}>
        <Image source = {require('../assets/fingerprint.png')} style = {styles.img} />
        <View>
            <Text onPress = {()=>{this.guestVisitor();}}>USE TOUCH ID TO AUTHENTICATE</Text>
        </View>
        <TouchableOpacity>
            <Text onPress = {()=>{this.pinSecurity();}}>USE PIN SECURITY</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  img:{
    marginHorizontal:10,
    width:290,
    height:80
  }
})
