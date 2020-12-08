import React from 'react';
import { View, StyleSheet, Text, Dimensions} from 'react-native';
import {Input, Button} from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 

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
                    <Entypo name="chevron-left" size={36} color="#3aabdf" style ={styles.backChevron} onPress = {()=>{this.backChevronPressed()}}/>
                    <View>
                        <Text style = {{alignSelf:'center'}}>CREATE SECURITY PIN</Text>
                    </View>
                    <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <View>
                            <Input
                                inputContainerStyle ={styles.input}
                            />
                        </View>
                        <View>
                            <Input
                                inputContainerStyle ={styles.input}
                            />
                        </View>
                        <View>
                            <Input
                                inputContainerStyle ={styles.input}
                            />
                        </View>
                        <View>
                            <Input
                                inputContainerStyle ={styles.input}
                            />
                        </View>
                    </View>
                    <View>
                        <Button 
                            containerStyle={{ marginTop:20, paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                            title="CONFIRM" 
                            buttonStyle={{alignSelf:'center',width:180,height:45, backgroundColor: '#3aabdf', borderRadius:50, }} 
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
    justifyContent:'space-evenly',
    alignItems:'center', 
  },
  input:{
    borderBottomColor:'#3aabdf',
    width:50
  },
  backChevron:{
    position:'absolute', 
    top:35,
    left:10
  },
})