import React from 'react';
import { View, StyleSheet, Text, Dimensions} from 'react-native';
import {Input, Button} from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 

import colors from '../Config/colors';

export default class SecurityPin extends React.Component{
    
    confirmPressed = () => {
      //check
      this.props.navigation.navigate("TouchAuth");
    }

    backChevronPressed = () => {
        this.props.navigation.navigate("FirstScreen");
    }

    render(){
        return(
                <View style = {styles.boxContainer}> 
                    <Entypo name="chevron-left" size={36} color={colors.primary} style ={styles.backChevron} onPress = {()=>{this.backChevronPressed()}}/>
                    <View>
                        <Text style = {{alignSelf:'center', marginBottom:50}}>CREATE SECURITY PIN</Text>
                    </View>
                    <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
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
                        </View>
                    </View>
                    <View>
                        <Button 
                            containerStyle={{ marginTop:20, paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                            title="CONFIRM" 
                            buttonStyle={{alignSelf:'center',width:180,height:45, backgroundColor: colors.primary, borderRadius:50, }} 
                            onPress={() => { this.confirmPressed() ; }}
                            titleStyle = {{fontSize:16, fontWeight:'100'}}
                        />
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
  boxContainer:{ 
    flex:1,
    justifyContent:'center',
    alignItems:'center', 
  },
  input:{
    borderBottomColor:colors.primary,
    width:50
  },
  backChevron:{
    position:'absolute', 
    top:35,
    left:10
  },
})