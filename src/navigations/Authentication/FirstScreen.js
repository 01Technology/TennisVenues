import React, { Component } from 'react';
import { View, Image, StyleSheet, ActivityIndicator  } from 'react-native';
import * as Font from 'expo-font';
import {Button} from 'react-native-elements';

import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';

export default class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Lato-Black': require('../../assets/fonts/Lato-Black.ttf'),
      'Lato-BlackItalic': require('../../assets/fonts/Lato-BlackItalic.ttf'),
      'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
      'Lato-BoldItalic': require('../../assets/fonts/Lato-BoldItalic.ttf'),
      'Lato-Italic': require('../../assets/fonts/Lato-Italic.ttf'),
      'Lato-Light': require('../../assets/fonts/Lato-Light.ttf'),
      'Lato-LightItalic': require('../../assets/fonts/Lato-LightItalic.ttf'),
      'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
      'Lato-Thin': require('../../assets/fonts/Lato-Thin.ttf'),
      'Lato-ThinItalic': require('../../assets/fonts/Lato-ThinItalic.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  loginClick = () =>{
      this.props.navigation.navigate("LoginScreen");
  }

  signupClick = () =>{
    this.props.navigation.navigate("SignUP");
  }

  guestVisitor = () => {
    this.props.navigation.navigate("HomeScreen");
  }


  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <View style = {styles.container}>
            <Image source = {require('../../assets/logo.png')} style = {styles.img} />
            <View>
                <Button 
                    containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                    title="LOGIN" 
                    buttonStyle={{ width:180, height:55, backgroundColor:colors.primary, borderRadius:50, }} 
                    onPress={() => { this.loginClick(); }}
                    titleStyle = {{fontSize:20, fontFamily:'Lato-Regular'}}
                />
                <Button 
                    containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                    title="SIGNUP" 
                    buttonStyle={{ width:180, height:55, backgroundColor: colors.smokewhite, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                    onPress={() => { this.signupClick(); }}
                    titleStyle = {{fontSize:20, color:colors.primary, fontFamily:'Lato-Regular'}}
                />
            </View>
            <Text type = "Bold" type = "regular" style = {styles.guest} onPress = {()=>{this.guestVisitor();}}>CONTINUE AS GUEST</Text>
          </View>
          ) : (
            <ActivityIndicator size="large" />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  img:{
    marginHorizontal:10,
    width:290,
    height:80
  },
  guest:{
    color:colors.secondary,
    textDecorationLine:'underline', 
    textDecorationColor:colors.secondary,
  }
})
