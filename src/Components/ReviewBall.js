import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class ReviewBall extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style = {{flexDirection:'row',}}>
            <Image source = {require('../assets/Icons/BALL-2-391.png')} style ={{width:20, height:20}} />
            <Image source = {require('../assets/Icons/BALL-2-391.png')} style ={{width:20, height:20}} />
            <Image source = {require('../assets/Icons/BALL-2-391.png')} style ={{width:20, height:20}} />
            <Image source = {require('../assets/Icons/BALL-2-391.png')} style ={{width:20, height:20}} />
            <Image source = {require('../assets/Icons/BALL-531.png')} style ={{width:20, height:20}} />
        </View>
    );
  }
}

export default ReviewBall;
