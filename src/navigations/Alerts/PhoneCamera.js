import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';

class PhoneCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  donnot = () => {
      this.props.navigation.navigate("HomeScreen");
      //console.log("Don't Allow");
  }

  allow = () => {
      this.props.navigation.navigate("HomeScreen");
      //console.log("Allow");
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.alertBox}>
            <Text type = "black" style = {styles.textTitle}>ALLOW ACCESS TO PHOTOS AND CAMERA</Text>
            <Text style = {styles.text}>THENNIS VENUE APP WOULD LIKE TO ACCESS YOUR PHOTOS & CAMERA YOUR PHOTOS & CAMERAS WILL BE USED TO UPLOAD PHOTOS ON YOUR PROFILE.</Text>
            <Divider style={styles.divider}></Divider>
            <View style = {styles.lowerContainer}>
                <TouchableOpacity activeOpacity = {0.7} onPress = {this.donnot}>
                    <Text  type = "light"  style = {styles.lowerText}>DON'T ALLOW</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = {0.7} onPress = {this.allow}>
                    <Text type = "light" style = {styles.lowerText}>ALLOW</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

export default PhoneCamera;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    alertBox:{
        padding:5,
        width:'80%',
        height:'25%',
        backgroundColor:'#fff',
        marginHorizontal:20,
        elevation:10,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:25
    },
    textTitle:{
        fontSize:14,
        paddingHorizontal:20,
        paddingTop:5,
        textAlign:'center',
        color:colors.primary
    },
    text:{
        fontSize:9,
        paddingVertical:10,
        width:'90%',
        textAlign: 'center',
    },
    divider:{
        height: 0.5,
        opacity:0.5, 
        width: '90%', 
        backgroundColor: colors.black,
        marginBottom:10
    },
    lowerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'stretch',
        alignItems:'center',
        
    },
    lowerText:{
        fontSize:16,
        color:colors.primary,
        paddingHorizontal:20
    }
})