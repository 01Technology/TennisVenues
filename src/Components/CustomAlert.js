import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../Config/colors';
import Text from '../Config/CustomFont';

class CustomAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  logout = () => {
      this.props.navigation.navigate("FirstScreen");
  }

  cancel = () => {
      this.props.navigation.navigate("Settings");
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.alertBox}>
            <Text style = {styles.text}>ARE YOU SURE YOU WANT TO LOOGOUT FROM TENNIS VENUE APP?</Text>
            <Divider style={styles.divider}></Divider>
            <View style = {styles.lowerContainer}>
                <TouchableOpacity activeOpacity = {0.7} onPress = {this.cancel}>
                    <Text style = {styles.lowerText}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = {0.7} onPress = {this.logout}>
                    <Text style = {styles.lowerText}>LOGOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

export default CustomAlert;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    alertBox:{
        padding:5,
        width:'80%',
        height:'25%',
        backgroundColor:'#fff',
        marginHorizontal:20,
        elevation:10,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:25
    },
    text:{
        fontSize:12,
        padding:25,
        textAlign: 'center',
    },
    divider:{
        height: 0.5,
        opacity:0.5, 
        width: '90%', 
        backgroundColor: colors.black,
        marginBottom:20
    },
    lowerContainer:{
        flexDirection:'row',
        fontSize:32,
        justifyContent:'space-between',
        alignSelf:'stretch',
        alignItems:'center',
        marginHorizontal:50
    },
    lowerText:{
        fontSize:20,
        color:colors.primary
    }
})