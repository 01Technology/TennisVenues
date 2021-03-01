import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import {Button} from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons'; 

import colors from '../Config/colors';
import Text from '../Config/CustomFont';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardWrapper = ({iconName,name,emai}) => {
    return (
        <View style = {{flexDirection:'row', alignSelf:'baseline', marginTop:30, marginLeft:30}}>
            <Ionicons name="location" size={24} color={colors.secondary} style = {{marginRight:10}}/>
            <View style = {{width:Dimensions.get('window').width/2}}>
                <Text type = "bodl" style = {{fontSize:14,}}>{this.state.name}</Text>
                <Text style = {{fontSize:10, marginRight:20}}>{this.state.email}</Text>
            </View>
        </View>
    );
}

class BookingConfirmed extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:props.route.params.name,
        email:props.route.params.email,
        //name:"HELLO THERE WHAT'S UP",
        //email:"Here Goes the Location or so called venue",
        expiryTime:'9:00'
    };
  }

  gotoMyBookings = () => {
      this.props.navigation.navigate("MyBookings");
  }

  render() {
    return (
      <View style = {{ flex:1, justifyContent:'center', alignItems:'center',}}>
        <View style = {{ marginLeft:80, marginRight:100, flexDirection:'row'}}>
            <Text type = "bold" style = {{fontSize:28,}}>YOUR BOOKING IS CONFIRMED!</Text>
            <Image source = {require('../assets/qr.png')} style = {{width:100, height:100}}/> 
        </View>
        <View style = {{flexDirection:'row', alignSelf:'baseline', marginTop:30, marginLeft:30}}>
            <Ionicons name="location" size={24} color={colors.secondary} style = {{marginRight:10}}/>
            <View style = {{width:Dimensions.get('window').width/2}}>
                <Text type = "bold" style = {{fontSize:14}}>{this.state.name}</Text>
                <Text style = {{fontSize:10, marginRight:20}}>{this.state.email}</Text>
            </View>
        </View>
        <View style = {{flexDirection:'row', alignSelf:'baseline', marginTop:30, marginLeft:30}}>
            <Ionicons name="time" size={24} color={colors.secondary} style = {{marginRight:10}}/>
            <View style = {{width:Dimensions.get('window').width/2}}>
                <Text style = {{fontSize:10}}>{this.state.name}</Text>
                <Text style = {{fontSize:10, marginRight:20}}>{this.state.email}</Text>
            </View>
        </View>
        <View style = {{flexDirection:'row', alignSelf:'baseline', marginTop:30, marginLeft:30}}>
            <Ionicons name="person" size={24} color={colors.secondary} style = {{marginRight:10}}/>
            <View style = {{width:Dimensions.get('window').width/2}}>
                <Text style = {{fontSize:10}}>USER NAME</Text>
                <Text style = {{fontSize:10, marginRight:20}}>USERNAME@NAME.COM</Text>
            </View>
        </View>
        <View style = {{flexDirection:'row', alignSelf:'baseline', marginTop:30, marginLeft:30}}>
            <Ionicons name="md-map-sharp" size={24} color={colors.secondary} style = {{marginRight:10}}/>
            <View style = {{width:Dimensions.get('window').width/2}}>
                <Text style = {{fontSize:10}}>CLAY COURT</Text>
                <Text style = {{fontSize:10, marginRight:20}}>COURT NUMBER 7</Text>
            </View>
        </View>
        <View style = {{alignSelf:'flex-start'}}>
            <TouchableOpacity activeOpacity= {0.7} style = {{ marginLeft:30, marginTop:30, marginBottom:50}}>
                <Text type = "bold" style = {{ color:colors.primary, textDecorationLine:'underline'}}>ADD TO MY CALANDER</Text>
            </TouchableOpacity>
        </View>
        <View style = {{alignSelf:'flex-start', marginLeft:20}}>
            <Button 
                containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                title="CHECK MY BOOKINGS" 
                buttonStyle={{ width:150, height:35, backgroundColor: colors.primary, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                onPress={() => {this.gotoMyBookings();}}
                titleStyle = {{fontSize:10, color:colors.white}}
                />
        </View>
      </View>
    );
  }
}

export default BookingConfirmed;
