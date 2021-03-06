import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';

class ThankYouForRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  OK = () => {
    this.props.navigation.navigate("Venues");
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.alertBox}>
            <Text type = "black" style = {styles.textTitle}>THANK YOU FOR SUBMITING YOUR RATINGS FOR THIS VENUE</Text>
            <Divider style={styles.divider}></Divider>
            <View style = {styles.lowerContainer}>
                <TouchableOpacity activeOpacity = {0.7} onPress = {this.OK}>
                    <Text  type = "light"  style = {styles.lowerText}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

export default ThankYouForRating;

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
    textTitle:{
        fontSize:14,
        paddingHorizontal:20,
        paddingTop:5,
        textAlign:'center',
        color:colors.primary
    },
    text:{
        fontSize:9,
        paddingVertical:10,
        width:'90%',
        textAlign: 'center',
    },
    divider:{
        height: 0.5,
        opacity:0.5, 
        width: '90%', 
        backgroundColor: colors.black,
        marginBottom:10,
        marginVertical:15
    },
    lowerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center', 
    },
    lowerText:{
        fontSize:16,
        color:colors.primary,
        paddingHorizontal:20
    }
})