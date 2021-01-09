import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, } from 'react-native';
import {Avatar} from 'react-native-elements';

import colors from '../Config/colors';

const width = Dimensions.get('window').width-20 ;
const height = Dimensions.get('window').height/6;

const reviews = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Nunc iaculis mi sed nisl laoreet, vel gravida leo malesuada.',
  'Vivamus vestibulum libero nec turpis interdum, ac venenatis libero facilisis.',
  'Aenean elementum mauris ac dolor congue, sed auctor risus maximus.'
]

export default class ReviewSlider extends Component {
  state = {
    active:0
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
        <ScrollView 
          horizontal 
          onScroll = {this.change}
          showsHorizontalScrollIndicator = {false}
          style = {styles.scroll}>  
          {
            reviews.map((image, index) => {
              return (
                  <View key = {index} style = {styles.box}>
                    <View style = {styles.avatar}>
                        <Avatar 
                            size="medium"  
                            //activeOpacity={0.7}
                            source = {require('../assets/Icons/NAVIGATION-302.png') }
                            rounded 
                            placeholderStyle={{ backgroundColor: 'black', opacity:0.5 }}
                        />
                    </View>
                    <View style = {styles.text}>
                        <Text>{reviews}</Text>
                    </View>
                </View>
              );
            })
          }
        </ScrollView>
        <View style = {styles.pagination}>
          {
            reviews.map((i,k) => {
              return(
                <Text key = {k} style = { k ==this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
              );
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    avatar:{
        margin:10
    },
  container:{
    width, 
    height,
    right:20
  },
  scroll:{
    width, 
    height
  },
  box:{
    width, 
    height, 
    marginHorizontal:20,
    resizeMode: 'contain',
    flexDirection:'row',
    backgroundColor:colors.white,
    justifyContent:'space-between',
    alignItems: 'center',
    alignSelf:'center'
  },
  pagination:{
    flexDirection:'row', 
    position:'absolute', 
    bottom:-20,
    alignSelf:'center' 
  },
  pagingText:{
    color:'white',
    margin:3,
    color:colors.white
  },
  pagingActiveText:{
    color:'white',
    margin:3,
    color:colors.primary
  },
  text:{
    margin:5,
    width:'80%'
  }
})