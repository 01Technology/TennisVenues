import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, FlatList, Linking, TouchableOpacity } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';

import Slider from '../../Components/HomeTab/Slider';
import cardContent from '../../utils/cardContent.json';
import CardItem from '../../Components/HomeTab/Card/CardItem';
import Header from '../../Components/Header';
import CurveHome from '../../Components/HomeTab/CurveHome';
import CEB from '../../Components/HomeTab/CEB';
import CovidUpdates from '../../Components/HomeTab/CovidUpdates';
import MatchTimerContainer from '../../Components/HomeTab/MatchTimerContainer';
import Text from '../../Config/CustomFont';
import colors from '../../Config/colors';
import urls from '../../utils/urls';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: 0
    }
  }

  searchPressed = () => {
    console.log("Searching....");
  }

  gotoPromotions = () => {
    this.props.navigation.navigate("Promotions");
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <CurveHome />
        <View style={styles.top}>
          <Header
            color="white"
            search={urls.whiteSearchIcon}
            searchPressed = {this.searchPressed}
            notifications={urls.notificationActive}
            notificaitonPressed  = {() => {this.props.navigation.navigate("NotificationsReminder");}}
          />
        </View>
        <View style={styles.userSection}>
          <View>
            <Avatar
              size="large"
              icon={{ name: 'user', type: 'font-awesome', color: colors.avatarPlaceholder, size: 62 }}
              rounded
              onPress={() => this.props.navigation.navigate("PhoneCamera")}
              overlayContainerStyle={{ backgroundColor: 'white', }}
            />
            <Badge
              containerStyle={styles.badgeContainer}
              backgroundColor="transparent"
              value={<Image source={urls.plusBadge}
                onPress={() => console.log("Works!")}
                style={styles.badge} />}
              badgeStyle={styles.badgeStyle}
            />
          </View>
          <View>
            <Text type="bold" style={styles.textGoodDayUser}>GOOD DAY,</Text>
            <Text type="bold" style={styles.textGoodDayUser}>USER! </Text>
          </View>
        </View>
        <View>
          <CEB />
          <CovidUpdates />
        </View>
        <View style={styles.nextmatchTextcontainer}>
          <Text type="black" style={styles.nextmatchText}>YOUR NEXT MATCH IS IN</Text>
        </View>
        <MatchTimerContainer />
        <Slider />
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
            renderItem={({ item, key }) => <CardItem
              key = {key}
              image={{ uri: item.url }}
              title={item.title}
              subTitle={item.subTitle}
              onPress={() =>
                this.props.navigation.navigate("Venues", { name: item.title, email: item.subTitle, url:item.url })
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
        <View style={styles.followusText}>
          <Text style={{ color: colors.primary }}>FOLLOW US ON SOCIAL MEDIA</Text>
        </View>
        <View style={styles.socialIconsCotainer}>
          <TouchableOpacity onPress={() => Linking.openURL(urls.facebook)}>
            <Entypo name="facebook-with-circle" size={32} color={colors.primary} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => Linking.openURL(urls.linkedin)}>
            <Entypo name="linkedin-with-circle" size={32} color={colors.primary} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  badge: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 4,
    width: 20,
    height: 20,
  },
  badgeStyle: {
    backgroundColor: 'transparent', borderWidth: 0
  },
  cardContainer: {
    marginHorizontal: 15,
    
  },
  followusText:{
    marginHorizontal: 20, 
    marginTop: 50, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  nextmatchTextcontainer:{
    marginHorizontal: 20, 
    alignSelf: 'flex-start'
  },
  nextmatchText:{
    color: colors.primary, 
    fontSize: 12 
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
  popularVenueContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginTop:'-15%',
    marginBottom:20,
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
  scrollView: {
    backgroundColor: 'transparent'
  },
  socialIconsCotainer:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical:20
  },
  socialIcon:{
    marginRight: 10 
  },
  textGoodDayUser:{
    fontSize: 28, 
    color: colors.white, 
    marginLeft: 20,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginHorizontal: 20
  },
  userSection: {
    paddingTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
})