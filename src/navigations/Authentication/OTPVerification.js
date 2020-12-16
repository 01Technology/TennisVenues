import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';

import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';

export default class OTPVerification extends React.Component{
    
    confirmPressed = () => {
      //check
      this.props.navigation.navigate("SecurityPin");
    }

    render(){
        return(
              <View style = {styles.container} >
                <View style = {styles.boxContainer}> 
                  <Text style = {styles.text} type = "black">PLEASE ENTER OTP TO VERIFY YOUR ACCOUNT</Text>
                  <Text style = {{textAlign:'center', marginTop:20, fontSize:11}}>AN OTP HAS BEEN SENT TO *61 *** ***</Text>
                  <View style = {{flexDirection:'row', justifyContent:'space-evenly', marginTop:45}}>
                    <View>
                        <Input
                            inputContainerStyle ={styles.input}
                            keyboardType = "number-pad"
                        />
                    </View>
                    <View>
                        <Input
                            inputContainerStyle ={styles.input}
                            keyboardType = "number-pad"
                        />
                    </View>
                    <View>
                        <Input
                            inputContainerStyle ={styles.input}
                            keyboardType = "number-pad"
                        />
                    </View>
                    <View>
                        <Input
                            inputContainerStyle ={styles.input}
                            keyboardType = "number-pad"
                        />
                    </View><View>
                        <Input
                            inputContainerStyle ={styles.input}
                            keyboardType = "number-pad"
                        />
                    </View>
                  </View>
                  <View style = {{flexDirection:'row', justifyContent:'space-evenly', marginBottom:40}}>
                      <View>
                        <Text style = {{ marginTop:20, fontSize:11}}>DID NOT RECEIVED CODE?</Text>
                      </View>
                      <TouchableOpacity style = {{marginTop:18}} onPress = {console.log("resend..")} activeOpacity = {0.7}>
                        <Text type = "black" style = {{ color:colors.primary}}>
                          RESEND OTP
                        </Text>
                      </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress = {()=>{this.confirmPressed();}}>
                    <Text style = {{textAlign:'center', fontSize:18, marginTop:0, marginBottom:10, color:colors.primary}}>CONFIRM</Text>
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
    width:Dimensions.get('window').width/1.2, 
    height:Dimensions.get('window').width/1.5, 
    backgroundColor:colors.white, 
    borderRadius:24, 
    elevation:1,
    paddingHorizontal:28,
    paddingVertical:25
  },
  text:{
    textAlign:'center',
    color:colors.primary,
    marginVertical:15
  },
  input:{
    borderBottomColor:colors.primary,
    width:35,
    justifyContent:'center',
    alignContent:'center',
    paddingLeft:12
  },
})