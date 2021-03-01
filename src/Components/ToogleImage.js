import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';

class ToogleImage extends Component {
  render() {
    return (
        <Image source = {require('../assets/Inputs/toggle.png')} style = {styles.toogleImage}/>
    );
  }
}

export default ToogleImage;

const styles = StyleSheet.create({
    toogleImage:{
        width:30, height:12
    }
})