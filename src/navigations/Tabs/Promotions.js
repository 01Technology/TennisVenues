import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions,ImageBackground} from 'react-native';

import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';
import Header from '../../Components/Header';

export default class Plus extends Component {

  render() {
    return (
    <ScrollView>
      <ImageBackground source = {require('../../assets/Images/test.jpg')} style = {styles.topImageBackground}>
        <View style = {styles.top}>
          <Header
              color="white"
              search={require('../../assets/Icons/seachiconwhite.png')}
              notifications={require('../../assets/Icons/notificationactive.png')}
              notificaitonPressed = {()=>(this.props.navigation.navigate("NotificationsReminder"))}
            />
        </View>
        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
          <View style = {styles.tennisballracketContainer}>
            <Image source = {require('../../assets/Icons/BALL-531.png')} style = {styles.leftBall}/>
            <Image source = {require('../../assets/Icons/RACKET-52.png')} style = {styles.racket}/>
            <Image source = {require('../../assets/Icons/BALL-531.png')} style = {styles.centerBall} />
            <Image source = {require('../../assets/Icons/BALL-531.png')} style = {styles.rightBall} />
          </View>
          <View style = {styles.promotionsforyouSection}>
            <View>
              <Text type = "bold" style = {styles.promotions}>PROMOTIONS</Text>
            </View>
            <View>
                <Text type = "bold" style = {styles.foryou}>FOR YOU!</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
        <View style = {styles.sectionContainer}>
          <View style = {styles.boxRowContainer}>
            <ImageBackground source={require('../../assets/Images/Rectangle75.png')} style = {styles.box}>
              <View style = {styles.boxTextContainer}>
                <Text type = "bold" style = {styles.textOffer}>Hey There </Text>
                <Text type = "thin" style = {styles.textOfferContent}>Hey there this iss lorem ipsums </Text>
              </View>
            </ImageBackground>
            <ImageBackground source={require('../../assets/Images/Rectangle76.png')} style = {styles.box}>
              <View style = {styles.boxTextContainer}>
                <Text type = "bold" style = {styles.textOffer}>Hey there </Text>
                <Text type = "thin" style = {styles.textOfferContent}>Hey there this iss lorem ipsums </Text>
              </View>
            </ImageBackground>
          </View>
          <View style = {styles.boxRowContainer}>
            <ImageBackground source={require('../../assets/Images/Rectangle77.png')} style = {styles.box}>
              <View style = {styles.boxTextContainer}>
                <Text type = "bold" style = {styles.textOffer}>Hey there </Text>
                <Text type = "thin" style = {styles.textOfferContent}>Hey there this iss lorem ipsums </Text>
              </View>
            </ImageBackground>
            <ImageBackground source={require('../../assets/Images/Rectangle78.png')} style = {styles.box}>
              <View style = {styles.boxTextContainer}>
                <Text type = "bold" style = {styles.textOffer}>Hey there </Text>
                <Text type = "thin" style = {styles.textOfferContent}>Hey there this iss lorem ipsums </Text>
              </View>
            </ImageBackground>
          </View>
          <View style = {styles.boxRowContainer}>
            <ImageBackground source={require('../../assets/Images/Rectangle79.png')} style = {styles.box}>
              <View style = {styles.boxTextContainer}>
                <Text type = "bold" style = {styles.textOffer}>Hey there </Text>
                <Text type = "thin" style = {styles.textOfferContent}>Hey there this iss lorem ipsums </Text>
              </View>
            </ImageBackground>
            <ImageBackground source={require('../../assets/Images/Rectangle80.png')} style = {styles.box}>
              <View style = {styles.boxTextContainer}>
                <Text type = "bold" style = {styles.textOffer}>Hey there </Text>
                <Text type = "thin" style = {styles.textOfferContent}>Hey there this iss lorem ipsums </Text>
              </View>
            </ImageBackground>
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
    marginBottom:20,
    overflow:'hidden'
  },
  box:{
    width: Dimensions.get('window').width/2.5,
    height: Dimensions.get('window').height/4.5,
    backgroundColor:'red',
    justifyContent:'flex-end',
    alignItems:'stretch',
    borderRadius: 6, 
    overflow: 'hidden',
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
    padding:10,
    flexDirection:'row',
    marginLeft:10,
    justifyContent:'space-between',
    //alignSelf:'stretch'
  },
  topImageBackground:{
    width:'100%', 
    height:Dimensions.get('window').height/3, 
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
    resizeMode:"cover", 
    width:169, 
    height:101, 
    borderRadius: 12,
    shadowColor: "#000", 
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
  },
  tennisballracketContainer:{
    flexDirection:'row', 
    justifyContent:'flex-start', 
  },
  leftBall:{
    width:25, height:25, left:10, top:20
  },
  racket:{
     width:Dimensions.get('window').width/3, height:Dimensions.get('window').height/5,
     position:'absolute',
     left:-20,
  },
  centerBall:{
    width:50, height:50, position:'absolute', bottom:-30, left:70,
  },
  rightBall:{
    width:25, height:25, left:'80%', top:'150%'
  },
})