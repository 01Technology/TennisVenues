import React, { Component } from 'react';
import { View, StyleSheet,ScrollView, Image, Dimensions, TextInput, FlatList} from 'react-native';
import { Avatar, Badge, Card, Button } from 'react-native-elements';

import Slider from '../../Components/Slider';
import CardSlider from '../../Components/CardSlider';

import Text from '../../Config/CustomFont';
import colors from '../../Config/colors';

import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

import ReviewBall from "../../Components/ReviewBall";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const images = [
  {
      id:1,
      title:'Lorem ipsum dolor sit amet',
      location:'Etiam non lectus id ets elwsa yseis.',
      url:'https://images.pexels.com/photos/342361/pexels-photo-342361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
      id:2,
      title:'Lorem2 ipsum2 dolor sit amet',
      location:'Etiam non lectus id ets elwsa yseis',
      url:'https://images.pexels.com/photos/1277397/pexels-photo-1277397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
      id:3,
      title:'Lorem3 ipsum3 dolor sit amet',
      location:'Etiam non lectus id ets elwsa yseis',
      url:'https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
      id:4,
      title:'Lorem4 ipsum4 dolor sit amet',
      location:'Etiam non lectus id ets elwsa yseis',
      url:'https://images.pexels.com/photos/2568551/pexels-photo-2568551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:0,
    };
  }

  notificationPressed = () => {
    this.props.navigation.navigate("NotificationsReminder");
    //console.log("Notifications");
  }

  searchPressed = () => {
    //searching operation
    console.log("Searching....");
  }

  gotoPromotions = () => {
    this.props.navigation.navigate("Promotions");
  }

  _renderItem = ({item}) => {
    return(
        <Card image = {{uri:item.url}} >
        <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <View>
              <Text style = {{fontWeight:'bold'}}>{item.title}</Text>
              <Text style = {{fontSize:12,}}>{item.location}</Text>
              <View style = {{flexDirection:'row',}}>
                <ReviewBall />
                <Image source = {require('../../assets/Icons/BALL-531.png')} style ={{width:20, height:20}} />
              </View>
          </View>
          <View>
              <Button 
                containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                title="BOOK THIS COURT"
                buttonStyle={{ width:100, height:35, backgroundColor: colors.smokewhite, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                onPress={()=> {this.props.navigation.navigate("Venues", {name: item.title, email:item.location})} }
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
      <ScrollView style={{flex: 1,backgroundColor:colors.white}}>
        <View style = {{alignItems:'center', justifyContent:'space-between'}}>
        <View style={styles.curvedbackgroundViewStyle}>
        </View>
        <View style={styles.curvedforegroundViewStyle}>
        </View>
        <View style = {styles.top}>
            <View>
                <TextInput 
                    placeholder = "SEARCH FOR VENUES" 
                    onChangeText = {(val) => {this.setState({email: val})}} 
                    style = { styles.input } 
                />
            </View>
            <TouchableOpacity onPress = {() => {this.searchPressed();}}>
                <Image source = {require('../../assets/Icons/seachiconwhite.png')} style = {styles.imageIcon} />
            </TouchableOpacity>   
            <TouchableOpacity onPress = {() => {this.notificationPressed();}}>
                <Image source = {require('../../assets/Icons/notificationactive.png')} style = {styles.imageIcon} />
            </TouchableOpacity>           
        </View>
        <View style = {styles.userSection}>
            <View>
                <Avatar 
                  size="large"  
                  icon={{name: 'user', type: 'font-awesome', color:colors.avatarPlaceholder,size:62}} 
                  rounded titleStyle ={{color:'black', fontSize:25}} 
                  onPress={() => this.props.navigation.navigate("PhoneCamera")} 
                  overlayContainerStyle={{backgroundColor: 'white'}}
                  />
                  <Badge containerStyle={styles.badgeContainer} value = {<Image source = {require('../../assets/Icons/PLUS-202.png')} onPress={() => console.log("Works!")}  style = {styles.badge} />} />
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
        
        <View style={styles.cardSliderContainer}>
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

export default Home;

const styles = StyleSheet.create({
  badge:{
    width:20, height:20,
  },
  badgeContainer:{
    position: 'absolute', bottom: 0, right: 4, width:20, height:20,
  },
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
    marginTop:25,
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

  top:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'stretch',
    marginTop:25,
    marginHorizontal:20
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
  imageIcon:{
      width:30,
      height:30,
      marginHorizontal:2.5
  },

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