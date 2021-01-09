import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ratings}from 'react-native-elements';

import { Rating } from "react-native-rating-element";

import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';

class RatethisVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  submitratings = () => {
    this.props.navigation.navigate("ThankYouForRatings");
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.alertBox}>
            <Text type = "black" style = {styles.textTitle}>RATE THIS VENUE</Text>
            <View style = {{marginVertical:10}}>
                <Rating
                    rated={4}
                    totalCount={5}
                    size={42}
                    onIconTap={position => console.log(`User pressed: ${position}`)}
                    direction="row"
                    type="custom" // default is always to "icon"
                    selectedIconImage={require('../../assets/Icons/BALL-2-391.png')}
                    emptyIconImage={require('../../assets/Icons/BALL-531.png')}
                />
            </View>
            <Divider style={styles.divider}></Divider>
            <View style = {styles.lowerContainer}>
                <TouchableOpacity activeOpacity = {0.7} onPress = {this.submitratings}>
                    <Text  type = "light"  style = {styles.lowerText}>SUBMIT RATINGS</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

export default RatethisVenue;

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
        alignItems:'center', 
    },
    lowerText:{
        fontSize:16,
        color:colors.primary,
        paddingHorizontal:20
    }
})