import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {Button} from 'react-native-elements';

export default class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  loginClick = () =>{
      this.props.navigation.navigate("LoginScreen");
  }

  render() {
    return (
      <View style = {styles.container}>
        <Image source = {require('../assets/logo.png')} style = {styles.img} />
        <View>
            <Button 
                containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                title="LOGIN" 
                buttonStyle={{ width:180, height:55, backgroundColor: '#3aabdf', borderRadius:50, }} 
                onPress={() => { this.loginClick(); }}
                titleStyle = {{fontSize:20}}
            />
            <Button 
                containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                title="SIGNUP" 
                buttonStyle={{ width:180, height:55, backgroundColor: '#f5f5f5', borderRadius:50, borderColor:'#3aabdf', borderWidth:2 }}  
                onPress={() => { this.loginClick(); }}
                titleStyle = {{fontSize:20, color:'#3aabdf'}}
            />
        </View>
        <Text style = {{ color:'#F6921D', textDecorationLine:'underline', textDecorationColor:'#F6921D'}}>CONTINUE AS A GUEST</Text>
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
