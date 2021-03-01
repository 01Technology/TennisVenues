import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import Text from '../../Config/CustomFont';

import { Entypo } from '@expo/vector-icons'; 

class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerContent:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue ante, ultrices a dolor a, sagittis tempus massa. Aliquam pretium fringilla lacus quis accumsan. Suspendisse commodo finibus tellus vitae porta. Proin feugiat orci leo, at tristique tellus consequat bibendum. Maecenas vitae elementum orci, quis elementum metus. Mauris porta ornare ligula, ac tincidunt nibh egestas iaculis. Suspendisse sit amet dolor ante. Donec dictum sed quam vitae scelerisque. Sed varius semper iaculis. In hac habitasse platea dictumst.

      Duis eget velit nec velit molestie convallis ut nec arcu. Donec sed ultrices eros, ac fringilla sem. Vestibulum non pharetra nisi. Aliquam tincidunt pretium pretium. Nulla sapien est, rhoncus eget dui vel, tincidunt hendrerit augue. In hac habitasse platea dictumst. Cras tellus ipsum, fringilla consequat turpis ut, vulputate malesuada risus. Fusce molestie diam tellus. Aliquam tempus hendrerit turpis in laoreet. Donec a molestie nunc. Nam eu quam tellus. Donec tristique massa et interdum condimentum. Cras risus sapien, tincidunt eget dictum eu, blandit sed risus.
      
      Etiam neque est, finibus id hendrerit in, faucibus eu felis. Proin vel fringilla massa. Fusce in orci id nunc viverra tristique. Vivamus porttitor lobortis orci, sed auctor ex maximus a. Nullam vel urna in felis iaculis venenatis eu commodo odio. Vivamus auctor, libero nec blandit commodo, eros metus auctor ipsum, ac porta nibh urna sit amet lacus. Etiam nisi sapien, volutpat quis nulla nec, placerat euismod nisl. Aliquam lacinia ex quis diam malesuada ornare. Praesent imperdiet mi vitae porta auctor. In vel ex et odio tincidunt mollis at vitae quam. Pellentesque in blandit felis.
      
      Nunc pharetra lectus sed tellus consectetur ornare. In hac habitasse platea dictumst. Phasellus porttitor vehicula interdum. Ut vitae lectus sed sapien egestas viverra sed nec nisi. In tincidunt nibh eu mi consectetur, viverra aliquam tellus vehicula. Duis sit amet justo in sapien suscipit dictum. Donec eleifend ipsum accumsan lobortis viverra.
      
      Proin vel efficitur libero. Nulla facilisi. Proin ultricies porta placerat. Fusce malesuada egestas massa, eu aliquet nulla aliquet non. Etiam sit amet convallis neque. Nulla dictum, urna varius aliquet egestas, urna odio pulvinar arcu, vel elementum tortor ex sit amet mi. Donec eget purus dapibus, pellentesque nisi et, accumsan diam. Vestibulum quis pharetra ipsum, quis hendrerit est. Donec malesuada nisl quis molestie vulputate. Phasellus convallis dolor ipsum, vitae sagittis purus semper a. Quisque urna sapien, bibendum non consectetur ut, lacinia et nulla. Proin enim nunc, pretium sed ex id, eleifend faucibus metus.`
    };
  }

  backChevronPressed = () => {
    this.props.navigation.navigate("Settings");
  }

  render() {
    return (
      <ScrollView>
        <TouchableOpacity style = {styles.backChevronContainer}>
          <Entypo name="chevron-thin-left" opacity={0.7} size={30} color='grey' onPress = {()=>{this.backChevronPressed()}}/>
        </TouchableOpacity>
        <View style = {styles.container}>
          <View>
              <Text type = "bold" style = {styles.privacypolicy}>PRIVACY POLICY</Text>
          </View>
          <View>
              <Text style = {styles.content}>{this.state.innerContent}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default PrivacyPolicy;

const styles = StyleSheet.create({
  privacypolicy:{
    fontSize:24,
    marginBottom:50,
    marginLeft:40
  },
  backChevronContainer:{
    top:40,
    marginBottom:100,
    left:20
  },
  content:{
    marginLeft:40,
    marginBottom:50,
    marginRight:20,
    fontSize:12,
  },
})