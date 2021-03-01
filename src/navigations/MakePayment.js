import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import {Input} from 'react-native-elements';

import AppButton from '../Components/AppButton';
import Text from '../Config/CustomFont';
import BackChevron from '../Components/BackChevron';
import ToogleImage from '../Components/ToogleImage';
import colors from '../Config/colors';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

class MakePayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: props.route.params.name,
        email: props.route.params.email,
        url:props.route.params.url,
        expiryTime:'9:00'
    };
  }

  backChevronPressed = () => {
    this.props.navigation.navigate("BookTheCourt");
  }

  paynowPressed = () => {
      this.props.navigation.navigate("BookingConfirmed", {name:this.state.name, email:this.state.email});
  }
  render() {
    return (
    <SafeAreaView>
        <ScrollView>
            <BackChevron color = "primary" onPress = {() => {this.props.navigation.navigate("Home")}} style = {styles.BackChevron}/>
            <View style = {styles.titleContainer}>
                    <Text type = "black" style={styles.title} >{this.state.name}</Text>
                    <Image source = {{uri:this.state.url}} style = {styles.image} /> 
            </View>
            <View style = {{  justifyContent:'space-between', marginRight:20}}>
                <View style = {{marginLeft:35, flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:30}}>
                        <View style = {{flexDirection:'row', alignSelf:'baseline'}}>
                            <Image source = {require('../assets/Icons/location-048.png')} style = {{width:26, height:26, marginRight:10}} />
                            <View style = {{width:Dimensions.get('window').width/3}}>
                                <Text style = {{fontSize:10}}>{this.state.name}</Text>
                                <Text style = {{fontSize:10, marginRight:20}}>{this.state.email}</Text>
                            </View>
                        </View>
                        <View style = {{flexDirection:'row', alignSelf:'baseline'}}>
                        <Image source = {require('../assets/Icons/DETAIL-102.png')} style = {{width:26, height:26, marginRight:10}} />
                            <View style = {{width:Dimensions.get('window').width/3}}>
                                <Text style = {{fontSize:10}}>{this.state.name}</Text>
                                <Text style = {{fontSize:10, marginRight:20}}>{this.state.email}</Text>
                            </View>
                        </View>
                </View>
                <View style = {{marginLeft:35, flexDirection:'row', justifyContent:'space-between', alignItems:'center',}}>
                        <View style = {{flexDirection:'row',}}>
                        <Image source = {require('../assets/Icons/CLOCK-092.png')} style = {{width:26, height:26, marginRight:10}} />
                            <View style = {{width:Dimensions.get('window').width/3}}>
                                <Text style = {{fontSize:10}}>{this.state.name}</Text>
                                <Text style = {{fontSize:10, marginRight:20}}>{this.state.email}</Text>
                            </View>
                        </View>
                        <View style = {{flexDirection:'row',  alignSelf:"baseline" }}>
                        <Image source = {require('../assets/Icons/COURT-133.png')} style = {{width:26, height:26, marginRight:10}} />
                            <View style = {{width:Dimensions.get('window').width/3}}>
                                <Text style = {{fontSize:10}}>{this.state.name}</Text>
                                <Text style = {{fontSize:10, marginRight:20}}>{this.state.email}</Text>
                            </View>
                        </View>
                </View>
            </View>
            <View style = {{marginLeft:35, marginVertical:30}}>
                <Text style = {{ fontSize:11}}>THIS BOOKING PAYMENT WILL EXPIRE IN  <Text style = {{fontWeight:'bold', fontSize:16}}>{this.state.expiryTime}</Text></Text>
            </View>
            <View style = {{  marginLeft:30}}>
              <View>
                <Input
                    placeholder='NAME ON CREDIT CARD'
                    inputContainerStyle ={styles.input}
                    onChangeText = { (val) => {this.setState({username:val})}}
                    style = {{fontSize:12,}}
                />
              </View>
              <View>
                <Input
                    placeholder='CREDIT CARD NUMBER'
                    inputContainerStyle ={styles.input}
                    onChangeText = { (val) => {this.setState({username:val})}}
                    style = {{fontSize:12}}
                />
              </View>
              <View style = {{ flexDirection:'row', width:70}}>
                    <View style = {{flexDirection:'row',}}>
                        <Input
                            inputContainerStyle ={styles.input}
                            keyboardType = "number-pad"
                            style = {{fontSize:12, width:'20%'}}
                            placeholder = "MONTH"
                        />
                        <Text style = {{fontSize:30,marginTop:5, fontWeight:'100', color:colors.black}}>/</Text>
                    </View>
                    <View style = {{flexDirection:'row', marginLeft:10,}}>
                        <Input
                            inputContainerStyle ={[styles.input, {width:50}]}
                            keyboardType = "number-pad"
                            style = {{fontSize:12, width:50}}
                            placeholder = "YEAR"
                        />
                    </View>
                </View>
                <View style = {{width:'50%'}}>    
                    <Input
                        placeholder='SECURITY CODE'
                        inputContainerStyle ={styles.input}
                        onChangeText = { (val) => {this.setState({username:val})}}
                        style = {{fontSize:12 }}
                    />
                </View>
                <View style = {{marginLeft:10, marginBottom:40, flexDirection:'row'}}>    
                    <Text style = {{fontSize:10,marginRight:10}}> REMEMBER THIS CARD FOR FUTURE BOOKINGS</Text>
                    <ToogleImage />
                </View>
                <View style = {styles.keyContainer}>  
                    <Ionicons name="lock-closed" size={24} color={colors.secondary} style = {{marginRight:10}}/>  
                    <Text style = {styles.keyWords}>YOUR PAYMENT IS SSECURED CARD DETAILS WON'T BE SHARED</Text>
                </View>
            </View>
            <View style = {{marginBottom:50}} />
        </ScrollView>
        <View style = {styles.footerContainer}>  
                <View style = {styles.totalContainer}>
                    <Text style = {styles.total}>Total</Text>
                    <Text style = {styles.price}>$13</Text>
                </View>
                <AppButton 
                    color = "white"
                    title = "pay now"
                    buttonStyle = {styles.buttonStyle}
                    titleStyle = {styles.titleStyle}
                    onPress = {() => {this.props.navigation.navigate("BookingConfirmed", {name: this.state.name, email:this.state.email, url:this.state.url})}}
                />
            </View>
    </SafeAreaView>
    );
  }
}

