import React, { Component } from 'react';
import { View } from 'react-native';
import {Card, Text, Button} from 'react-native-elements';

class Plus extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
        <Card title = "Card Title" image = {require('../../assets/crousel1.jpg')} >
          <Text>Lorsum dolor sit amet, consectetuer adipiscing elit.s Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</Text>
          <Button icon = {{}} buttonStyle = {{}}/>
        </Card>
      </View>
    );
  }
}

export default Plus;
