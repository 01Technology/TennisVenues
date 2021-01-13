import React from 'react';
import {View, StyleSheet, Image} from 'react-native';    
import {Input} from 'react-native-elements';

import urls from '../../utils/urls';
import colors from '../../Config/colors';
import BackChevron from '../../Components/BackChevron';
import AppButton from '../../Components/AppButton';

export default class Update extends React.Component{
    constructor(){
        super();
        this.state = {
            username:'',
            email:'',
            contactno:'',
            pw: '',
            confirmpw:'',
        }
    }
    
    backChevronPressed = () => {
     this.props.navigation.navigate("FirstScreen");
    }

    signupClick = () => {
      this.props.navigation.navigate("OTPVerification");
    }

render(){
    return (
      <View style = {styles.container}>
            <BackChevron style={styles.backChevron} onPress={() => { this.backChevronPressed() }} />
            <Image source = {urls.logo} style = {styles.img} />
            <View style = {styles.inputfieldsContainer}>
              <Input
                placeholder='USERNAME'
                inputContainerStyle ={styles.input}
                onChangeText = { (val) => {this.setState({username:val})}}
                style = {styles.inputFont}
              />
              <Input
                placeholder='EMAIL'
                inputContainerStyle ={styles.input}
                onChangeText = { (val) => {this.setState({email:val})}}
                style = {styles.inputFont}
              />
              <Input
                placeholder='CONTACT NUMBER'
                inputContainerStyle ={styles.input}
                onChangeText = { (val) => {this.setState({contactno:val})}}
                style = {styles.inputFont}
              />
              <Input
                placeholder='PASSWORD'
                inputContainerStyle ={styles.input}
                onChangeText = { (val) => {this.setState({pw:val})}}
                style = {styles.inputFont}
              />
              <Input
                placeholder='CONFIRM PASSWORD'
                inputContainerStyle ={styles.input}
                onChangeText = { (val) => {this.setState({confirmpw:val})}}
                style = {styles.inputFont}
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
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'space-evenly', 
    marginHorizontal:22, 
    marginTop:10
  },
  backChevron:{
    position:'absolute', 
    top:35,
    left:0
  },
  img:{
    alignSelf:'center',
    top:25,
    width:300,
    height:80
  },
  input:{
    borderBottomColor:colors.primary, marginHorizontal:45, paddingLeft:10,
  },
  inputFont:{
    fontFamily:'Lato-Regular'
  },
  inputfieldsContainer:{
    justifyContent:'center', 
    alignItems:'center',
  },
  signupBtnStyle:{ 
    backgroundColor: colors.smokewhite, 
    borderColor:colors.primary, 
    borderWidth:1 ,
    alignSelf:'center'
  },
})
