import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, Platform, StatusBar,  } from 'react-native';
import { Input, Button, Divider, CheckBox } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';


import AppButton from '../Components/AppButton';
import colors from '../Config/colors';
import Text from '../Config/CustomFont';

import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default class BookTheCourt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.route.params.name,
      email: props.route.params.email,
      url:props.route.params.url,
      checked: false
    }
  }

  backChevronPressed = () => {
    this.props.navigation.navigate("Venues");
  }

  makePaymentPressed = () => {
    this.props.navigation.navigate("MakePayment", { name: this.state.name, email: this.state.email, url:this.state.url });
  }

  checkboxPressed = () => {
    this.setState({checked:!this.state.checked});
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity style={styles.backChevronContainer}>
            <Entypo name="chevron-thin-left" size={30} color={colors.primary} onPress={() => { this.backChevronPressed() }} />
          </TouchableOpacity>
          <View style={styles.contentContainer}>
            <View>
              <Text type = "black" style={styles.venueName}>{this.state.name}</Text>
            </View>
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={36} color={colors.secondary} />
              <Text style={styles.location}>{this.state.email}</Text>
            </View>
            <View style={styles.formContainer}>
              <View>
                <Text style={styles.formText}>CHOOSE A DATE</Text>
                <View style={{ flexDirection: 'row', width: 50 }}>
                  <View style={{ flexDirection: 'row', }}>
                    <Input
                      inputContainerStyle={styles.input}
                      keyboardType="number-pad"
                      placeholder="DATE"
                      style={{ fontSize: 12 }}
                    />
                    <Text type="light" style={{ fontSize: 30, marginTop: 5, }}>/</Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginLeft: 10, }}>
                    <Input
                      inputContainerStyle={styles.input}
                      keyboardType="number-pad"
                      placeholder="MONTH"
                      style={{ fontSize: 12, justifyContent: 'center', alignItems: 'center' }}
                    />
                    <Text style={{ fontSize: 30, marginTop: 5, marginRight: 20 }}>/</Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <Input
                      inputContainerStyle={styles.input}
                      keyboardType="number-pad"
                      placeholder="YEAR"
                      style={{ fontSize: 12 }}
                    />
                  </View>
                </View>
                <View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 200 }}>
                    <Text>FROM</Text>
                    <Text>TO</Text>
                  </View>
                  <View style={{ flexDirection: 'row', }}>
                    <View style={{ flexDirection: 'row', width: 50 }}>
                      <View style={{ flexDirection: 'row', }}>
                        <Input
                          inputContainerStyle={[styles.input, { width: 30 }]}
                          keyboardType="number-pad"
                          style={{ fontSize: 12 }}
                        />
                        <Text type="light" style={{ fontSize: 30, marginTop: 5, color: colors.primary }}>:</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginLeft: 10, }}>
                        <Input
                          inputContainerStyle={[styles.input, { width: 30 }]}
                          keyboardType="number-pad"
                          style={{ fontSize: 12, justifyContent: 'center', alignItems: 'center' }}
                        />
                        
                      </View>
                    </View>
                    <View style={{ marginLeft: 100 }}>
                      <View style={{ flexDirection: 'row', width: 50 }}>
                        <View style={{ flexDirection: 'row', }}>
                          <Input
                            inputContainerStyle={[styles.input, { width: 30 }]}
                            keyboardType="number-pad"
                            style={{ fontSize: 12 }}
                          />
                          <Text style={{ fontSize: 30, marginTop: 5, fontWeight: '100', color: colors.primary }}>:</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 10, }}>
                          <Input
                            inputContainerStyle={[styles.input, { width: 30 }]}
                            keyboardType="number-pad"
                            style={{ fontSize: 12, justifyContent: 'center', alignItems: 'center' }}
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
                      inputContainerStyle={[styles.input, { width: 150, marginBottom: -20 }]}
                      keyboardType="number-pad"
                      placeholder="COURT"
                      style={{ fontSize: 12 }}
                    />
                    <Input
                      inputContainerStyle={[styles.input, { width: 150, marginBottom: -20 }]}
                      keyboardType="number-pad"
                      placeholder="MEMBERSHIP ID"
                      style={{ fontSize: 12 }}
                    />
                    <Input
                      inputContainerStyle={[styles.input, { width: 150 }]}
                      keyboardType="number-pad"
                      placeholder="VOUCHER NUMBER"
                      style={{ fontSize: 12 }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox  
                checked={this.state.checked} 
                onPress = { () => {this.checkboxPressed();} }
              />
              <Text style={styles.termsandconditions}>Terms and conditions</Text>
            </View>
            <View style={styles.feesContainer}>
              <View style={{ marginBottom: 20 }}>
                <Text>FEES</Text>
              </View>
              <View style={styles.courtFee}>
                  <Text>1 HR * COURT FEE</Text>
                  <Text style={{ fontSize: 20 }}>$12</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItem: 'center', alignSelf: 'stretch' }}>
                  <Text>BOOKING FEE</Text>
                  <Text style={{ fontSize: 20 }}>$1</Text>
              </View>
              <View style={{ marginBottom: 20 }}>
                <Divider style={styles.divider}></Divider>
              </View>
              <View style={{ flexDirection: 'row', marginBottom: 50, justifyContent: 'space-between', alignItem: 'center', alignSelf: 'stretch' }}>
                <View>
                  <Text type="bold">TOTAL</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 20 }}>$13</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <View style={styles.totalContainer}>
            <Text type="bold" style={{ marginRight: 10 }}>Total</Text>
            <Text type="bold" style={{ fontSize: 20, }}>$13</Text>
          </View>
            <AppButton 
                  title = "make payment"
                  buttonStyle = {styles.buttonStyle}
                  titleStyle = {styles.titleStyle}
                  onPress = {() => {this.props.navigation.navigate("MakePayment", {name: this.state.name, email:this.state.email, url:this.state.url})}}
              />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backChevronContainer:{
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    left:20,
    marginBottom:30,
  },
  backChevron: {
    resizeMode: "contain",
  },
  buttonStyle:{
    backgroundColor:colors.primary,
    width:120, 
    height:35, 
    borderWidth:1
  }, 
  checkboxContainer:{
    justifyContent: 'flex-start', 
    alignItems:'center', 
    flexDirection:'row', 
    marginLeft:-20,
    marginBottom:20
  },
  contentContainer: {
    marginHorizontal: 30,
  },
  courtFee:{
    flexDirection: 'row', 
    marginBottom: 20, 
    justifyContent: 'space-between', 
    alignSelf: 'stretch'
  },
  divider:{
    height: 2, 
    width: '100%', 
    backgroundColor: colors.secondary 
  },
  
  formContainer: {

  },
  
  feesContainer:{
    marginBottom:50,
  },
  formText: {
    fontFamily: 'Lato-Bold'
  },
  footerContainer: {
    flexDirection: 'row', 
    bottom: 0, 
    position: 'absolute', 
    alignSelf: 'stretch', 
    width: '100%', height: '8%', 
    backgroundColor: colors.white, 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    elevation: 20, 
    paddingHorizontal: 20
  },
  input: {
    borderBottomColor: colors.primary,
    width: 50,
  },
  locationContainer: {
    flexDirection: 'row', marginBottom: 50
  },
  location: {
    marginLeft: 5,
    width: 125,
    fontSize: 12,
    textTransform:'uppercase'
  },
  termsandconditions:{
    marginLeft:-10, 
    textTransform:'uppercase', 
    textDecorationLine:'underline', 
    color:colors.primary
  },
  totalContainer:{
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center' 
  },
  titleStyle:{
    fontSize:10,
    color:colors.white,
  },
  venueName: {
    fontSize: 32,
    width: 250,
    marginBottom: 5,
    textTransform:'uppercase'
  },
})