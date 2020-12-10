import React, { Component } from 'react';
import { View, StyleSheet,ScrollView, TextInput, Text, Image, Dimensions} from 'react-native';
import { Avatar, Card, Button } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons'; 

import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

class MyBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{flex: 1,backgroundColor:'#fff'}}>
        <View style = {{alignItems:'center'}}>
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
            <View>
                <Ionicons name="search" size={30} color="black" />
            </View>   
            <View>
                <Ionicons name="notifications" size={30} color="black" />
            </View>           
        </View>
        <View style = {styles.userSection}>
            <View>
                <Avatar 
                  size="large"  
                  icon={{name: 'user', type: 'font-awesome', color:'#928980'}} 
                  rounded titleStyle ={{color:'black', fontSize:25}} 
                  onPress={() => console.log("Works!")} 
                  overlayContainerStyle={{backgroundColor: 'white'}}
                  />
            </View>
            <View>
                <Text style = {{fontSize:28, fontWeight:'bold', color:'black', marginLeft:20, color:'white'}}>GOOD DAY,</Text>
                <Text style = {{fontSize:28, fontWeight:'bold', color:'black',marginLeft:20, color:'white'}}>USER! </Text>
            </View>
        </View>
        <View style = {styles.CEB}>
            <View style = {styles.cebConainer}>
              <Entypo name="location" size={36} color="#F18F2C" />
              <Text style = {{fontSize:8}}>COURTS NEARBY</Text>
            </View>
            <View style = {styles.cebConainer}>
              <MaterialIcons name="sports-kabaddi" size={36} color="#F18F2C" />
              <Text style = {{fontSize:8}}>Events</Text>
            </View>
            <View style = {styles.cebConainer}>
              <FontAwesome5 name="redhat" size={36} color="#F18F2C" />
              <Text style = {{fontSize:8}}>Brands</Text>
            </View>
        </View>
        <View style = {styles.covidUpdates}>
          <View style = {{paddingRight:20}}>
            <Text style = {{fontSize:11, color:'#F18F2C'}}>COVID-19 UPDATES FOR COMMUNITY</Text>
          </View>
          <View style = {{paddingRight:20}}>
            <Text style = {{fontSize:8, color:'#F18F2C' }}>Lorsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</Text>
          </View>
        </View>
        <View style = {{marginHorizontal:20, alignSelf:'flex-start'}}>
          <Text style = {{ color:'#3aabdf', fontWeight:'bold' }}>YOUR NEXT MATCH IS IN</Text>
        </View>
        <View style = {styles.matchtimerContainer}>
            <View style = {{justifyContent:'center', alignItems:'center', padding:20}}>
              <View>
                <Text style = {{fontSize:24, fontWeight:'bold', color:'#3aabdf'}}>47 : 16</Text>
              </View>
              <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style = {{fontSize:10}}>HOURS     </Text>
                <Text style = {{fontSize:10}}>MINUTES</Text>
              </View>
            </View>
            <View style = {{padding:20}}>
              <Text>|</Text>
              <Text>|</Text>
              <Text>|</Text>
            </View>
            <View style = {{paddingHorizontal:20, justifyContent:'center'}}>
              <View>
                <Text style = {{fontWeight:'bold', fontSize:11 }}>MARCH -7 2021, 3 PM</Text>
              </View>
              <View>
                <Text style = {{fontWeight:'bold', fontSize:14 }}>QUEENSLAND TENNIS CENTER</Text>
              </View>
              <View style = {{flexDirection:'row', alignItems:'center'}}>
                <Entypo name="location" size={13} color="#F18F2C" />
                <Text style = {{fontWeight:'bold', fontSize:8 , marginLeft:10}}>MARCH -7 2021, 3 PM</Text>
              </View>
            </View>
        </View>
        <ScrollView style={{flex: 1,backgroundColor:'#fff'}} horizontal = {true} >
            <View style = {styles.imagecarousalContainer}>
              <Image source = {{uri:"https://images.pexels.com/photos/5067821/pexels-photo-5067821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} style = {styles.image}/>
            </View>
            <View style = {styles.imagecarousalContainer}>
              <Image source = {{uri:"https://images.pexels.com/photos/5067814/pexels-photo-5067814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} style = {styles.image}/>
            </View>
            <View style = {styles.imagecarousalContainer}>
              <Image source = {{uri:"https://images.pexels.com/photos/5067816/pexels-photo-5067816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} style = {styles.image}/>
            </View>
            <View style = {styles.imagecarousalContainer}>
              <Image source = {{uri:"https://images.pexels.com/photos/5067816/pexels-photo-5067816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} style = {styles.image}/>
            </View>
        </ScrollView>
        <View style = {{ flex:1, flexDirection:'row', justifyContent:'center', alignItems:'stretch', marginHorizontal:20,}}>
          <TouchableOpacity>
            <Text style = {{ color:'#3aabdf', fontWeight:'bold', alignSelf:'flex-start', marginRight:150 }}>POPULAR VENUE</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style = {{ color:'#3aabdf' }}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <View style = {{}}>
          <Card image = {{uri:'https://images.pexels.com/photos/171568/pexels-photo-171568.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}} >
            <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <View>
                  <Text style = {{fontWeight:'bold'}}>QUEENSLAND TENNIS CENTER</Text>
                  <Text style = {{fontSize:12}}>190 King Arthur Terrace</Text>
                  <Text style = {{fontSize:12}}>Tennyson, QLD</Text>
                  <View style = {{flexDirection:'row'}}>
                    <Ionicons name="tennisball-sharp" size={16} color="#3aabdf" />
                    <Ionicons name="tennisball-sharp" size={16} color="#3aabdf" />
                    <Ionicons name="tennisball-sharp" size={16} color="#3aabdf" />
                    <Ionicons name="tennisball-sharp" size={16} color="#3aabdf" />
                  </View>
                  
              </View>
              <View>
                  <Button 
                    containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                    title="BOOK THIS COURT" 
                    buttonStyle={{ width:100, height:35, backgroundColor: '#f5f5f5', borderRadius:50, borderColor:'#3aabdf', borderWidth:2 }}  
                    onPress={() => { this.signupClick(); }}
                    titleStyle = {{fontSize:10, color:'#3aabdf'}}
                  />
              </View>
            </View>
          </Card>
        </View>
        <View style = {{marginHorizontal:20, marginVertical:20, justifyContent:'center', alignItems:'center'}}>
          <Text style = {{color:'#3aabdf'}}>FOLLOW US ON SOCIAL MEDIA</Text>
        </View>
        <View style = {{ flexDirection:'row', justifyContent:'center', alignItems:'center', marginVertical:20}}>
          <Entypo name="facebook-with-circle" size={32} color="#3aabdf" style = {{marginRight:10}} />
          <Entypo name="linkedin-with-circle" size={32} color="#3aabdf" style = {{marginLeft:10}}  />
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
    backgroundColor:'#fff',
    marginVertical:20,
    justifyContent:'space-evenly',
    paddingHorizontal:20,
    alignSelf:'stretch',
    elevation:20,
    marginHorizontal:20,
  },
  curvedforegroundViewStyle:{
    position:'absolute',
    backgroundColor: '#3aabdf', 
    width: '180%', 
    height: '80%', 
    borderBottomLeftRadius: 220, 
    borderBottomRightRadius: 500,
    marginTop:-660
  },
  curvedbackgroundViewStyle:{
    position:'absolute',
    backgroundColor: '#f5f5f5', 
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
    backgroundColor:'#fff',
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
    backgroundColor:'#fff',
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
    backgroundColor:'#fff',
    marginTop:10,
    justifyContent:'space-evenly',
    paddingHorizontal:20,
    alignSelf:'stretch',
    elevation:20,
    marginHorizontal:20,
    borderRadius:15,
    marginBottom:20
  },
  top:{
    marginTop:25,
    padding:10,
    flexDirection:'row',
    marginHorizontal:20,
    justifyContent:'space-between',
    alignSelf:'stretch'
  },
  input:{
    borderRadius:12, 
    borderColor: '#000', 
    width:250, 
    borderWidth: 0.5,
    height:35, 
    paddingHorizontal:30, 
    backgroundColor: '#fff',
    fontSize: 18,
    marginLeft:0
  },
  userSection:{
    marginLeft:20,
    flexDirection:'row',
    alignSelf:'flex-start',
  },
  
})