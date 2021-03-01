import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, ScrollView, TouchableOpacity, ImageBackground, Image, Linking, Dimensions, FlatList } from 'react-native';

import { Rating } from "react-native-rating-element";

import AppButton from '../Components/AppButton';
import BackChevron from '../Components/BackChevron';
import colors from '../Config/colors';
import SliderForVenue from '../Components/SliderForVenue';
import Text from '../Config/CustomFont';
import ReviewSlider from '../Components/ReviewSlider';
import cardContent from '../utils/cardContent.json';
import CardItem from '../Components/HomeTab/Card/CardItem';

class Venues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.route.params.name,
      email: props.route.params.email,
      url:props.route.params.url,
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

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  backChevronPressed = () => {
    this.props.navigation.navigate("HomeScreen");
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <View>
              <SliderForVenue />
              <BackChevron style = {[styles.backChevron, {zIndex:999}]} onPress={() => { this.backChevronPressed()}} color = "primary"/>
            </View>
            <View style={styles.venueContainer}>
              <ImageBackground style={styles.venueInfoContainer} source={require('../assets/Images/test2.png')}>
                <View style={styles.venueinfoTop}>
                  <Text type="bold" style={styles.topic}>{this.state.name}</Text>
                  <View style={styles.rightIcon}>
                    <Image source={require('../assets/Icons/share-071.png')} style={[styles.icon, { marginRight: 15 }]} />
                    <Image source={require('../assets/Icons/liked-052.png')} style={styles.icon} />
                  </View>
                </View>
                <View style={styles.locationContainer}>
                  <Image source={require('../assets/Icons/location-048.png')} style={[styles.icon, { marginRight: 5 }]} />
                  <Text type="light" style={styles.location}>{this.state.email}</Text>
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
                <Text type = "light" style={{ fontSize: 11 }}>$40 off peak</Text>
                <Text type = "light" style={{ fontSize: 11 }}>$60 peak</Text>
              </View>
              <View style={{ width: '45%' }}>
                <Text type="bold" style={{ fontSize: 11 }}>CLAY COURTS (COURT 17-21)</Text>
                <Text type = "light" style={{ fontSize: 11 }}>$24 off peak</Text>
                <Text type = "light" style={{ fontSize: 11 }}>$29 peak</Text>
              </View>
            </View>
            <View style={styles.pricesContainer}>
              <View style={{ width: '45%' }}>
                <Text type="bold" style={{ fontSize: 11 }}>OUTSIDE HARD COURTS (COURT 3-16)</Text>
                <Text type = "light" style={{ fontSize: 11 }}>$24 OFF PEAK</Text>
                <Text type = "light" style={{ fontSize: 11 }}>$40 peak</Text>
              </View>
              <View style={{ width: '45%' }}>
                <Text type="bold" style={{ fontSize: 11 }}>GRASS COURTS (COURT 1-2)</Text>
                <Text type = "light" style={{ fontSize: 11 }}>AVAILABLE 10 AM-5PM DAILY</Text>
                <Text type = "light" style={{ fontSize: 11 }}>$40</Text>
              </View>
            </View>
            <View style={styles.pricesContainer}>
              <View style={{ width: '45%' }}>
                <Text type="bold" style={{ fontSize: 11 }}>PART RAFTER ARENA</Text>
                <Text type = "light" style={{ fontSize: 11 }}>$100 off peak</Text>
                <Text type = "light" style={{ fontSize: 11 }}>$120 peak</Text>
              </View>
            </View>
          </View>
          <View style={styles.mapContainer}>
            <Text type="black" style={styles.commonTextStyle}>MAP</Text>
          </View>
          <View style={styles.reviewContainer}>
            <Text type="black" style={[styles.commonTextStyle, {marginVertical:20}]}>REVIEWS</Text>
            <ReviewSlider />
          </View>
          <TouchableOpacity style={{ marginVertical:25 }} onPress = {()=>{this.gotoWriteReview();}}>
            <Text style = {[styles.navigateText, {alignSelf:'flex-end', right:20}]}>WRITE A REVIEW</Text>
          </TouchableOpacity>
          <View style = {styles.popularVenueContainer}>
            <Text type = "black" style = {styles.popularVenue}>popular venues</Text>
            <Text style = {styles.seeAll}>see all</Text>
          </View>
          <View style={styles.cardContainer}>
          <FlatList
            nestedScrollEnabled = {true}
            horizontal
            onScroll={this.change}
            showsHorizontalScrollIndicator={false}
            data={cardContent}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <CardItem
              image={{ uri: item.url }}
              title={item.title}
              subTitle={item.subTitle}
              onPress={() => this.setState({name:item.title, email:item.subTitle, url:item.url})  
              }
            />
            }
          />
          <View style={styles.pagination}>
            {
              cardContent.map((i, k) => {
                return (
                  <Text key={k} style={k == this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                );
              })
            }
          </View>
        </View>
        <View style = {{height:100}}/>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <View style = {{justifyContent:'center', alignItems:'center'}}>
            <View style = {{ flexDirection:'row', alignItems:'center'}}>
              <Text type = "black" style = {{paddingHorizontal:10}}>RATINGS</Text>
              <Rating
                  rated={4}
                  totalCount={5}
                  size={24}
                  onIconTap={position => console.log(`User pressed: ${position}`)}
                  direction="row"
                  type="custom"
                  selectedIconImage={require('../assets/Icons/BALL-2-391.png')}
                  emptyIconImage={require('../assets/Icons/BALL-531.png')}
              />
            </View>
            <TouchableOpacity style = {{alignSelf:'flex-start', paddingLeft:10}} activeOpacity= {0.7} onPress = {() => {this.gotoRateThisVenue();}}>
              <Text style = {[styles.navigateText,{fontSize:11,}]}>RATE THIS VENUE</Text>
            </TouchableOpacity>
          </View>
          <View style = {{alignItems:'center', justifyContent:'center', paddingRight:10}}>
            <AppButton 
                color = "white"
                title = "book this court"
                buttonStyle = {styles.buttonStyle}
                titleStyle = {styles.titleStyle}
                onPress = {() => {this.props.navigation.navigate("BookTheCourt", {name: this.state.name, email:this.state.email, url:this.state.url})}}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Venues;

const styles = StyleSheet.create({
  backChevron:{
    position:'absolute',
    top:StatusBar.currentHeight,
    left:20
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
  buttonStyle:{
    backgroundColor:colors.primary,
    width:120, 
    height:35, 
    borderWidth:1
  },  
  cardContainer: {
    marginHorizontal: 20,
  },
  contact: {
    marginHorizontal: 20,
    marginVertical: 15
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
    fontSize: 24,
    width: '60%',
    color: colors.white,
    textTransform:'uppercase'
  },
  titleStyle:{
    fontSize:10,
    color:colors.white,
  },
  locationContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'center',
  },
  location: {
    fontSize: 12,
    width: '40%',
    color: colors.white,
    textTransform:'capitalize'
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
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -30,
    alignSelf: 'center'
  },
  pagingText: {
    margin: 1,
    fontSize: 14,
    color: colors.primary,
    opacity:0.5
  },
  pagingActiveText: {
    color: 'white',
    margin: 1,
    fontSize: 14,
    color: colors.primary
  },
  pricesContainer: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginVertical: 10
  },
  popularVenueContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginVertical:20
  },
  popularVenue:{
    fontSize:12,
    textTransform:'uppercase',
    color:colors.primary
  },
  seeAll:{
    fontSize:12,
    textTransform:'uppercase',
    color:colors.primary
  },
  reviewContainer: {
    marginHorizontal: 20,
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
})