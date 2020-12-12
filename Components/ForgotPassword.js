import React, { Component } from 'react';
import { View, TextInput, Dimensions,  StyleSheet, Text } from 'react-native';
import {Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 

import colors from '../Config/colors';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  backChevronPressed = () => {
    this.props.navigation.navigate("FirstScreen");
  }

  sendEmailPressed = () => {
    //email validation
    this.props.navigation.navigate("SecurityPin");
  }

  forgotPassword = () => {
  this.props.navigation.navigate("ForgotPassword");
  } 

  Signup = () => {
    this.props.navigation.navigate("SignUP");
  }
  render() {
    return (
      <View style = {styles.container}>
        <Entypo name="chevron-left" size={36} color={colors.primary} style ={styles.backChevron} onPress = {()=>{this.backChevronPressed()}}/>
        <Text style = {styles.textQuestion} onPress = {()=>{this.forgotPassword()}}>FORGOT YOUR PASSWORD?</Text>
        <Text style = {styles.textToDo} onPress = {()=>{this.forgotPassword()}}>ENTER YOUR USERNAME OR EMAIL ADDRESS AND WE WILL SEND YOU A LINK TO RESET YOUR PASSWORD</Text>
        <View>
            <TextInput 
                placeholder = "USERNAME OR EMAIL" 
                onChangeText = {(val) => {this.setState({email: val})}} 
                style = { styles.input }
            />
        </View>
        <Button 
            containerStyle={{ marginTop:20, paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
            title="SEND EMAIL" 
            buttonStyle={{width:180,height:45, backgroundColor: colors.primary, borderRadius:50, }} 
            onPress={() => { this.sendEmailPressed() ; }}
            titleStyle = {{fontSize:16, fontWeight:'100'}}
        />
        <View style = {{marginTop:100}}>
            <Text style = {styles.text} onPress = {()=>{this.forgotPassword()}}>DON'T HAVE AN ACCOUNT? <Text style = {{fontWeight:'bold', color:colors.primary}} onPress = {()=>{this.Signup();}}>SIGN UP!</Text></Text>
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  backChevron:{
    position:'absolute', 
    top:35,
    left:10
  },
  textQuestion:{ 
    marginTop:15, 
    fontSize:18,
    alignSelf:'center', 
    color:colors.primary, 
    textDecorationLine:'underline', 
    textDecorationColor:colors.primary,
    fontWeight:"bold"
  },
  textToDo:{ 
    marginTop:40, 
    marginHorizontal: 25,
    textAlign:'center',
    alignSelf:'center', 
  },
  input:{
    borderRadius:12, 
    borderColor:colors.black, 
    width:250, 
    borderWidth: 0.5,
    height:55, 
    paddingHorizontal:30, 
    marginTop: 40,
}
})
