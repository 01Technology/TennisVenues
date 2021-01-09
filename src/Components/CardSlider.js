import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
import { Card, Button } from 'react-native-elements';

import colors from '../Config/colors';
//import Text from '../Config/CustomFont';
import ReviewBall from "../Components/ReviewBall";

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

export default class CardSlider extends Component {
    state = {
      active:0,
    }
    _renderItem = ({item}) => {
        return(
            <Card image = {{uri:item.url}} borderRadius = {12} containerStyle = {{ elevation:10}} >
            <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <View>
                  <Text style = {{fontWeight:'bold'}}>{item.title}</Text>
                  <Text style = {{fontSize:12,}}>{item.location}</Text>
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
        <View style={styles.container}>
            <View>      
                <FlatList 
                    data = {images}
                    renderItem = { this._renderItem }
                    keyExtractor = {(item, index) => index.toString()}
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false}
                    //onScroll = {this.change}
                />
            </View>
{/*             
            <View style = {styles.pagination}>
                {
                images.map((i,k) => {
                    return(
                    <Text key = {k} style = { k ==this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                    );
                })
                }
            </View>
*/}
        </View> 
      );
    }
  }
  
  const styles = StyleSheet.create({

    // scroll:{
    //   marginTop:20,
    //   width, 
    //   height
    // },
    image:{
      width:'100%', height:200, resizeMode: 'contain'
    },

    // pagination:{
    //   flexDirection:'row', 
    //   position:'absolute', 
    //   bottom:0,
    //   alignSelf:'center' 
    // },
    // pagingText:{
    //   color:'white',
    //   margin:3,
    //   color:'#888'
    // },
    // pagingActiveText:{
    //   color:'white',
    //   margin:3,
    //   color:'#fff'
    // }
  })