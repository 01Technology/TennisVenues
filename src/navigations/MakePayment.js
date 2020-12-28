import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import {Input, Button} from 'react-native-elements';

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
            <TouchableOpacity style = {styles.backChevronContainer} onPress = {this.backChevronPressed}>
                <Entypo name="chevron-thin-left" opacity={0.7} size={30} color={colors.primary} />
            </TouchableOpacity>
            <View style = {{marginLeft:35, marginBottom:30, flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginRight:Dimensions.get('window').width/2 }}>
                    <Text style={{fontSize:20, fontWeight:'bold'}} >{this.state.name}</Text>
                    <Image source = {require('../assets/crousel1.jpg')} style = {{width:'100%', height:70, marginTop:8}} /> 
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
                <View style = {{marginLeft:10, marginBottom:80, flexDirection:'row'}}>  
                    <Ionicons name="lock-closed" size={18} color={colors.secondary} style = {{marginRight:10}}/>  
                    <View>
                        <Text style = {{fontSize:11, width:'60%'}}>YOUR PAYMENT IS SSECURED CARD DETAILS WON'T BE SHARED</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style = {{ flexDirection:'row', bottom:0, position:'absolute', alignSelf:'stretch', width:'100%', height:'8%', backgroundColor:colors.white, justifyContent:'space-between', alignItems:'center', elevation:500,paddingLeft:20}}>  
                <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text style = {{fontWeight:'bold', marginRight:10}}>Total</Text>
                    <Text style = {{fontSize:20, fontWeight:'600'}}>$13</Text>
                </View>
                <Button 
                    containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                    title="PAY NOW" 
                    buttonStyle={{ width:100, height:35, backgroundColor: colors.primary, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                    onPress={() => {this.paynowPressed();}}
                    titleStyle = {{fontSize:8, color:colors.white}}
                />
            </View>
    </SafeAreaView>
    );
  }
}

export default MakePayment;

const styles = StyleSheet.create({
    backChevronContainer:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        left:20,
        marginBottom:30,
      },
    footerContainer:{
        //position:'absolute',
        flexDirection:'row', 
        bottom:0, 
        alignSelf:'stretch', 
        width:'100%', 
        height:'8%', 
        backgroundColor:colors.white, 
        justifyContent:'space-between', 
        alignItems:'center', 
        elevation:5,
        paddingLeft:20
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
    venueName:{
        fontSize:32,
        fontWeight:'bold',
        width:250,
        marginBottom:5
    },
})