export default MakePayment;

const styles = StyleSheet.create({
    BackChevron:{
        top:StatusBar.currentHeight,
        left:20,
      },
      buttonStyle:{
        backgroundColor:colors.primary,
        width:120, 
        height:35, 
        borderWidth:1
      }, 
    footerContainer:{
        flexDirection:'row', 
        bottom:0, 
        position:'absolute', 
        alignSelf:'stretch',
        width:'100%', 
        height:'8%', 
        backgroundColor:colors.white, 
        justifyContent:'space-between', 
        alignItems:'center', 
        elevation:20,
        paddingHorizontal:20
    },
    image:{
        resizeMode:'contain', 
        width:Dimensions.get('window').width/2.5, 
        marginRight:20, 
        height:100, 
        marginTop:8
    },
    locationContainer:{
        flexDirection:'row', marginBottom:50
    },
    location:{
        marginLeft:5,
        width:125,
        fontSize:12
    },
    input:{
        borderBottomColor:colors.primary,
        width:'80%',
        justifyContent:'center',
        alignItems:'center'
      },
      keyContainer:{
        alignItems:'baseline', 
        marginLeft:10, 
        marginBottom:80,
        flexDirection:'row'
      },
      keyWords:{
        fontSize:11, width:'60%'
      },
      price:{
        fontSize:20, 
        fontWeight:'bold'
      },
      titleContainer:{
        marginLeft:35, 
        marginRight:20,
        marginBottom:30, 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'baseline'
      },
      title:{
        fontSize:24, 
        textTransform:'uppercase',
        marginTop:50,
        width:Dimensions.get('window').width/2.2
      },
      titleStyle:{
        fontSize:10,
        color:colors.white,
      },
      totalContainer:{
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center'
      },
      total:{
        fontWeight:'bold', 
        marginRight:10
      },
    venueName:{
        fontSize:32,
        fontWeight:'bold',
        width:250,
        marginBottom:5
    },
})