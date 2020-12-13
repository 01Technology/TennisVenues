import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, SafeAreaView, Platform, StatusBar, CheckBox} from 'react-native';
import {Input, Button, Divider} from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 

import { Ionicons } from '@expo/vector-icons'; 
import colors from '../Config/colors';
import { ScrollView } from 'react-native-gesture-handler';

export default class BookTheCourt extends React.Component{
    constructor(props){
      super(props);
        this.state = {
          name:props.route.params.name,
          email:props.route.params.email
        }
    }

    backChevronPressed = () => {
      this.props.navigation.navigate("Promotions");
    }

    payPressed = () => {
      this.props.navigation.navigate("pay");
    }
    render(){
        return(
            <SafeAreaView style = {styles.Container}>
              <ScrollView>
                  <TouchableOpacity style = {styles.backChevronContainer}>
                    <Entypo name="chevron-left" size={36} color={colors.primary} style ={styles.backChevron} onPress = {()=>{this.backChevronPressed()}}/>
                  </TouchableOpacity>
                  <View style = {styles.contentContainer}>
                        <View>
                            <Text style = {styles.venueName}>{this.state.name}</Text>
                        </View>
                        <View style = {styles.locationContainer}>
                            <Ionicons name="location" size={36} color={colors.secondary} />
                            <Text style = {styles.location}>{this.state.email}</Text>
                        </View>
                        <View style = {styles.formContainer}>
                            <View>
                                      <Text style = {styles.formText}>CHOOSE A DATE</Text>
                                      <View style = {{ flexDirection:'row', width:50}}>
                                          <View style = {{flexDirection:'row',}}>
                                              <Input
                                                  inputContainerStyle ={styles.input}
                                                  keyboardType = "number-pad"
                                                  placeholder = "DATE"
                                                  style = {{fontSize:12}}
                                              />
                                              <Text style = {{fontSize:30,marginTop:5, fontWeight:'100'}}>/</Text>
                                          </View>
                                          <View style = {{flexDirection:'row', marginLeft:10,}}>
                                              <Input
                                                  inputContainerStyle ={styles.input}
                                                  keyboardType = "number-pad"
                                                  placeholder = "MONTH"
                                                  style = {{fontSize:12, justifyContent:'center', alignItems:'center'}}
                                              />
                                              <Text style = {{fontSize:30, marginTop:5, marginRight:20}}>/</Text>
                                          </View>
                                          <View style = {{flexDirection:'row', marginLeft:10}}>
                                              <Input
                                                  inputContainerStyle ={styles.input}
                                                  keyboardType = "number-pad"
                                                  placeholder = "YEAR"
                                                  style = {{fontSize:12}}
                                              />
                                          </View>
                                      </View>
                                      <View>
                                          <View style = {{flexDirection:'row', justifyContent:'space-between', width:200}}>
                                              <Text>FROM</Text>
                                              <Text>TO</Text>
                                          </View>
                                          <View style = {{flexDirection:'row',}}>
                                                <View style = {{ flexDirection:'row', width:50}}>
                                                    <View style = {{flexDirection:'row',}}>
                                                        <Input
                                                            inputContainerStyle ={[styles.input, {width:30}]}
                                                            keyboardType = "number-pad"
                                                            style = {{fontSize:12}}
                                                        />
                                                        <Text style = {{fontSize:30,marginTop:5, fontWeight:'100', color:colors.primary}}>:</Text>
                                                    </View>
                                                    <View style = {{flexDirection:'row', marginLeft:10,}}>
                                                        <Input
                                                            inputContainerStyle ={[styles.input, {width:30}]}
                                                            keyboardType = "number-pad"
                                                            style = {{fontSize:12, justifyContent:'center', alignItems:'center'}}
                                                        />
                                                    </View>
                                                </View> 
                                                <View style = {{marginLeft:100}}>
                                                <View style = {{ flexDirection:'row', width:50}}>
                                                    <View style = {{flexDirection:'row',}}>
                                                        <Input
                                                            inputContainerStyle ={[styles.input, {width:30}]}
                                                            keyboardType = "number-pad"
                                                            style = {{fontSize:12}}
                                                        />
                                                        <Text style = {{fontSize:30,marginTop:5, fontWeight:'100', color:colors.primary}}>:</Text>
                                                    </View>
                                                    <View style = {{flexDirection:'row', marginLeft:10,}}>
                                                        <Input
                                                            inputContainerStyle ={[styles.input, {width:30}]}
                                                            keyboardType = "number-pad"
                                                            style = {{fontSize:12, justifyContent:'center', alignItems:'center'}}
                                                        />
                                                    </View>
                                                </View> 
                                              </View>
                                          </View>
                                         
                                      </View>
                                      <View>
                                        <Text>CHOOSE A COURT</Text>
                                        <View>
                                            <Input
                                                inputContainerStyle ={[styles.input, {width:150, marginBottom:-20}]}
                                                keyboardType = "number-pad"
                                                placeholder = "COURT"
                                                style = {{fontSize:12}}
                                            />
                                            <Input
                                                inputContainerStyle ={[styles.input, {width:150, marginBottom:-20}]}
                                                keyboardType = "number-pad"
                                                placeholder = "MEMBERSHIP ID"
                                                style = {{fontSize:12}}
                                            />
                                            <Input
                                                inputContainerStyle ={[styles.input, {width:150}]}
                                                keyboardType = "number-pad"
                                                placeholder = "VOUCHER NUMBER"
                                                style = {{fontSize:12}}
                                            />
                                        </View>
                                      </View>
                            </View>
                        </View>
                        <View style = {{ marginLeft:20, flexDirection:'row-reverse', justifyContent:'center', alignItems:'center', alignSelf:'flex-start'}}>
                              <Text>TERMS AND CONDITIONS</Text>
                              <CheckBox />
                        </View>
                        <View style = {{ marginLeft:20, marginBottom:50,}}>
                            <View style ={{marginBottom:20}}>
                              <Text>FEES</Text>
                            </View>     
                              <View style = {{flexDirection:'row', marginBottom:20, justifyContent:'space-between', alignItem:'center',alignSelf:'stretch'}}>
                                <View>
                                  <Text>1 HR * COURT FEE</Text>
                                </View>
                                <View>
                                  <Text style = {{fontSize:20}}>$12</Text>
                                </View>
                              </View>
                              <View style = {{flexDirection:'row', justifyContent:'space-between', alignItem:'center',alignSelf:'stretch'}}>
                                <View>
                                  <Text>BOOKING FEE</Text>
                                </View>
                                <View>
                                  <Text style = {{fontSize:20}}>$1</Text>
                                </View>
                              </View>
                              <View style = {{marginBottom:20}}>
                                  <Divider style = {{height:2, width:'100%',backgroundColor:colors.secondary}}></Divider>
                              </View>
                              <View style = {{flexDirection:'row', marginBottom:50, justifyContent:'space-between', alignItem:'center',alignSelf:'stretch'}}>
                                <View>
                                  <Text style = {{fontWeight:'bold'}}>TOTAL</Text>
                                </View>
                                <View>
                                  <Text style = {{fontSize:20}}>$13</Text>
                                </View>
                              </View>
                        </View>
                        
                  </View>
                </ScrollView>
                  <View style = {{ flexDirection:'row', bottom:0, position:'absolute', alignSelf:'stretch', width:'100%', height:'10%', backgroundColor:colors.white, justifyContent:'space-between', alignItems:'center', elevation:500,paddingLeft:20}}>  
                    <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                      <Text style = {{fontWeight:'bold', marginRight:10}}>Total</Text>
                      <Text style = {{fontSize:20, fontWeight:'600'}}>$13</Text>
                    </View>
                    <Button 
                        containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                        title="Pay" 
                        buttonStyle={{ width:100, height:35, backgroundColor: colors.primary, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                        onPress={() => {this.payPressed();}}
                        titleStyle = {{fontSize:8, color:colors.white}}
                      />
                  </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  Container:{ 
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  contentContainer:{
    marginHorizontal:50, marginTop:50
  },
  backChevronContainer:{
    position:'absolute',
    top:StatusBar.currentHeight,
    left:10
  },
  backChevron:{
    resizeMode:"contain", 
  },
  formContainer:{

  },
  input:{
    borderBottomColor:colors.primary,
    width:50,
  },
  locationContainer:{
    flexDirection:'row', marginBottom:50
  },
  location:{
    marginLeft:5,
    width:125,
    fontSize:12
  },
  venueName:{
    fontSize:32,
    fontWeight:'bold',
    width:250,
    marginBottom:5
  },
  formText:{
    fontWeight:'bold'
  }
})