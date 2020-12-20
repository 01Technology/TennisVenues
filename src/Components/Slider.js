import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, Image } from 'react-native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height/3 -25;
const images = [
  'https://images.pexels.com/photos/342361/pexels-photo-342361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1277397/pexels-photo-1277397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2568551/pexels-photo-2568551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

export default class Slider extends Component {
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
          pagingEnabled 
          horizontal 
          onScroll = {this.change}
          showsHorizontalScrollIndicator = {false}
          style = {styles.scroll}>  
          {
            images.map((image, index) => {
              return (
                <Image
                  key={index}
                  source={{ uri: image }}
                  style={styles.image} />
              );
            })
          }
        </ScrollView>
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
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginBottom:20,
    width, 
    height:height/1.5
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
    color:'#888'
  },
  pagingActiveText:{
    color:'white',
    margin:3,
    color:'#fff'
  }
})