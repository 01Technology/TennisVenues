import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';

import { Rating } from "react-native-rating-element";
import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';
import Header from '../../Components/Header';
import AppButton from '../../Components/AppButton';
import LoadingVenuesScreen from '../../Components/LoadingVenuesScreen';

import { Ionicons } from '@expo/vector-icons';

export default class Plus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      dataSource: [],
      images: [],
      selectedButtonIndex: 0,
      
      stateColor:colors.smokewhite,
      subrubColor:colors.white,
      typeofcourtColor: colors.white,
      
    };
  }

  componentDidMount() {
    this.fetchDatafromServer();
  }

  fetchDatafromServer = async() => {
    try{
      this.setState({loading:true});
      const response = await fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
          loading:false
        })
      })
    }
    catch(e){
      console.log({loading:true})
    }
  }

  statePressed = () => {
    this.setState({
      subrubColor:colors.smokewhite, 
      typeofcourtColor:colors.white,
  })
  }

  subrubPressed = () => {
    this.setState({
      selectedButtonIndex:1, 
      subrubColor:colors.smokewhite, 
      stateColor:colors.white, 
      typeofcourtColor:colors.white,});
  }

  typeofcourtPressed = () => {
    this.setState({selectedButtonIndex:2, 
      typeofcourtColor:colors.smokewhite, 
      subrubColor:colors.white, 
      stateColor:colors.white, 
      typeofcourtColor:colors.smokewhite ,});
  }

  booktheCourt = ({ item }) => {
    this.props.navigation.navigate("BookTheCourt", { name: item.title, email: item.title });
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.renderItmeContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: item.url }} style={styles.image} />
          <Ionicons name="location" size={24} color={colors.secondary} />
        </View>
        <View style={styles.venueContainer}>
          <View>
            <Text type="bold" style={{ fontSize: 12, }}>{item.title}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 8, width: '100%' }}>{item.title}</Text>
          </View>
          <View style = {{alignItems:'flex-start'}}>
            <Rating
                rated={4}
                totalCount={5}
                size={16}
                onIconTap={position => console.log(`User pressed: ${position}`)}
                direction="row"
                type="custom" // default is always to "icon"
                selectedIconImage={require('../../assets/Icons/BALL-2-391.png')}
                emptyIconImage={require('../../assets/Icons/BALL-531.png')}
                ratingColor = {colors.primary}
            />
          </View>
        </View>
        <View style = {{justifyContent:'center'}} >
          <AppButton 
            title = "book the court"
            buttonStyle = {{width:100, height:25}}
            titleStyle = {{fontSize:8}}
            onPress={() => this.booktheCourt({ item })}
          />
        </View>
      </View>
    )
  }

  render() {
    const count = Object.keys(this.state.dataSource).length
    return (
      <>
        {
          this.state.loading ? 
            <LoadingVenuesScreen />
          :
          <View style={{ backgroundColor: colors.white, }}>
            <View style={styles.top}>
              <Header
                color="white"
                search={require('../../assets/Icons/searchicon.png')}
                notifications={require('../../assets/Icons/notif-032.png')}
              />
            </View>
            <View style={styles.filterContainer}>
              <Text type="bold" style={{ color: colors.primary, }}>FILTER</Text>
              <Ionicons style={{ marginLeft: 10 }} name="filter" size={18} color={colors.primary} />
            </View>
            <View style={styles.topButtonContainer}>
                <AppButton 
                  title = "state"
                  buttonStyle = {[styles.buttonStyle, {backgroundColor:this.state.stateColor}]}
                  onPress={() => { this.statePressed(); }}
                  titleStyle = {styles.titleStyle}
                />
                <AppButton 
                  title = "subrub"
                  buttonStyle = {[styles.buttonStyle, {backgroundColor:this.state.subrubColor}]}
                  onPress={() => { this.subrubPressed(); }}
                  titleStyle = {styles.titleStyle}
                />
                <AppButton 
                  title = "type of court"
                  buttonStyle = {[styles.buttonStyle, {backgroundColor:this.state.typeofcourtColor}]}
                  onPress={() => { this.typeofcourtPressed(); }}
                  titleStyle = {styles.titleStyle}
                />
            </View>
            <View>
              {
                this.state.selectedButtonIndex === 1 ?
                <> 
                  {
                    this.state.loading ? 
                    <LoadingVenuesScreen />
                    :
                    <>
                        <View>
                          <Text style={{ marginHorizontal: 20 }}>{count} VENUES NEAR SUBRUB</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between' }}>
                          <FlatList
                            data={this.state.dataSource}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={(props) =>
                              <View style={{ width: "90%", height: 1, backgroundColor: colors.primary, marginHorizontal: 20 }} />
                            }
                          />
                        </View>
                    </>
                  }
                </>
                :(this.state.selectedButtonIndex === 0) ?
                  <>
                  {
                    this.state.loading ? 
                    <LoadingVenuesScreen />
                    :
                    <>
                      <View>
                          <Text style={{ marginHorizontal: 20 }}>{count} VENUES NEAR STATE</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between' }}>
                          <FlatList
                            data={this.state.dataSource}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={(props) =>
                              <View style={{ width: "90%", height: 1, backgroundColor: colors.primary, marginHorizontal: 20 }} />
                            }
                          />
                        </View>
                    </>
                  }
                  </>
                  :
                  <> 
                  {
                    this.state.loading ? 
                    <LoadingVenuesScreen />
                    :
                    <>
                        <View>
                          <Text style={{ marginHorizontal: 20 }}>{count} TYPE OF COURT</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between' }}>
                          <FlatList
                            data={this.state.dataSource}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={(props) =>
                              <View style={{ width: "90%", height: 1, backgroundColor: colors.primary, marginHorizontal: 20 }} />
                            }
                          />
                        </View>
                    </>
                  }
                </>    
              }
            </View>
          </View>

        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle:{
    width:100, 
    height:35, 
    borderWidth:2, 
    backgroundColor: colors.smokewhite,  
    borderColor: colors.primary
  },
  filterContainer:{
    flexDirection: 'row', 
    marginHorizontal: 20, 
    alignSelf: 'flex-start',
    marginTop:30 
  },
  flatLIst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 2,
    marginHorizontal: 20,
  },
  image:{
    width: 100, 
    height: 70, 
    alignSelf: 'baseline',
    marginRight:10
  },
  renderItmeContainer:{
    flexDirection: 'row', 
    marginHorizontal: 20, 
    marginVertical: 30, 
    justifyContent:'space-between' 
  },
  top: {
    flexDirection: 'row',
    marginHorizontal:20,
  },
  titleStyle:{
    fontSize: 8, 
    color: colors.primary,
    fontFamily:'Lato-Black'
  },
  topButtonContainer:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignSelf: 'stretch', 
    marginHorizontal:20, 
    marginVertical:20 
  },
  venueContainer:{
    width: Dimensions.get('window').height / 6, 
    height: 20
  }
})