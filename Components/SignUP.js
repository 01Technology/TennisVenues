import React from 'react';
import {View,StyleSheet, Text, Image, Alert} from 'react-native';    
import {Input, Button} from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 

import colors from '../Config/colors';

export default class Update extends React.Component{
    constructor(){
        super();
        this.state = {
            username:'',
            email:'',
            contactno:'',
            pw: '',
            confirmpw:'',
        }
    }
    
    backChevronPressed = () => {
     this.props.navigation.navigate("FirstScreen");
    }

    signupClicked = () => {
      //console.log(this.state.username);
      //Alert.alert("Thank You For Sigining UP..", "Login To Continue");
      this.props.navigation.navigate("OTPVerification");
    }

render(){
    return (
      <View style = {{flex:1, justifyContent:'space-evenly', marginHorizontal:22, marginTop:10}}>
            <Entypo name="chevron-left" size={36} color={colors.primary} style ={styles.backChevron} onPress = {()=>{this.backChevronPressed()}}/>
            <Image source = {require('../assets/logo.png')} style = {styles.img} />
            <View style = {{ justifyContent:'center', alignItems:'center'}}>
              <Input
                placeholder='USERNAME'
                inputContainerStyle ={styles.input}
                onChangeText = { (val) => {this.setState({username:val})}}
              />
              <Input
                placeholder='EMAIL'
                inputContainerStyle ={styles.input}
                onChangeText = { (val) => {this.setState({email:val})}}
              />
              <Input
                placeholder='CONTACT NUMBER'
                inputContainerStyle ={styles.input}
                onChangeText = { (val) => {this.setState({contactno:val})}}
              />
              <Input
                placeholder='PASSWORD'
                inputContainerStyle ={styles.input}
                onChangeText = { (val) => {this.setState({pw:val})}}
              />
              <Input
                placeholder='CONFIRM PASSWORD'
                inputContainerStyle ={styles.input}
                onChangeText = { (val) => {this.setState({confirmpw:val})}}
              />
            </View>
            <View>
              <Button 
                  containerStyle={{ paddingLeft:10, paddingRight:10 }}
                  title="SIGNUP" 
                  buttonStyle={{ alignSelf:'center', width:180, height:55, backgroundColor: colors.smokewhite, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                  onPress={() => { this.signupClicked(); }}
                  titleStyle = {{fontSize:20, color:colors.primary}}
              />
            </View> 
      </View>
    )
  }
}


const styles = StyleSheet.create({
  backChevron:{
    position:'absolute', 
    top:35,
    left:0
  },
  img:{
    alignSelf:'center',
    top:25,
    width:290,
    height:80
  },
  input:{
    borderBottomColor:colors.primary, marginHorizontal:45, paddingLeft:10,
  },
})
