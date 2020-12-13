import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {Button, Input} from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 

import colors from '../Config/colors';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  backChevronPressed = () => {
    this.props.navigation.navigate("FirstScreen");
  }

  loginClick = () => {
    this.props.navigation.navigate("HomeScreen");
  }

  forgotPassword = () => {
  this.props.navigation.navigate("ForgotPassword");
  } 

  

  render() {
    return (
      <View style = {styles.container}>
        <Entypo name="chevron-left" size={36} color={colors.primary} style ={styles.backChevron} onPress = {()=>{this.backChevronPressed()}}/>
        <Image source = {require('../assets/logo.png')} style = {styles.img} />
        <Input
          placeholder='USERNAME / EMAIL'
          inputContainerStyle ={[styles.input, {marginTop:50}]}
        />
        <Input
          placeholder='PASSWORD'
          inputContainerStyle ={styles.input}
        />
        <Button 
            containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
            title="LOGIN" 
            buttonStyle={{marginTop:30, width:180, height:55, backgroundColor: colors.primary, borderRadius:50, }} 
            onPress={() => { this.loginClick(); }}
            titleStyle = {{fontSize:20}}
        />
        <Text style = {styles.text} onPress = {()=>{this.forgotPassword()}}>FORGOT PASSWORD?</Text>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  backChevron:{
    position:'absolute', 
    top:35,
    left:10
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  img:{
    alignSelf:'center',
    position:'absolute',
    top:100,
    width:290,
    height:80
  },
  
  input:{
    borderBottomColor:colors.primary, marginHorizontal:45, paddingLeft:10,
  },
  text:{ 
    marginTop:15, 
    alignSelf:'center', 
    color:colors.primary, textDecorationLine:'underline', textDecorationColor:colors.primary
  }
})
