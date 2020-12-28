import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image, Dimensions, TouchableOpacity,ImageBackground} from 'react-native';
import { Avatar, Card, Button,  } from 'react-native-elements';

import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';
import urls from '../../utils/urls';

import { Ionicons } from '@expo/vector-icons'; 

export default class Plus extends Component {

  render() {
    return (
    <ScrollView>
      <View style = {styles.container}>
      <ImageBackground source = {require('../../assets/Images/test2.png')} style = {{width:'100%', height:'45%', top:0, backgroundColor:'#229bd2'}}>
        <View style = {styles.top}>
          <View>
            <TextInput 
                placeholder = "SEARCH FOR VENUES" 
                onChangeText = {(val) => {this.setState({email: val})}} 
                style = { styles.input } 
            />
          </View> 
          <View>
              <Ionicons name="search" size={30} color={colors.white} />
          </View>
          <View>
              <Ionicons name="notifications" size={30} color={colors.white}/>
          </View>
        </View>
        <View style = {styles.promotionsforyouSection}>
          <View>
            <Text type = "bold" style = {styles.promotions}>PROMOTIONS</Text>
          </View>
          <View>
              <Text type = "bold" style = {styles.foryou}>FOR YOU!</Text>
          </View>
        </View>
        <View style = {styles.tennisballRacketContainer}>
          <Image source = {require('../../assets/Icons/BALL-531.png')} style = {styles.leftBall}/>
          <Image source = {require('../../assets/Icons/RACKET-52.png')} style = {styles.racket}/>
          <Image source = {require('../../assets/Icons/BALL-531.png')} style = {styles.centerBall} />
          <Image source = {require('../../assets/Icons/BALL-531.png')} style = {styles.rightBall} />
        </View>
      </ImageBackground>
        <View style = {styles.sectionContainer}>
          <View style = {styles.boxRowContainer}>
            <ImageBackground source={require('../../assets/Images/Rectangle75.png')} style = {styles.box}  imageStyle={styles.boxRadius}>
              <View style = {styles.boxTextContainer}>
                <Text type = "bold" style = {styles.textOffer}>Hey There </Text>
                <Text type = "thin" style = {styles.textOfferContent}>Hey there this iss lorem ipsums </Text>
              </View>
            </ImageBackground>
            <ImageBackground source={require('../../assets/Images/Rectangle76.png')} style = {styles.box}  imageStyle={styles.boxRadius}>
              <View style = {styles.boxTextContainer}>
                <Text type = "bold" style = {styles.textOffer}>Hey there </Text>
                <Text type = "thin" style = {styles.textOfferContent}>Hey there this iss lorem ipsums </Text>
              </View>
            </ImageBackground>
          </View>
          <View style = {styles.boxRowContainer}>
            <ImageBackground source={require('../../assets/Images/Rectangle77.png')} style = {styles.box}  imageStyle={styles.boxRadius}>
              <View style = {styles.boxTextContainer}>
                <Text type = "bold" style = {styles.textOffer}>Hey there </Text>
                <Text type = "thin" style = {styles.textOfferContent}>Hey there this iss lorem ipsums </Text>
              </View>
            </ImageBackground>
            <ImageBackground source={require('../../assets/Images/Rectangle78.png')} style = {styles.box}  imageStyle={styles.boxRadius}>
              <View style = {styles.boxTextContainer}>
                <Text type = "bold" style = {styles.textOffer}>Hey there </Text>
                <Text type = "thin" style = {styles.textOfferContent}>Hey there this iss lorem ipsums </Text>
              </View>
            </ImageBackground>
          </View>
          <View style = {styles.boxRowContainer}>
            <ImageBackground source={require('../../assets/Images/Rectangle79.png')} style = {styles.box}  imageStyle={styles.boxRadius}>
              <View style = {styles.boxTextContainer}>
                <Text type = "bold" style = {styles.textOffer}>Hey there </Text>
                <Text type = "thin" style = {styles.textOfferContent}>Hey there this iss lorem ipsums </Text>
              </View>
            </ImageBackground>
            <ImageBackground source={require('../../assets/Images/Rectangle80.png')} style = {styles.box}  imageStyle={styles.boxRadius}>
              <View style = {styles.boxTextContainer}>
                <Text type = "bold" style = {styles.textOffer}>Hey there </Text>
                <Text type = "thin" style = {styles.textOfferContent}>Hey there this iss lorem ipsums </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  boxRowContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20
  },
  box:{
    width: Dimensions.get('window').width/2.5,
    height: Dimensions.get('window').height/4.5,
    backgroundColor:'red',
    justifyContent:'flex-end',
    alignItems:'center',
    borderRadius: 6, 
    overflow: 'hidden'
  },
  boxRadius:{
    borderRadius:12
  },
  boxTextContainer:{
    backgroundColor:colors.secondary,
    opacity:0.7,
    paddingHorizontal:10,
    paddingVertical:5,
    justifyContent:'space-between',
    maxHeight:50,
  },
  foryou:{
    fontSize:28, color:colors.white, marginLeft:20,
  },
  top:{
    marginTop:25,
    padding:10,
    flexDirection:'row',
    marginLeft:10,
    justifyContent:'space-between',
    alignSelf:'stretch'
  },
  input:{
    borderRadius:12, 
    borderColor: colors.black, 
    width:250, 
    borderWidth: 0.5,
    height:35, 
    paddingHorizontal:30, 
    fontSize: 18,
    marginLeft:0,
    backgroundColor:colors.white,
  },
  image:{
    resizeMode:"cover", width:169, height:101, borderRadius: 12,shadowColor: "#000", 
  },
  topCurve:{
    backgroundColor:colors.primary, 
    width:'100%', 
    height:'40%',
  },  
  textOffer:{
    color:colors.white
  },
  textOfferContent:{
    fontSize:10
  },
  bottomCurve:{

  },
  promotionsforyouSection:{
    marginRight:20,
    alignItems:'flex-end',
    marginVertical:20,
  },
  promotions:{
    fontSize:28, 
    color:colors.white, 
    marginLeft:20, 
    marginBottom:10,
  },
  sectionContainer:{
    backgroundColor:colors.white,
    paddingHorizontal:20,
    paddingVertical:20,
    justifyContent:'space-between',
    top:-260
  },
  tennisballracketContainer:{
    flexDirection:'row', position:'absolute', justifyContent:'flex-start', alignItems:'center', top:70, marginHorizontal:20
  },
  leftBall:{
    width:25, height:25, resizeMode:'contain', top:-80, left:20
  },
  racket:{
     width:200, height:180,top:-150,
  },
  centerBall:{
    width:50, height:50, alignSelf:'center', position:'absolute', top:-50,
  },
  rightBall:{
    width:25, height:25, bottom:50, position:'absolute',
  },
})