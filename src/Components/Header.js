import React from 'react';
import { TextInput,View, Image, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';

import Text from '../Config/CustomFont';
import colors from '../Config/colors';

function Header({placeholder = "SEARCH FOR VENUES", color = "white", search, notifications,searchPressed, notificaitonPressed}) {
      return (
        <SafeAreaView style = {styles.contianer}>
          <TextInput 
            placeholder = {placeholder}
            style={[styles.inputStyle,{backgroundColor:colors[color]}]}
          />
          <View style = {{flexDirection:'row', width:'22%', justifyContent:'space-evenly'}}>
            <TouchableOpacity onPress = {searchPressed}>
              <Image source = {search} style = {styles.image} />
            </TouchableOpacity>
            <TouchableOpacity onPress = {notificaitonPressed}>
              <Image source = {notifications} style = {styles.image} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  contianer:{
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flexDirection:'row',
  },
  inputStyle:{ 
    height: 45, 
    borderColor: colors.primary, 
    borderWidth: 1,
    borderRadius:12 ,
    fontSize:20,
    paddingLeft:20,
    fontFamily:'Lato-Light',
    width:'78%',
  },
  image:{
    width:36, 
    height:36,
    alignSelf:'center',
  }
})

export default Header;