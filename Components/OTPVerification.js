import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';

import colors from '../Config/colors';

export default class OTPVerification extends React.Component{
    
    confirmPressed = () => {
      //check
      this.props.navigation.navigate("SecurityPin");
    }

    render(){
        return(
              <View style = {styles.container} >
                <View style = {styles.boxContainer}> 
                  <Text style = {styles.text}>PLEASE ENTER OTP TO VERIFY YOUR ACCOUNT</Text>
                  <Text style = {{textAlign:'center', marginTop:20, fontSize:11}}>AN OTP HAS BEEN SENT TO *61 *** ***</Text>
                  <View style = {{flexDirection:'row', justifyContent:'space-evenly', marginTop:45}}>
                    <Text>_____</Text>
                    <Text>_____</Text>
                    <Text>_____</Text>
                    <Text>_____</Text>
                    <Text>_____</Text>
                  </View>
                  <View style = {{flexDirection:'row', justifyContent:'space-evenly'}}>
                      <View>
                        <Text style = {{ marginTop:20, fontSize:11}}>DID NOT RECEIVED CODE?</Text>
                      </View>
                      <TouchableOpacity style = {{marginTop:18}} onPress = {console.log("resend..")}>
                        <Text style = {{ fontWeight:'bold', color:colors.primary}}>
                          RESEND OTP
                        </Text>
                      </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress = {()=>{this.confirmPressed();}}>
                    <Text style = {{textAlign:'center', fontSize:18, marginTop:20, marginBottom:10, color:colors.primary}}>CONFIRM</Text>
                  </TouchableOpacity>
                </View>
              </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
  },
  boxContainer:{ 
    justifyContent:'space-evenly',
    width:Dimensions.get('window').width/1.2, height:Dimensions.get('window').width/1.5, backgroundColor:colors.white, borderRadius:24, elevation:1
  },
  text:{
    marginTop:15,
    fontWeight:'bold',
    textAlign:'center',
    color:colors.primary
  }
})