import React, { Component } from 'react';
import { View, StyleSheet,ScrollView, Image, Dimensions} from 'react-native';
import { Avatar, Badge } from 'react-native-elements';

import Header from '../../Components/Header';
import Slider from '../../Components/Slider';
import CardSlider from '../../Components/CardSlider';

import Text from '../../Config/CustomFont';
import colors from '../../Config/colors';

import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

class MyBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  BOOKTHISCOURT = () => {
    this.props.navigation.navigate("BookTheCourt", {name:"Test Court Name", email:'Test Court Locatiooooooooooon'})
  }

  gotoPromotions = () => {
    this.props.navigation.navigate("Promotions");
  }
  render() {
    return (
      <ScrollView style={{flex: 1,backgroundColor:colors.white}}>
        <View style = {{alignItems:'center', justifyContent:'space-between'}}>
        <View style={styles.curvedbackgroundViewStyle}>
        </View>
        <View style={styles.curvedforegroundViewStyle}>
        </View>
        <View style = {{marginLeft:20, marginRight:20}}>
          <Header />
        </View>
        <View style = {styles.userSection}>
            <View>
                <Avatar 
                  size="large"  
                  icon={{name: 'user', type: 'font-awesome', color:colors.avatarPlaceholder,size:62}} 
                  rounded titleStyle ={{color:'black', fontSize:25}} 
                  onPress={() => console.log("Works!")} 
                  overlayContainerStyle={{backgroundColor: 'white'}}
                  />
                
                  <Badge containerStyle={{ position: 'absolute', bottom: 0, right: 4, width:20, height:20, }} value = {<Image source = {require('../../assets/Icons/PLUS-202.png')} style = {{width:20, height:20,}} />} />
            </View>
            <View>
                <Text type = "bold" style = {{fontSize:28, color:colors.white, marginLeft:20, }}>GOOD DAY,</Text>
                <Text type = "bold" style = {{fontSize:28, color:colors.white, marginLeft:20,}}>USER! </Text>
            </View>
        </View>
        <View style = {styles.CEB}>
            <View style = {styles.cebConainer}>
              <Image source = {require('../../assets/Icons/location-048.png')} style = {{width:36,height:36}}/>
              <Text type = "light" style = {{fontSize:8}}>COURTS NEARBY</Text>
            </View>
            <View style = {styles.cebConainer}>
              <MaterialIcons name="sports-kabaddi" size={36} color={colors.secondary} />
              <Text type = "light" style = {{fontSize:8}}>Events</Text>
            </View>
            <View style = {styles.cebConainer}>
              <FontAwesome5 name="redhat" size={36} color={colors.secondary} />
              <Text type = "light" style = {{fontSize:8}}>Brands</Text>
            </View>
        </View>
        <View style = {styles.covidUpdates}>
          <View style = {{paddingRight:20}}>
            <Text type = "black" style = {{fontSize:11, color:colors.secondary}}>COVID-19 UPDATES FOR COMMUNITY</Text>
          </View>
          <View style = {{paddingRight:20}}>
            <Text style = {{fontSize:8, color:colors.secondary }}>Lorsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</Text>
          </View>
        </View>
        <View style = {{marginHorizontal:20, alignSelf:'flex-start'}}>
          <Text type = "black" style = {{ color:colors.primary, fontSize:12 }}>YOUR NEXT MATCH IS IN</Text>
        </View>
        <View style = {styles.matchtimerContainer}>
            <View style = {{justifyContent:'center', alignItems:'center', padding:20}}>
              <View>
                <Text type = "black" style = {{fontSize:30, color:colors.primary}}>47 : 16</Text>
              </View>
              <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                <Text  type = "light" style = {{fontSize:10}}>HOURS     </Text>
                <Text type = "light" style = {{fontSize:10}}>MINUTES</Text>
              </View>
            </View>
            <View style = {{padding:20, marginHorizontal:20}}>
              <Text>|</Text>
              <Text>|</Text>
              <Text>|</Text>
            </View>
            <View style = {{paddingHorizontal:20, justifyContent:'center'}}>
              <View>
                <Text type = "bold" style = {{fontSize:10 }}>MARCH -7 2021, 3 PM</Text>
              </View>
              <View>
                <Text type = "bold" style = {{ fontSize:12 }}>QUEENSLAND TENNIS CENTER</Text>
              </View>
              <View style = {{flexDirection:'row', alignItems:'center'}}>
                <Image source = {require('../../assets/Icons/location-048.png')} style= {{width:16, height:16}}/>
                <Text type = "light" style = {{ fontSize:8 , marginLeft:10}}>MARCH -7 2021, 3 PM</Text>
              </View>
            </View>
        </View>
        <View style = {styles.advertisings}>
          <Slider />
        </View>
        <View style = {{ flex:1, flexDirection:'row', justifyContent:'center', alignItems:'stretch', marginHorizontal:20,}}>
          <TouchableOpacity>
            <Text type = "black" style = {{ color:colors.primary, alignSelf:'flex-start', marginRight:150 }}>POPULAR VENUE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {()=>{this.gotoPromotions()}}>
            <Text style = {{ color:colors.primary }}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardSlider />
        </View>
        
        <View style = {{marginHorizontal:20, marginVertical:20, justifyContent:'center', alignItems:'center'}}>
          <Text style = {{color:colors.primary}}>FOLLOW US ON SOCIAL MEDIA</Text>
        </View>
        <View style = {{ flexDirection:'row', justifyContent:'center', alignItems:'center', marginVertical:20}}>
          <Entypo name="facebook-with-circle" size={32} color={colors.primary} style = {{marginRight:10}} />
          <Entypo name="linkedin-with-circle" size={32} color={colors.primary} style = {{marginLeft:10}}  />
        </View>
      </View>
    </ScrollView>
    );
  }
}

