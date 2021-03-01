import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';

import colors from '../../Config/colors';

class CurveHome extends Component {

  render() {
    return (
    <>
        <View style={styles.curvedbackgroundViewStyle}>
        </View>
        <View style={styles.curvedforegroundViewStyle}>
        </View>
    </>
    );
  }
}

export default CurveHome;

const styles = StyleSheet.create({
  curvedforegroundViewStyle:{
    position:'absolute',
    backgroundColor: colors.primary, 
    width: '210%', 
    height: '80%', 
    borderBottomLeftRadius: 150,
    left:-120, 
    borderBottomRightRadius: 650,
    top: '-61%'
  },
  curvedbackgroundViewStyle:{
    position:'absolute',
    backgroundColor: colors.smokewhiteMedium, 
    width: '210%', 
    height: '80%', 
    borderBottomLeftRadius: 150,
    left:-150, 
    borderBottomRightRadius: 650,
    top: '-59%'
  },
})