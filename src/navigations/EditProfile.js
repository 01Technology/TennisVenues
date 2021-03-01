import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';
import {Input} from 'react-native-elements';

import Text from '../Config/CustomFont';
import colors from '../Config/colors';
import { Entypo } from '@expo/vector-icons'; 
import AppPicker from '../Components/AppPicker';

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

    this.genderCategories  = [
      { label:'Male', value:1 },
      { label:'Female', value:2 },
      { label:'Rather Not Say', value:3 }
    ]

    this.playerLevel = [
      { label:'Beginner', value:1 },
      { label:'Intermediate', value:2 },
      { label:'Professional', value:3 }
    ]

    this.handSwing = [
      { label:'Left', value:1 },
      { label:'Right', value:2 },
      { label:'All-Rounder', value:3 }
    ]

    this.preferredCourt = [
      { label:'Clay Court', value:1 },
      { label:'Hard Court', value:2 },
      { label:'Grass Court', value:3 },
      { label:'Carpet Court', value:4 },
    ]
  }
  
  backChevronPressed = () => {
    this.props.navigation.navigate("Profile");
  }

  save = () => {
    this.props.navigation.navigate("Profile", {isEdit:this.state.gender});

  }
  
  render() {
    return (
      <ScrollView>
        <View style = {styles.topContainer}>
          <TouchableOpacity style = {styles.backChevronContainer} onPress = {this.backChevronPressed}>
            <Entypo name="chevron-thin-left" opacity={0.7} size={30} color={colors.primary}/>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.backChevronContainer} onPress = { () => this.save()}>
            <Text style = {styles.saveText}>SAVE</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.container}>
          <View>  
            <Text>NAME:</Text>
            <Input 
              value = {this.state.name} 
              style = {styles.inputText}
              rightIcon = {
                <TouchableOpacity onPress = {()=>{this.setState({name:0})}}>
                  <Image 
                    source = {require('../assets/Icons/X-213.png')} 
                    style = {styles.icon}  
                  />
                </TouchableOpacity>
              }
            />
          </View>
          
          <AppPicker 
            type = "Gender"
            value = {this.state.gender}
            selecteditem = {this.genderCategories}
            onSelectItem = {item => this.setState({gender:item})}
            items ={this.genderCategories}
          />

          <View>  
            <Text>AGE</Text>
            <Input 
              value = {this.state.age} 
              style = {styles.inputText}
              keyboardType = "number-pad"
              rightIcon = {
                <TouchableOpacity onPress = {()=>{this.setState({age:0})}}>
                  <Image 
                    source = {require('../assets/Icons/X-213.png')} 
                    style = {styles.icon}  
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View>  
            <Text  >LOCATION</Text>
            <Input 
              value = {this.state.location} 
              style = {styles.inputText}
              rightIcon = {
                <TouchableOpacity onPress = {()=>{this.setState({location:0})}}>
                  <Image 
                    source = {require('../assets/Icons/X-213.png')} 
                    style = {styles.icon}  
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View style = {{height:60}} />
          
          <View>  
            <Text>EMAIL ADDRESS</Text>
            <Input 
              value = {this.state.email} 
              style = {styles.inputText}
              rightIcon = {
                <TouchableOpacity onPress = {()=>{this.setState({email:0})}}>
                  <Image 
                    source = {require('../assets/Icons/X-213.png')} 
                    style = {styles.icon}  
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View>  
            <Text>CONTACT NUMBER:</Text>
            <Input 
              value = {this.state.contactNo} 
              style = {styles.inputText}
              rightIcon = {
                <TouchableOpacity onPress = {()=>{this.setState({contactNo:0})}}>
                  <Image 
                    source = {require('../assets/Icons/X-213.png')} 
                    style = {styles.icon}  
                  />
                </TouchableOpacity>
              }
            />
          </View>
          <View style = {{height:60}} />
          <AppPicker 
            type = "Player Level"
            value = {this.state.playerLevel}
            selecteditem = {this.playerLevel}
            onSelectItem = {item => this.setState({playerLevel:item})}
            items ={this.playerLevel}
          />

          <AppPicker 
            type = "Hand Swing"
            value = {this.state.handSwing}
            selecteditem = {this.handSwing}
            onSelectItem = {item => this.setState({handSwing:item})}
            items ={this.handSwing}
          />
          
          
          <View style = {{height:40}} />

          <AppPicker 
            type = "Preferred court"
            value = {this.state.preferredCourt}
            selecteditem = {this.preferredCourt}
            onSelectItem = {item => this.setState({preferredCourt:item})}
            items ={this.preferredCourt}
          />

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
    paddingLeft:15,
    fontSize:17,
    fontFamily:'Lato-Black'
  }, 
  icon:{
    width:30, 
    height:30,
    marginRight:15
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
