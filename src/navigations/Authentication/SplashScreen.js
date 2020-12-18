import React, { Component } from 'react';
import { View, Text ,StyleSheet, Image } from 'react-native';

class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('FirstScreen');
            //this.props.navigation.replace('HomeScreen');
            //this.props.navigation.navigate("MakePayment");
            }, 3000);    
    }
  render() {
    return (
      <View style = {styles.container}>
        <Image source = {require('../../assets/logo.png')} style = {styles.img} />
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
        width:260,
        height:80
    }
})

export default SplashScreen;