import React, { Component } from 'react';
import { View, StyleSheet,TextInput, Image, SafeAreaView, StatusBar } from 'react-native';

import colors from '../Config/colors';
import Text from '../Config/CustomFont';

import {Ionicons} from '@expo/vector-icons';
import { Platform } from 'react-native';
import { Dimensions } from 'react-native';

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.top}>
            <View>
                <TextInput 
                    placeholder = "SEARCH FOR VENUES" 
                    onChangeText = {(val) => {this.setState({email: val})}} 
                    style = { styles.input } 
                />
            </View>
            <View>
                <Image source = {require('../assets/Icons/seachiconwhite.png')} style = {styles.image} />
            </View>   
            <View>
                <Image source = {require('../assets/Icons/notificationactive.png')} style = {styles.image} />
            </View>           
        </View>
    </SafeAreaView>
    );
  }
}

export default header;

const styles = StyleSheet.create({
    container:{
        marginTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'stretch'
      },
      input:{
        borderRadius:7.5, 
        borderColor: colors.black, 
        width:Dimensions.get('window').width/1.4, 
        height:35, 
        paddingHorizontal:20, 
        backgroundColor: colors.white,
        fontSize: 18,
      },
      image:{
          width:30,
          height:30,
          marginHorizontal:2.5
      }
})