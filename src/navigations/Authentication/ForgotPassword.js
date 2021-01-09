import React, { Component } from 'react';
import { View, TextInput, Dimensions,  StyleSheet } from 'react-native';
import {Button } from 'react-native-elements';

import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';
import BackChevron from '../../Components/BackChevron';
import AppButton from '../../Components/AppButton';

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
        <BackChevron style={styles.backChevron} onPress={() => { this.backChevronPressed() }} />
        <Text type = "bold" style = {styles.textQuestion} onPress = {()=>{this.forgotPassword()}}>FORGOT YOUR PASSWORD?</Text>
        <Text style = {styles.textToDo} onPress = {()=>{this.forgotPassword()}}>ENTER YOUR USERNAME OR EMAIL ADDRESS AND WE WILL SEND YOU A LINK TO RESET YOUR PASSWORD</Text>
        <View>
            <TextInput 
                placeholder = "USERNAME OR EMAIL" 
                onChangeText = {(val) => {this.setState({email: val})}} 
                style = { styles.input }
            />
        </View>
        <AppButton 
          title = "send email"
          buttonStyle = {styles.buttonStyle}
          titleStyle = {styles.titleStyle}
        />
        <View style = {{marginTop:100}}>
            <Text style = {styles.text} onPress = {()=>{this.forgotPassword()}}>DON'T HAVE AN ACCOUNT? <Text type="black" style = {{ color:colors.primary}} onPress = {()=>{this.Signup();}}>SIGN UP!</Text></Text>
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
  buttonStyle:{
    height:45, marginTop:30
  },
  textQuestion:{ 
    marginTop:15, 
    fontSize:18,
    alignSelf:'center', 
    color:colors.primary, 
    textDecorationLine:'underline', 
    textDecorationColor:colors.primary,
  },
  textToDo:{ 
    marginTop:40, 
    marginHorizontal: 25,
    textAlign:'center',
    alignSelf:'center', 
  },
  titleStyle:{
    fontSize:18
  },
  input:{
    borderRadius:12, 
    borderColor:colors.black, 
    width:250, 
    borderWidth: 0.5,
    height:55, 
    paddingHorizontal:30, 
    marginTop: 40,
    fontFamily:'Lato-Regular'
}
})
