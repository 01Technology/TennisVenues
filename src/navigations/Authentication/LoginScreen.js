import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';

import Text from '../../Config/CustomFont';
import AppButton from '../../Components/AppButton';
import colors from '../../Config/colors';
import BackChevron from '../../Components/BackChevron';
import urls from '../../utils/urls';

export default class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      pw: '',
    }
  }

  backChevronPressed = () => {
    this.props.navigation.navigate("FirstScreen");
  }

  loginClicked = () => {
    this.props.navigation.navigate("HomeScreen");
  }

  forgotPassword = () => {
    this.props.navigation.navigate("ForgotPassword");
  }

  render() {
    return (
      <View style={styles.container}>
        <BackChevron style={styles.backChevron} onPress={() => { this.backChevronPressed() }} />
        <Image source={urls.logo} style={styles.img} />
        <View style={styles.inputContainer}>
          <Input
            placeholder='USERNAME / EMAIL'
            inputContainerStyle={styles.input}
            onChangeText={(val) => { this.setState({ username: val }) }}
            style={styles.inputFont}
          />
          <Input
            placeholder='PASSWORD'
            inputContainerStyle={styles.input}
            onChangeText={(val) => { this.setState({ pw: val }) }}
            style={styles.inputFont}
          />
        </View>
        <View style={styles.lowerContainer}>
          <AppButton title="login" onPress={() => { this.loginClicked() }} />
          <TouchableOpacity activeOpacity={0.7} onPress={() => { this.forgotPassword() }} style={styles.forgotpasswordContainer}>
            <Text type="light" style={styles.text}>FORGOT PASSWORD?</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  backChevron: {
    position: 'absolute',
    top: 35,
    left: 0
  },
  container:{
    flex: 1, 
    justifyContent: 'space-evenly', 
    marginHorizontal: 22, 
    marginTop: 10
  },
  forgotpasswordContainer: {
    marginVertical: 10,
  },
  img: {
    alignSelf: 'center',
    top: 25,
    width: 300,
    height: 80
  },
  inputContainer:{
    justifyContent: 'center', 
    alignItems: 'center'
  },
  input: {
    borderBottomColor: colors.primary, 
    marginHorizontal: 45, 
    paddingLeft: 10,
  },
  inputFont: {
    fontFamily: 'Lato-Regular'
  },
  lowerContainer:{
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    textDecorationLine: 'underline',
    color: colors.primary
  }
})
