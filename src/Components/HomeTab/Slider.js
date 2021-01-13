import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, Image } from 'react-native';
import images from '../../utils/BannerAdvertisingImages';

export default class Slider extends Component {
  state = {
    active: 0
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
        >
          {
            images.map((image, index) => {
              return (
                <View style={styles.imageContainer} key = {index}>
                  <Image
                    key={index}
                    source={{ uri: image }}
                    style={styles.image}
                  />
                </View>
              );
            })
          }
        </ScrollView>
        <View style={styles.pagination}>
          {
            images.map((i, k) => {
              return (
                <Text key={k} style={k == this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
              );
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 15,
    width: '90%',
    height: 200,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 6,
  },
  image:{
    width: '100%', 
    height: 120,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '40%',
    alignSelf: 'center'
  },
  pagingText: {
    color: 'white',
    margin: 1,
    fontSize: 12,
    color: '#888'
  },
  pagingActiveText: {
    color: 'white',
    margin: 1,
    fontSize: 12,
    color: '#fff'
  }
})