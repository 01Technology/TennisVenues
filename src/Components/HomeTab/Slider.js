import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, Image } from 'react-native';

const images = [
  'https://images.pexels.com/photos/342361/pexels-photo-342361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1277397/pexels-photo-1277397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2568551/pexels-photo-2568551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

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
                <View style={styles.imageContainer}>
                  <Image
                    key={index}
                    source={{ uri: image }}
                    style={{ width: '100%', height: 120, }}
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