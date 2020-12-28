import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';
import {Input, Icon} from 'react-native-elements';

import {Picker} from '@react-native-picker/picker';

import Text from '../Config/CustomFont';
import colors from '../Config/colors';
import { Entypo } from '@expo/vector-icons'; 

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:props.route.params.name,
      age:props.route.params.age,
      gender:props.route.params.gender,
      playerLevel:props.route.params.playerlevel,
      handSwing:props.route.params.handSwing,
      preferredCourt:props.route.params.preferredCourt,
      location: 'AUSTRALIA',
      email:'USER@NAME.COM',
      contactNo:'+61 xxxx-xxx-xx',

      
    };
  }
  
  backChevronPressed = () => {
    this.props.navigation.navigate("Profile");
  }
  
  render() {
    return (
      <ScrollView>
        <View style = {styles.topContainer}>
          <TouchableOpacity style = {styles.backChevronContainer} onPress = {this.backChevronPressed}>
            <Entypo name="chevron-thin-left" opacity={0.7} size={30} color={colors.primary}/>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.backChevronContainer} onPress = {this.save}>
            <Text style = {styles.saveText}>SAVE</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.container}>
          <View>  
            <Text style = {styles.topicText} type = "lite">NAME:</Text>
            <Input 
              value = {this.state.name} 
              style = {styles.inputText}
              rightIcon = {
                <TouchableOpacity onPress = {()=>{this.setState({name:0})}}>
                  <Image 
                    source = {require('../assets/Icons/X-213.png')} 
                    style = {{ width:30, height:30}}  
                  />
                </TouchableOpacity>
              }
            />
          </View>
          
          <View>  
            <Text style = {styles.topicText} type = "lite">GENDER:</Text>
            <View style = {styles.inputPicker}>
              <Picker
                  selectedValue={this.state.gender}
                  style={{height: 50, width: '100%'}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({gender: itemValue})
                  }>
                  <Picker.Item label="MALE" value="male" />
                  <Picker.Item label="FEMALE" value="female" />
              </Picker>
          </View>
          </View>
          <View>  
            <Text style = {styles.topicText} type = "lite">AGE</Text>
            <Input 
              value = {this.state.age} 
              style = {styles.inputText}
              keyboardType = "number-pad"
              rightIcon = {
                <TouchableOpacity onPress = {()=>{this.setState({age:0})}}>
                  <Image 
                    source = {require('../assets/Icons/X-213.png')} 
                    style = {{ width:30, height:30}}  
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View>  
            <Text style = {styles.topicText} type = "lite">LOCATION</Text>
            <Input 
              value = {this.state.location} 
              style = {styles.inputText}
              rightIcon = {
                <TouchableOpacity onPress = {()=>{this.setState({location:0})}}>
                  <Image 
                    source = {require('../assets/Icons/X-213.png')} 
                    style = {{ width:30, height:30}}  
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View style = {{height:60}} />
          
          <View>  
            <Text style = {styles.topicText} type = "lite">EMAIL ADDRESS</Text>
            <Input 
              value = {this.state.email} 
              style = {styles.inputText}
              rightIcon = {
                <TouchableOpacity onPress = {()=>{this.setState({email:0})}}>
                  <Image 
                    source = {require('../assets/Icons/X-213.png')} 
                    style = {{ width:30, height:30}}  
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View>  
            <Text style = {styles.topicText} type = "lite">CONTACT NUMBER:</Text>
            <Input 
              value = {this.state.contactNo} 
              style = {styles.inputText}
              rightIcon = {
                <TouchableOpacity onPress = {()=>{this.setState({contactNo:0})}}>
                  <Image 
                    source = {require('../assets/Icons/X-213.png')} 
                    style = {{ width:30, height:30}}  
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View style = {{height:60}} />
          <View>  
            <Text style = {styles.topicText} type = "lite">PLAYER LEVEL:</Text>
            <View style = {styles.inputPicker}>
              <Picker
                  selectedValue={this.state.playerLevel}
                  style={{height: 50, width: '100%'}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({playerLevel: itemValue})
                  }>
                  <Picker.Item label="BEGINNER" value="beginner" />
                  <Picker.Item label="INTERMEDIATE" value="intermediate" />
                  <Picker.Item label="PROFESSIONAL" value="professional" />
              </Picker>
            </View>
          </View>
          <View>  
            <Text style = {styles.topicText} type = "lite">HAND SWING:</Text>
            <View style = {styles.inputPicker}>
              <Picker
                  selectedValue={this.state.handSwing}
                  style={{height: 50, width: '100%'}}
                  onValueChange={(val, itemIndex) =>
                    this.setState({handSwing: val})
                  }>
                  <Picker.Item label="LEFT" value="left" />
                  <Picker.Item label="RIGHT" value="right" />
                  <Picker.Item label="ALL-ROUNDER" value="allrounder" />
              </Picker>
            </View>
          </View>
          <View style = {{height:20}} />
          <View>  
            <Text style = {styles.topicText} type = "lite">PREFERRED COURT:</Text>
            <View style = {styles.inputPicker}>
              <Picker
                  selectedValue={this.state.preferredCourt}
                  style={{height: 50, width: '100%'}}
                  onValueChange={(val, itemIndex) =>
                    this.setState({preferredCourt: val})
                  }>
                  <Picker.Item label="CLAY COURT" value="claycourt" />
                  <Picker.Item label="HARD COURT" value="hardcourt" />
                  <Picker.Item label="GRASS COURT" value="grasscourt" />
                  <Picker.Item label="CARPET COURT" value="carpetcourt" />
              </Picker>
            </View>
          </View>
          <View style = {{height:20}} />
        </View>
      </ScrollView>
    );
  }
}

export default EditProfile;

const styles = StyleSheet.create({
  backChevronContainer:{
    marginBottom:10,
  },
  container:{
    marginHorizontal:20
  },
  inputText:{
    fontSize:17,
    fontFamily:'Lato-Black'
  }, 
  saveText:{
    fontSize:20,
    color:colors.primary
  },
  topContainer:{
    justifyContent:'space-between',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginHorizontal:20,
    flexDirection:'row',    
    alignItems:'center',
    marginBottom:30
  },
  topicText:{
    
  },
  textInput: {
    borderRadius:4, 
    borderColor: '#b5b5b5', 
    borderWidth: 1, 
    margin:5, 
    height:40, 
    padding:5
  },
  inputPicker:{
    borderBottomWidth:1,
    marginBottom:30,
    borderColor:'grey',
    marginHorizontal:10,
  }
})
