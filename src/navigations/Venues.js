import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Image, Linking, Dimensions, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { Button, Card } from 'react-native-elements';

import { Rating } from "react-native-rating-element";

import colors from '../Config/colors';
import SliderForVenue from '../Components/SliderForVenue';
import Text from '../Config/CustomFont';
import ReviewSlider from '../Components/ReviewSlider';

import { Entypo } from '@expo/vector-icons';
import { Platform } from 'react-native';

import ReviewBall from "../Components/ReviewBall";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const images = [
  {
    "id":1,
    "title":"Lorem ipsum dolor sit amet",
    "location":"Etiam non lectus id ets elwsa yseis.",
    "url":"https://cardContent.pexels.com/photos/342361/pexels-photo-342361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
      "id":2,
      "title":"Lorem2 ipsum2 dolor sit amet",
      "location":"Etiam non lectus id ets elwsa yseis",
      "url":"https://cardContent.pexels.com/photos/1277397/pexels-photo-1277397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
      "id":3,
      "title":"Lorem3 ipsum3 dolor sit amet",
      "location":"Etiam non lectus id ets elwsa yseis",
      "url":"https://cardContent.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
      "id":4,
      "title":"Lorem4 ipsum4 dolor sit amet",
      "location":"Etiam non lectus id ets elwsa yseis",
      "url":"https://cardContent.pexels.com/photos/2568551/pexels-photo-2568551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
]

class Venues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.route.params.name,
      email: props.route.params.email,
      contactNo: `(07)3214 3800`,
      website: 'www.queenslandtenniscentre.com.au',
      active:0,
    };
  }

  gotoWriteReview = () => {
    this.props.navigation.navigate('WriteReview');
  }

  gotoRateThisVenue = () => {
    this.props.navigation.navigate("RatethisVenue")
  }

  backChevronPressed = () => {
    this.props.navigation.navigate("HomeScreen");
  }

  _renderItem = ({item}) => {
    return(
        <Card image = {{uri:item.url}} >
        <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <View>
              <Text style = {{fontWeight:'bold'}}>{item.title}</Text>
              <Text style = {{fontSize:12,}}>{item.email}</Text>
              <View style = {{flexDirection:'row',}}>
                <ReviewBall />
                <Image source = {require('../assets/Icons/BALL-531.png')} style ={{width:20, height:20}} />
              </View>
          </View>
          <View>
              <Button 
                containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                title="BOOK THIS COURT" 
                buttonStyle={{ width:100, height:35, backgroundColor: colors.smokewhite, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                onPress={()=> {this.props.navigation.navigate("Venues", {name: item.title, email:item.email})} }
                //onPress={()=> {this.gotoVenue({item}) }}
                titleStyle = {{fontSize:8, color:colors.primary, fontFamily:'Lato-Regular'}}
              />
          </View>
        </View>
      </Card>
    );
}

change = ({nativeEvent}) => {
  const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
  if(slide!==this.state.active){
    this.setState({active:slide});
  }
}

  render() {
    return (
      <SafeAreaView style = {styles.container}>
        <TouchableOpacity activeOpacity = {0.7} style={[styles.backChevronContainer, {zIndex:999}]} onPress={() => { this.backChevronPressed() }}>
          <Entypo name="chevron-thin-left" size={30} color={colors.primary}  />
        </TouchableOpacity>
        <ScrollView>
          <View>
            <View>
              <SliderForVenue />
            </View>
            <View style={styles.venueContainer}>
              <ImageBackground style={styles.venueInfoContainer} source={require('../assets/Images/test2.png')}>
                <View style={styles.venueinfoTop}>
                  <Text type="black" style={styles.topic}>{this.state.name}</Text>
                  <View style={styles.rightIcon}>
                    <Image source={require('../assets/Icons/share-071.png')} style={[styles.icon, { marginRight: 15 }]} />
                    <Image source={require('../assets/Icons/liked-052.png')} style={styles.icon} />
                  </View>
                </View>
                <View style={styles.locationContainer}>
                  <Image source={require('../assets/Icons/location-048.png')} style={[styles.icon, { marginRight: 5 }]} />
                  <Text type="thin" style={styles.location}>{this.state.email}</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.contact}>
            <Text>{this.state.contactNo}</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL(`https://${this.state.website}/`)}>
              <Text style={styles.navigateText}>{this.state.website}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.facilities}>
            <Text type="black" style={styles.commonTextStyle}>FACILITIES</Text>
            <View style={styles.facilityContainer}>
              <View style={styles.court}>
                <Image source={require('../assets/Icons/COURT-133.png')} style={styles.icon} />
                <Text type="lite" style={styles.facilityinsideText}>23 INTERNATIONAL STANDARD COURTS INCLUDING CLAY</Text>
              </View>
              <View style={styles.court}>
                <Image source={require('../assets/Icons/COURT-133.png')} style={styles.icon} />
                <Text type="lite" style={styles.facilityinsideText}>PROSHOP</Text>
              </View>
            </View>
            <View style={styles.facilityContainer}>
              <View style={styles.court}>
                <Image source={require('../assets/Icons/COURT-133.png')} style={styles.icon} />
                <Text type="lite" style={styles.facilityinsideText}>GRASS HARDCOURT SURFACE</Text>
              </View>
              <View style={styles.court}>
                <Image source={require('../assets/Icons/COURT-133.png')} style={styles.icon} />
                <Text type="lite" style={styles.facilityinsideText}>FUNCTION VENUES</Text>
              </View>
            </View>
          </View>
          <View style={styles.facilities}>
            <Text type="black" style={styles.commonTextStyle}>PRICES</Text>
            <View style={styles.pricesContainer}>
              <View style={{ width: '45%' }}>
                <Text type="bold" style={{ fontSize: 11 }}>COVERED HARD COURTS (COURT 1-2)</Text>
                <Text style={{ fontSize: 11 }}>$40 off peak</Text>
                <Text style={{ fontSize: 11 }}>$60 peak</Text>
              </View>
              <View style={{ width: '45%' }}>
                <Text type="bold" style={{ fontSize: 11 }}>CLAY COURTS (COURT 17-21)</Text>
                <Text style={{ fontSize: 11 }}>$24 off peak</Text>
                <Text style={{ fontSize: 11 }}>$29 peak</Text>
              </View>
            </View>
            <View style={styles.pricesContainer}>
              <View style={{ width: '45%' }}>
                <Text type="bold" style={{ fontSize: 11 }}>OUTSIDE HARD COURTS (COURT 3-16)</Text>
                <Text style={{ fontSize: 11 }}>$24 OFF PEAK</Text>
                <Text style={{ fontSize: 11 }}>$40 peak</Text>
              </View>
              <View style={{ width: '45%' }}>
                <Text type="bold" style={{ fontSize: 11 }}>GRASS COURTS (COURT 1-2)</Text>
                <Text style={{ fontSize: 11 }}>AVAILABLE 10 AM-5PM DAILY</Text>
                <Text style={{ fontSize: 11 }}>$40</Text>
              </View>
            </View>
            <View style={styles.pricesContainer}>
              <View style={{ width: '45%' }}>
                <Text type="bold" style={{ fontSize: 11 }}>PART RAFTER ARENA</Text>
                <Text style={{ fontSize: 11 }}>$100 off peak</Text>
                <Text style={{ fontSize: 11 }}>$120 peak</Text>
              </View>
            </View>
          </View>
          <View style={styles.mapContainer}>
            <Text type="black" style={styles.commonTextStyle}>MAP</Text>
          </View>
          <View style={styles.reviewContainer}>
            <Text type="black" style={styles.commonTextStyle}>REVIEWS</Text>
            <ReviewSlider />
          </View>
          <TouchableOpacity style={{ marginVertical:25 }} onPress = {()=>{this.gotoWriteReview();}}>
            <Text style = {[styles.navigateText, {alignSelf:'flex-end', right:20}]}>WRITE A REVIEW</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginHorizontal: 20, }}>
            <TouchableOpacity>
              <Text type="black" style={{ color: colors.primary, alignSelf: 'flex-start', marginRight: 150 }}>POPULAR VENUE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.gotoPromotions() }}>
              <Text style={{ color: colors.primary }}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.cardSliderContainer, {marginBottom:100}]}>
            <View>      
                <FlatList 
                    data = {images}
                    renderItem = { this._renderItem }
                    keyExtractor = {(item, index) => index.toString()}
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false}
                    onScroll = {this.change}
                />
            </View>
            <View style = {styles.pagination}>
                {
                images.map((i,k) => {
                    return(
                    <Text key = {k} style = { k ==this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                    );
                })
                }
            </View>
        </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <View>
            <View style = {{flexDirection:'row', alignItems:'center'}}>
              <Text type = "black">RATINGS</Text>
              <Rating
                  rated={4}
                  totalCount={5}
                  size={24}
                  onIconTap={position => console.log(`User pressed: ${position}`)}
                  direction="row"
                  type="custom" // default is always to "icon"
                  selectedIconImage={require('../assets/Icons/BALL-2-391.png')}
                  emptyIconImage={require('../assets/Icons/BALL-531.png')}
              />
            </View>
            <TouchableOpacity activeOpacity= {0.7} onPress = {() => {this.gotoRateThisVenue();}}>
              <Text style = {[styles.navigateText,{fontSize:11}]}>RATE THIS VENUE</Text>
            </TouchableOpacity>
          </View>
          <View style = {{alignItems:'center', justifyContent:'center'}}>
              <Button 
                  containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                  title="BOOK THIS COURT" 
                  buttonStyle={{ width:100, height:25, backgroundColor: colors.primary, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}
                  onPress={()=> {this.props.navigation.navigate("BookTheCourt", {name: this.state.name, email:this.state.email})} }
                  //onPress={()=> {this.gotoVenue({item}) }}
                  titleStyle = {{fontSize:8, color:colors.white, fontFamily:'Lato-Regular'}}
                />
            </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Venues;

const styles = StyleSheet.create({
  backChevronContainer: {
    position:'absolute',
    top:50,
    left: 20,
  },
  bottomContainer:{
    padding:5,
    bottom:0,
    flexDirection:'row',
    position:'absolute',
    justifyContent:'space-between',
    backgroundColor:colors.white,
    width:'100%',
    height:'8%'
  },
  contact: {
    marginHorizontal: 20,
    marginVertical: 15
  },
  container:{
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  court: {
    flexDirection: 'row',
    width: '50%',
  },
  facilities: {
    marginHorizontal: 20,
    marginVertical: 15
  },
  facilityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  commonTextStyle: {
    fontSize: 14,
    color: colors.primary,
    marginVertical: 10
  },
  facilityinsideText: {
    marginLeft: 15,
    fontSize: 12,
    alignItems: 'baseline'
  },
  topic: {
    fontSize: 18,
    width: '40%',
    color: colors.white
  },
  locationContainer: {
    paddingVertical: 15,
    flexDirection: 'row'
  },
  location: {
    fontSize: 12,
    width: '40%',
    color: colors.white
  },
  mapContainer: {
    marginHorizontal: 20,
    marginBottom: 100,
  },
  rightIcon: {
    flexDirection: 'row',
  },
  icon: {
    top:-5,
    width: 28,
    height: 28,
  },
  pricesContainer: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginVertical: 10
  },
  reviewContainer: {
    marginHorizontal: 20
  },
  reviewBoxContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    backgroundColor: colors.white,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },
  venueContainer: {
    backgroundColor: colors.primary,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 5,
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  venueInfoContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 5,
    resizeMode: 'contain',
    padding: 20,
  },
  venueinfoTop: {
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  navigateText: {
    color: colors.primary,
    textDecorationLine: 'underline',
    fontSize:14,
  },
  
  //FOR FLATLIST
  cardSliderContainer:{
    marginBottom:20,
    width, 
    height:height/2.7
  },
  scroll:{
    marginTop:20,
    width, 
    height
  },
  image:{
    width, height, resizeMode: 'contain'
  },
  pagination:{
    flexDirection:'row', 
    position:'absolute', 
    bottom:0,
    alignSelf:'center' 
  },
  pagingText:{
    color:'white',
    margin:3,
    color:colors.primary,
    opacity: 0.5
  },
  pagingActiveText:{
    color:'white',
    margin:3,
    color:colors.primary
  }
})