export default MyBookings;
const styles = StyleSheet.create({
  covidUpdates:{
    height:80,
    backgroundColor:colors.white,
    marginVertical:20,
    justifyContent:'space-evenly',
    paddingHorizontal:20,
    alignSelf:'stretch',
    elevation:20,
    marginHorizontal:20,
  },
  curvedforegroundViewStyle:{
    position:'absolute',
    backgroundColor: colors.primary, 
    width: '180%', 
    height: '80%', 
    borderBottomLeftRadius: 220, 
    borderBottomRightRadius: 500,
    marginTop:-660
  },
  curvedbackgroundViewStyle:{
    position:'absolute',
    backgroundColor: colors.smokewhite, 
    width: '180%', 
    height: '85%', 
    borderBottomLeftRadius: 200, 
    borderBottomRightRadius: 600,
    marginTop:-680
  },
  CEB:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'stretch',
    marginTop:35,
    marginHorizontal:20,
  },
  cebConainer:{
    backgroundColor:colors.smokewhite,
    justifyContent:'space-evenly',
    alignItems:'center',
    width:80,
    height:70,
    borderRadius:12.5,
    elevation:10,
  },
  imagecarousalContainer:{
    flexDirection:'row',
    width: Dimensions.get('window').width,
    height:120,
    backgroundColor:color.smokewhite,
    marginTop:10,
    alignSelf:'stretch',
    marginHorizontal:20,
    marginBottom:50
  },
  image:{
    resizeMode:"cover", width:"100%", height:'100%',  
  },
  matchtimerContainer:{
    flexDirection:'row',
    height:100,
    backgroundColor:colors.white,
    marginTop:10,
    justifyContent:'space-evenly',
    paddingHorizontal:20,
    alignSelf:'stretch',
    elevation:20,
    marginHorizontal:20,
    borderRadius:15,
    paddingHorizontal:30,
    paddingVertical:10
  },
  userSection:{
    paddingTop:20,
    marginLeft:20,
    flexDirection:'row',
    alignSelf:'flex-start',
  },
  
})