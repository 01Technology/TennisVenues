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
                  <Text style = {styles.otpNumber}>AN OTP HAS BEEN SENT TO *61 *** ***</Text>
                  <View style = {styles.inputContainer}>
                    <View>
                        <Input
                            maxLength = {1}
                            inputContainerStyle ={styles.input}
                            keyboardType = "number-pad"
                        />
                    </View>
                    <View>
                        <Input
                            maxLength = {1}
                            inputContainerStyle ={styles.input}
                            keyboardType = "number-pad"
                        />
                    </View>
                    <View>
                        <Input
                            maxLength = {1}
                            inputContainerStyle ={styles.input}
                            keyboardType = "number-pad"
                        />
                    </View>
                    <View>
                        <Input
                            maxLength = {1}
                            inputContainerStyle ={styles.input}
                            keyboardType = "number-pad"
                        />
                    </View><View>
                        <Input
                            maxLength = {1}
                            inputContainerStyle ={styles.input}
                            keyboardType = "number-pad"
                        />
                    </View>
                  </View>
                  <View style = {styles.lowerContainer}>
                      <View>
                        <Text style = {styles.didnotReceiveText}>DID NOT RECEIVED CODE?</Text>
                      </View>
                      <TouchableOpacity style = {styles.resendtextContainer} onPress = {console.log("resend..")} activeOpacity = {0.7}>
                        <Text type = "black" style = {{ color:colors.primary}}>
                          RESEND OTP
                        </Text>
                      </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress = {()=>{this.confirmPressed();}}>
                    <Text style = {styles.confirmText}>CONFIRM</Text>
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
    elevation:20,
    paddingHorizontal:28,
    paddingVertical:25
  },
  confirmText:{
    textAlign:'center', 
    fontSize:18, 
    marginTop:0, 
    marginBottom:10, 
    color:colors.primary
  },
  didnotReceiveText:{
    marginTop:20, 
    fontSize:11
  },
  lowerContainer:{
    flexDirection:'row', 
    justifyContent:'space-evenly', 
    marginBottom:40
  },
  resendtextContainer:{
    marginTop:18
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
    paddingLeft:12,
    fontFamily:'Lato-Bold'
  },
  inputContainer:{
    flexDirection:'row', 
    justifyContent:'space-evenly', 
    marginTop:45
  },
  otpNumber:{
    textAlign:'center', 
    marginTop:20, 
    fontSize:11
  }
})