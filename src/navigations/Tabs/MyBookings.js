import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, FlatList, ScrollView,} from 'react-native';
import { Avatar, Card, Button,  } from 'react-native-elements';

import Text from '../../Config/CustomFont';
import colors from '../../Config/colors';

import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';

export default class MyBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //fetching data from server
  componentDidMount(){
    const response = fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson
      })
    })
  }

  previouslyBookedDetails = () => {
    this.props.navigation.navigate("BookingConfirmed");
  }

  gotoPaymentConfirmed = ({item}) => {
    this.props.navigation.navigate("BookingConfirmed",{name:item.name, email:item.email});
  }

  //render flatlist item
  _renderItem = ({item, index}) => {
    return(
        
        <TouchableOpacity style = {{flexDirection:'row',marginLeft:20, justifyContent:'flex-start', marginRight:Dimensions.get('window').width/2, marginVertical:15}} onPress = {()=>{this.gotoPaymentConfirmed({item});}}>
            <View style = {{flexDirection:'row'}}>
                <View style = {{width:80, height:75, marginRight:20, justifyContent:'center', alignItems:'center', backgroundColor:colors.primary, borderRadius:15}}>
                  <Text style = {{color:colors.white}}>MARCH</Text>
                  <Text style = {{fontSize:40, fontWeight:'bold', color:colors.white}}>{item.id}</Text>
                </View>
            </View>
            <View style = {{width:170, height:20,}}>
                <View>
                  <Text style = {{fontSize:14, fontWeight:'bold'}}>{item.name}</Text>
                </View>
                <View style = {{flexDirection:'row', marginTop:5, justifyContent:'center', alignSelf:'flex-start', alignItems:'center'}}>
                  <Ionicons name="location" size={16} color={colors.secondary} />
                  <Text style = {{fontSize:11}}>{item.email}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => { this.openStudentCreateScreen(); }} activeOpacity={0.7} style={{position:"relative", width:65, height:65, alignItems:"center", justifyContent:"center", right:0,}}>
              <Entypo name="chevron-thin-right" size={24} color="black" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor:colors.white}}>
          <View style = {styles.top}>
            <View>
                <TextInput 
                    placeholder = "SEARCH FOR VENUES" 
                    onChangeText = {(val) => {this.setState({email: val})}} 
                    style = { styles.input } 
                />
            </View>
            <View>
                <Ionicons name="search" size={30} color={colors.primary} />
            </View>   
            <View>
                <Ionicons name="notifications" size={30} color={colors.primary}/>
            </View>           
        </View>
        <View style = {{flexDirection:'row',marginHorizontal:20, marginVertical:20, alignSelf:'flex-start'}}>
          <Text type = "bold" style = {{ color:colors.black, fontSize:24 }}>MY BOOKINGS</Text>
        </View>
        <View style = {{flexDirection:'row',marginHorizontal:20, alignSelf:'flex-start'}}>
          <Text type = "bold" style = {{ color:colors.black, fontSize:16 }}>UPCOMING:</Text>
        </View>
        <View style = {{ maxHeight:Dimensions.get('window').height/1.5}}>
          <View>
            <FlatList
                  data = {this.state.dataSource}
                  renderItem = {this._renderItem}
                  keyExtractor = {(item, index) => index.toString()}

                  nestedScrollEnabled = {true}
              />
          </View>
        </View>
        <View style = {{flexDirection:'row',marginHorizontal:20, alignSelf:'flex-start'}}>
          <Text type = "bold" style = {{ color:colors.black, fontSize:16 }}>PREVIOUS BOOKINGS</Text>
        </View>
        <View style = {styles.previousBookings}>
          <View style = {{paddingHorizontal:35, paddingVertical:10}}>
            <Text type = "black" style = {{fontSize:11, color:colors.secondary}}>N O V</Text>
            <Text type = "black" style = {{fontSize:30}}>06</Text>
          </View>
          <View style = {{paddingRight:20, paddingVertical:10}}>
            <Text style = {{fontSize:14, marginLeft:20, fontWeight:'bold', color:colors.black, width:'50%' }}>QUEENSLAND TENNIS CENTER</Text>
            <View style = {{flexDirection:'row', paddingLeft:20, justifyContent:"space-between", alignItems:'center'}}>
              <View style = {{flexDirection:'row'}}>
                  <Ionicons name="location" size={16} color={colors.secondary} />
                  <Text style = {{fontSize:8}}>Lorem Ipsum is simply dummy text of the printing. </Text>
              </View>
              <View>
                <Button 
                  containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                  title="DETAILS" 
                  buttonStyle={{ width:60, height:25, backgroundColor: colors.primary, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                  onPress={()=> this.previouslyBookedDetails()}
                  titleStyle = {{fontSize:8, color:colors.white}}
                />
              </View>
            </View>
          </View>
        </View>
    </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
    backgroundColor: colors.white,
    fontSize: 18,
    marginLeft:0
  },
  flatLIst:{ 
    flexDirection:'row', 
    justifyContent:'space-between',
    backgroundColor:'#fff',
    elevation: 2, 
    marginHorizontal:20,
  },
  previousBookings:{
    flexDirection:'row',
    height:80,
    backgroundColor:colors.white,
    marginVertical:20,
    justifyContent:'space-evenly',
    paddingHorizontal:20,
    alignSelf:'stretch',
    elevation:20,
    marginHorizontal:20,
  },
})