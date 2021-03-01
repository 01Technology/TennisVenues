import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView,  } from 'react-native';
import {Input, Button} from 'react-native-elements';

import Text from '../../Config/CustomFont';
import colors from '../../Config/colors';

import { Entypo } from '@expo/vector-icons'; 

class Feedbacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerContent:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue ante, ultrices a dolor a, sagittis tempus massa. Aliquam pretium fringilla lacus quis accumsan. Suspendisse commodo finibus tellus vitae porta. Proin feugiat orci leo, at tristique tellus consequat bibendum. Maecenas vitae elementum orci, quis elementum metus. Mauris porta ornare ligula, ac tincidunt nibh egestas iaculis. Suspendisse sit amet dolor ante. Donec dictum sed quam vitae scelerisque. Sed varius semper iaculis. In hac habitasse platea dictumst.`
    };
  }

  backChevronPressed = () => {
    this.props.navigation.navigate("Settings");
  }

  thankyouForFeedbacks = () => {
    this.props.navigation.navigate("ThankYouForFeedbacks");
  }

  render() {
    return (
      <ScrollView>
        <TouchableOpacity style = {styles.backChevronContainer}>
          <Entypo name="chevron-thin-left" opacity={0.7} size={30} color='grey' onPress = {()=>{this.backChevronPressed()}}/>
        </TouchableOpacity>
        <View style = {styles.container}>
          <View>
              <Text type = "bold" style = {styles.feedbacks}>WE WOULD LOVE TO HEAR A FEEDBACK FROM YOU!</Text>
          </View>
          <View>
              <Text style = {styles.content}>{this.state.innerContent}</Text>
          </View>
          <View style = {styles.inputContainer}>
            <Input 
              placeholder = "Input Text Here.."
              containerStyle = {styles.inputfieldContainerSyle}
              inputContainerStyle={{borderBottomWidth:0, }}
            />
          </View>
          <View style = {styles.btnConatiner}>
            <Button 
              title = "SUBMIT"
              buttonStyle={styles.btnStyle}  
              titleStyle = {{ fontFamily:'Lato-Regular'}}
              onPress = {this.thankyouForFeedbacks}
              />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Feedbacks;

const styles = StyleSheet.create({
  backChevronContainer:{
    top:40,
    marginBottom:100,
    left:20
  },
  btnConatiner:{
    width:'30%', alignSelf:'flex-end', marginRight:20, marginBottom:150
  },
  btnStyle:{ 
    backgroundColor: colors.primary, borderRadius:12, borderColor:colors.primary, 
  },
  content:{
    marginLeft:40,
    marginBottom:50,
    marginRight:20,
    fontSize:12,
  },
  feedbacks:{
    fontSize:24,
    marginBottom:50,
    marginLeft:40,
    marginRight:20,
    width:'60%'
  },
  inputContainer:{
    marginLeft:30, marginRight:20
  },
  inputfieldContainerSyle:{
    borderWidth:1, 
    borderColor:colors.primary, 
    borderRadius:12, 
    height:150, 
    marginBottom:20 
  }
})