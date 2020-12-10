import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text> Promotions </Text>
      </View>
    );
  }
}

export default Promotions;
