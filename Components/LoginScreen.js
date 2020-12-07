import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {Button, Input} from 'react-native-elements';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <Image source = {require('../assets/logo.png')} style = {styles.img} />
        <View>
          <View style = {{marginHorizontal:25}}>
            <Input
              placeholder='USERNAME / EMAIL'
              inputContainerStyle ={{borderBottomColor:'#3aabdf'}}
            />
            <Input
              placeholder='PASSWORD'
              inputContainerStyle ={{borderBottomColor:'#3aabdf'}}
            />
          </View>
          <View>
            <Button 
                containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                title="LOGIN" 
                buttonStyle={{ width:180, height:55, backgroundColor: '#3aabdf', borderRadius:50, }} 
                onPress={() => { this.loginClick(); }}
                titleStyle = {{fontSize:20}}
            />
            <View style = {{marginTop:10}}>
              <Text style = {{ alignSelf:'center', color:'#F6921D', textDecorationLine:'underline', textDecorationColor:'#F6921D'}}>FORGOT PASSWORD</Text>
            </View>
          </View>
        </View>
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
    position:'absolute',
    top:30,
    width:290,
    height:80
  }
})
