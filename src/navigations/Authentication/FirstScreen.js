import React, { Component } from 'react';
import { View, Image, StyleSheet, ActivityIndicator  } from 'react-native';
import * as Font from 'expo-font';

import urls from '../../utils/urls';
import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppButton from '../../Components/AppButton';

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
            <Image source = {urls.logo} style = {styles.img} />
            <View>
              <View style = {{marginBottom:15}} >
                <AppButton 
                  title = "login" 
                  onPress = { () => this.loginClick() }
                />
              </View>
              <View>
                <AppButton 
                  title = "signup" 
                  buttonStyle = {styles.signupBtnStyle}
                  titleStyle = {{color:colors.primary}}
                  onPress = { () => this.signupClick() }
                />
              </View>
            </View>
            <TouchableOpacity activeOpacity = {0.7} onPress = {this.guestVisitor}>
              <Text type = "Bold" type = "regular" style = {styles.guest} >CONTINUE AS GUEST</Text>
            </TouchableOpacity>
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
    alignItems:'center',
    backgroundColor:colors.smokewhite
  },
  img:{
    marginHorizontal:10,
    width:300,
    height:80
  },
  guest:{
    color:colors.secondary,
    textDecorationLine:'underline', 
    textDecorationColor:colors.secondary,
    fontSize:16
  },
  signupBtnStyle:{ 
    backgroundColor: colors.smokewhite, 
    borderColor:colors.primary, 
    borderWidth:1 
  }
})
