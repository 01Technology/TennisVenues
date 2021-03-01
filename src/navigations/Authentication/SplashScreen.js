import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../../Config/colors';
import urls from '../../utils/urls';

class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('FirstScreen');
            }, 3000);    
    }
  render() {
    return (
      <View style = {styles.container}>
        <Image source = {urls.logo} style = {styles.img} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.smokewhite
    },
    img:{
        width:260,
        height:80
    }
})

export default SplashScreen;
