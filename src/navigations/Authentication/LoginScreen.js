import React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';

import Text from '../../Config/CustomFont';
import AppButton from '../../Components/AppButton';
import colors from '../../Config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackChevron from '../../Components/BackChevron';

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
      <View style={{ flex: 1, justifyContent: 'space-evenly', marginHorizontal: 22, marginTop: 10 }}>
        <BackChevron style={styles.backChevron} onPress={() => { this.backChevronPressed() }} />
        <Image source={require('../../assets/logo.png')} style={styles.img} />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
  forgotpasswordContainer: {
    marginVertical: 10,
  },
  img: {
    alignSelf: 'center',
    top: 25,
    width: 300,
    height: 80
  },
  input: {
    borderBottomColor: colors.primary, marginHorizontal: 45, paddingLeft: 10,
  },
  inputFont: {
    fontFamily: 'Lato-Regular'
  },
  text: {
    textDecorationLine: 'underline',
    color: colors.primary
  }
})
