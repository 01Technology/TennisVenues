import React, { Component } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { View, StyleSheet, Image } from 'react-native';
import { ButtonGroup, Avatar, Badge, Button } from 'react-native-elements';

import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';
import { Ionicons } from '@expo/vector-icons'; 

const favourites = [
    {
        "id":1,
        "title":"Lorem ipsum dolor sit amet",
        "location":"Etiam non lectus id ets elwsa yseis.",
        "url":"https://images.pexels.com/photos/1619860/pexels-photo-1619860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "id":2,
        "title":"Lorem2 ipsum2 dolor sit amet",
        "location":"Etiam non lectus id ets elwsa yseis",
        "url":"https://images.pexels.com/photos/2961964/pexels-photo-2961964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "id":3,
        "title":"Lorem3 ipsum3 dolor sit amet",
        "location":"Etiam non lectus id ets elwsa yseis",
        "url":"https://images.pexels.com/photos/427649/pexels-photo-427649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
]

const info = {
  'name':'SHELDON COOPER',
  'age': '25',
  'gender': 'MALE',
  'playerlevel':'BEGINNER',
  'handSwing':'RIGHT HANDED',
  'preferredCourt':'CLAY COURT'
}
class CustomTopBarNavigator extends Component {
  constructor(props) {
      super(props);
      this.state = {
          selectedButtonIndex: 0,
          username: 'USER NAME',
          location: 'AUSTRALIA',
      };
      this.buttons = ["PROFILE", "FAVOURITES"];
  }

  buttonSelected = (index) => {
      this.setState({ selectedButtonIndex: index });
  }

  settings = () => {
    this.props.navigation.navigate('Settings');
  }

  booktheCourt = ({item}) => {
      this.props.navigation.navigate('BookTheCourt', {name:item.title, email:item.location})
  }

  render() {
    return (
        <View style={styles.container}>
        {
            this.state.selectedButtonIndex === 0 ? 
            <>
                <View style={styles.curvedbackgroundViewStyleforProfile}>
                </View>
                <View style={styles.curvedforegroundViewStyleforProfile}>
                </View>
            </>
            :
            <>
                <View style={styles.curvedbackgroundViewStyle}>
                </View>
                <View style={styles.curvedforegroundViewStyle}>
                </View>
            </>
        }   
        <TouchableOpacity onPress = {()=>{this.settings();}} activeOpacity = {0.7} style = {styles.settingContainer}>
            <Image source={require('../../assets/Icons/gear-242.png')} style = {styles.setting} />
        </TouchableOpacity>
            <View style = {styles.topConatiner}>
                <View style={styles.avatarContainer}>
                    <Avatar
                        size="large"
                        icon={{ name: 'user', type: 'font-awesome', color: colors.white, size: 62 }}
                        rounded titleStyle={{ color: 'black', fontSize: 25 }}
                        //onPress={() => this.props.navigation.navigate("PhoneCamera")}
                        overlayContainerStyle={{ backgroundColor: 'white' }}
                    />
                    <Badge 
                        containerStyle={styles.badgeContainer} 
                        value={<Image 
                            source={require('../../assets/Icons/PLUS-202.png')} 
                            onPress={() => console.log("Works!")} 
                            style={styles.badge} 
                        />} 
                    />
                </View>
                <Text style={styles.username}>{this.state.username}</Text>
                <View style={styles.locationContainer}>
                    <Image source={require('../../assets/Icons/location-048.png')} style={styles.locationImage} />
                    <Text style={styles.locationText}>{this.state.location}</Text>
                </View>
            </View>
            <ButtonGroup
                onPress={(index) => { this.buttonSelected(index); }}
                selectedIndex={this.state.selectedButtonIndex}
                buttons={this.buttons}
                selectedTextStyle = {{fontFamily:'Lato-Black', color:colors.black, fontSize:16}}
                textStyle = {styles.buttongroupTextStyle}
                underlayColor = "transparent"
                selectedButtonStyle = {{backgroundColor:'transparent', borderWidth:0}}
                containerStyle={styles.buttonContainer}
            />
            <View>
                {
                    this.state.selectedButtonIndex == 0 ?
                        <View style = {styles.profileContent}>
                            <View style = {{height:32}}></View>
                            <View style = {{width:'100%'}}>
                              <Text style = {styles.commonText}>NAME:                <Text type = "black">{info.name}</Text></Text>
                              <Text style = {styles.commonText}>AGE:                     <Text type = "black">{info.age}</Text></Text>
                              <Text style = {styles.commonText}>GENDER:          <Text type = "black">{info.gender}</Text></Text>
                            </View>
                            <View style = {{height:32}}></View>
                            <View style = {{width:'100%'}}>
                              <Text style = {styles.commonText}>PLAYER LEVEL:               <Text type = "black">{info.playerlevel}</Text></Text>
                              <Text style = {styles.commonText}>HAND SWING:               <Text type = "black">{info.handSwing}</Text></Text>
                              <Text style = {styles.commonText}>PREFERRED COURT:   <Text type = "black">{info.preferredCourt}</Text></Text>
                            </View>
                            <View style = {{height:32}}></View>
                            <View style = {{justifyContent:'center', alignItems:'center'}}>
                                <Button 
                                    containerStyle={styles.buttonContainerStyle}
                                    title="EDIT PROFILE"
                                    buttonStyle={styles.buttonStyle}  
                                    onPress={()=> {this.props.navigation.navigate("EditProfile", {name: info.name, age:info.age, gender:info.gender, playerlevel:info.playerlevel, handSwing:info.handSwing, preferredCourt:info.preferredCourt}) }}
                                    titleStyle = {styles.buttonTitleStyle}
                                />
                            </View>
                        </View>
                        :
                        <View style = {styles.profileContent}>
                        {
                            favourites.map(item => {
                                return(
                                    <View key = {item.id} style = {{flexDirection:'row', marginHorizontal:20, marginVertical:10, marginTop:5}}>
                                        <View style = {{flexDirection:'row'}}>
                                            <Image source = {{uri:item.url}} style = {{width:100, height:70, alignSelf:'baseline'}} /> 
                                            <View>
                                            <Ionicons name="location" size={24} color={colors.secondary} />
                                            </View>   
                                        </View>
                                        <View style = {{width:Dimensions.get('window').height/7, height:20}}>
                                            <View>
                                            <Text type = "bold" style = {{fontSize:12,}}>{item.title}</Text>
                                            </View>
                                            <View>
                                            <Text style = {{fontSize:8, width:'100%'}}>{item.location}</Text>
                                            </View>
                                            <View style = {{flexDirection:'row',}}>
                                                <Image source = {require('../../assets/Icons/BALL-2-391.png')} style ={{width:20, height:20}} />
                                                <Image source = {require('../../assets/Icons/BALL-2-391.png')} style ={{width:20, height:20}} />
                                                <Image source = {require('../../assets/Icons/BALL-2-391.png')} style ={{width:20, height:20}} />
                                                <Image source = {require('../../assets/Icons/BALL-2-391.png')} style ={{width:20, height:20}} />
                                                <Image source = {require('../../assets/Icons/BALL-531.png')} style ={{width:20, height:20}} />
                                            </View>
                                        </View>
                                        <View style = {{justifyContent:'center'}}>
                                            <Button 
                                            containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                                            title="BOOK THIS COURT" 
                                            buttonStyle={{ width:100, height:25, backgroundColor: colors.primary, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                                            onPress={()=> this.booktheCourt({item})}
                                            titleStyle = {{fontSize:8, color:colors.white}}
                                            />
                                        </View>
                                    </View>
                                );
                            })
                        }
                        </View>
                }
            </View>
        </View>
    );
}
}

export default CustomTopBarNavigator;

const styles = StyleSheet.create({
avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center'
},
badge: {
    width: 20, height: 20,
},
badgeContainer: {
    width: 20, height: 20, left:30, bottom:30
},
buttonContainer:{
    backgroundColor:'transparent',
    borderColor:'transparent',
    borderWidth:0,
    fontSize:16,
    marginVertical:40
},
buttonContainerStyle:{ 
    paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, 
},
buttonTitleStyle:{
    fontSize:12, color:colors.primary, fontFamily:'Lato-Regular'
},
buttonStyle:{
    width:120, height:35, borderRadius:50, borderWidth:2, backgroundColor: 'transparent'
},
buttongroupTextStyle:{
    fontFamily:"Lato-Black", color:colors.white, fontSize:16
},
commonText:{
    fontSize:16,
    alignSelf:'flex-start',
    //marginVertical:5,
},
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.white
},
curvedforegroundViewStyle:{
    position:'absolute',
    backgroundColor: colors.primary, 
    width: '100%', 
    height: '80%', 
    borderBottomRightRadius: 800,
    top:-Dimensions.get('window').height/3,
  },
  curvedforegroundViewStyleforProfile:{
    position:'absolute',
    backgroundColor: colors.primary, 
    width: '100%', 
    height: '80%', 
    borderBottomLeftRadius:800,
    top:-Dimensions.get('window').height/3,
  },    
  curvedbackgroundViewStyle:{
    position:'absolute',
    backgroundColor: '#f5f5f5', 
    width: '100%', 
    height: '80%', 
    borderBottomRightRadius: 800,
    top:-Dimensions.get('window').height/3 + 30,
    shadowColor:'#000',
  },  
  curvedbackgroundViewStyleforProfile:{
    position:'absolute',
    backgroundColor: '#f5f5f5', 
    width: '100%', 
    height: '80%', 
    borderBottomLeftRadius:800,
    top:-Dimensions.get('window').height/3 + 30,
    shadowColor:'#000',
  },
locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
},
locationText: {
    fontSize: 13,
    marginVertical:5
},
locationImage: {
    width: 18,
    height: 18
},
profileContent:{ 
    justifyContent:'space-between',
    alignItems: 'center',
},
topConatiner:{
    justifyContent:'center',
    alignItems: 'center',
},
settingContainer:{
    position:'absolute',
    top:30,
    left:15,
  },
  setting:{
    width:50,
    height:50,
    zIndex:999,
    elevation:20
},
username: {
    fontSize: 24,
    //marginVertical: 10,
    color:colors.white
},
})