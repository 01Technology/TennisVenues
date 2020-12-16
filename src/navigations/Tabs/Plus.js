import React, { Component } from 'react';
import { View, StyleSheet,ScrollView, TextInput, Image, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import { Avatar, Card, Button,  } from 'react-native-elements';

import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';

import { Ionicons } from '@expo/vector-icons'; 

export default class Plus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      images:[],
    };
  }

  //fetching data from server
  componentDidMount(){

    const response = fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson,
      })
    })
  }

  statePressed = () => {
    console.log("STATE PRESSED");
  }

  subrubPressed = () => {
    console.log("subrub PRESSED");
  }

  typeofcourtPressed = () => {
    console.log("type of court PRESSED");
  }

  booktheCourt = ({item}) => {
    //console.log(item.name);
    this.props.navigation.navigate("BookTheCourt",{name: item.title, email:item.title});
  }

  //render flatlist item
  _renderItem = ({item, index}) => {
    return(
        <View style = {{flexDirection:'row', marginHorizontal:20, marginVertical:30}}>
            <View style = {{flexDirection:'row'}}>
                <Image source = {{uri:item.url}} style = {{width:100, height:70, alignSelf:'baseline'}} /> 
                <View>
                  <Ionicons name="location" size={24} color={colors.secondary} />
                </View>   
            </View>
            <View style = {{width:Dimensions.get('window').height/7, height:20}}>
                <View>
                  <Text type = "bold" style = {{fontSize:12,}}>{item.title}</Text>
                </View>
                <View>
                  <Text style = {{fontSize:8, width:'100%'}}>{item.title}</Text>
                </View>
                <View style = {{flexDirection:'row',}}>
                    <Image source = {require('../../assets/Icons/BALL-2-391.png')} style ={{width:20, height:20}} />
                    <Image source = {require('../../assets/Icons/BALL-2-391.png')} style ={{width:20, height:20}} />
                    <Image source = {require('../../assets/Icons/BALL-2-391.png')} style ={{width:20, height:20}} />
                    <Image source = {require('../../assets/Icons/BALL-2-391.png')} style ={{width:20, height:20}} />
                    <Image source = {require('../../assets/Icons/BALL-531.png')} style ={{width:20, height:20}} />
                </View>
            </View>
            <View style = {{justifyContent:'center'}}>
                <Button 
                  containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                  title="BOOK THIS COURT" 
                  buttonStyle={{ width:100, height:25, backgroundColor: colors.primary, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                  onPress={()=> this.booktheCourt({item})}
                  titleStyle = {{fontSize:8, color:colors.white}}
                />
              </View>
        </View>
    )
  }

  render() {
    const count = Object.keys(this.state.dataSource).length
    return (
      <View style={{backgroundColor:colors.white, }}>
        <View style = {styles.top}>
            <View>
                <TextInput 
                    placeholder = "SEARCH FOR VENUES" 
                    onChangeText = {(val) => {this.setState({email: val})}} 
                    style = { styles.input } 
                />
            </View>
            <View>
                <Ionicons name="search" size={30} color={colors.primary} />
            </View>   
            <View>
                <Ionicons name="notifications" size={30} color={colors.primary}/>
            </View>           
        </View>
        <View style = {{flexDirection:'row',marginHorizontal:20, alignSelf:'flex-start'}}>
          <Text type = "bold" style = {{ color:colors.primary, }}>FILTER</Text>
          <Ionicons style = {{marginLeft:10}} name="filter" size={18} color={colors.primary}/>
        </View>
        <View style = {{ flexDirection:'row', justifyContent:'space-between', alignSelf:'stretch'}}>
          <View>
            <Button 
                containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                title="STATE" 
                buttonStyle={{ width:100, height:35, backgroundColor: colors.smokewhite, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                onPress={() => { this.statePressed(); }}
                titleStyle = {{fontSize:8, color:colors.primary}}
              />
          </View>
          <View>
            <Button 
                containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                title="SUBURB" 
                buttonStyle={{ width:100, height:35, backgroundColor: colors.white, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                onPress={() => { this.subrubPressed(); }}
                titleStyle = {{fontSize:8, color:colors.primary}}
              />
          </View>
          <View>
            <Button 
                containerStyle={{ paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, }}
                title="TYPE OF COURT" 
                buttonStyle={{ width:100, height:35, backgroundColor: colors.white, borderRadius:50, borderColor:colors.primary, borderWidth:2 }}  
                onPress={() => { this.typeofcourtPressed(); }}
                titleStyle = {{fontSize:8, color:colors.primary}}
              />
          </View>
        </View>

        <View>
          <Text style = {{marginHorizontal:20}}>{count} VENUES NEAR SUBRUB</Text>
        </View>
        <View style = {{ justifyContent:'space-between'}}>
              <FlatList
                  data = {this.state.dataSource}
                  renderItem = {this._renderItem}
                  keyExtractor = {(item, index) => index.toString()}
                  ItemSeparatorComponent = {(props) => 
                      <View style = {{width:"90%", height:1, backgroundColor:colors.primary, marginHorizontal:20}} />
                    }
              />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top:{
    marginTop:25,
    padding:10,
    flexDirection:'row',
    marginLeft:10,
    justifyContent:'space-between',
    alignSelf:'stretch'
  },
  input:{
    borderRadius:12, 
    borderColor: colors.black, 
    width:250, 
    borderWidth: 0.5,
    height:35, 
    paddingHorizontal:30, 
    backgroundColor: colors.white,
    fontSize: 18,
    marginLeft:0
  },
  flatLIst:{ 
    flexDirection:'row', 
    justifyContent:'space-between',
    backgroundColor:'#fff',
    elevation: 2, 
    marginHorizontal:20,
  },
})