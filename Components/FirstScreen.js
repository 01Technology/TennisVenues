import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {Button} from 'react-native-elements';

import colors from '../Config/colors';

export default class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  loginClick = () =>{
      this.props.navigation.navigate("LoginScreen");
  }

  signupClick = () =>{
    this.props.navigation.navigate("SignUP");
  }

  guestVisitor = () => {
    this.props.navigation.navigate("HomeScreen");
  }

  render() {
    return (
      <View style = {styles.container}>
        <Image source = {require('../assets/logo.png')} style = {styles.img} />
        <View>
            <Button 
                containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                title="LOGIN" 
                buttonStyle={{ width:180, height:55, backgroundColor:colors.primary, borderRadius:50, }} 
                onPress={() => { this.loginClick(); }}
                titleStyle = {{fontSize:20}}
            />
            <Button 
                containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                title="SIGNUP" 
                buttonStyle={{ width:180, height:55, backgroundColor: colors.smokewhite, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                onPress={() => { this.signupClick(); }}
                titleStyle = {{fontSize:20, color:colors.primary}}
            />
        </View>
        <Text style = {{ color:colors.secondary, textDecorationLine:'underline', textDecorationColor:colors.secondary}} onPress = {()=>{this.guestVisitor();}}>CONTINUE AS A GUEST</Text>
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
