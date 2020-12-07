import React, { Component } from 'react';
import { View, Text ,StyleSheet, Image } from 'react-native';

class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('FirstScreen');
            }, 3000);    
    }
  render() {
    return (
      <View style = {styles.container}>
        <Image source = {require('../assets/logo.png')} style = {styles.img} />
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
        width:240,
        height:80
    }
})

export default SplashScreen;
