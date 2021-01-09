import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList, ScrollView, } from 'react-native';

import Text from '../../Config/CustomFont';
import colors from '../../Config/colors';
import Header from '../../Components/Header';
import AppButton from '../../Components/AppButton';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default class MyBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      active: 0
    };
  }

  //fetching data from server
  componentDidMount() {
    const response = fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        })
      })
  }

  previouslyBookedDetails = ({ item }) => {
    this.props.navigation.navigate("BookingConfirmed", { name: item.name, email: item.email });
  }

  gotoPaymentConfirmed = ({ item }) => {
    this.props.navigation.navigate("BookingConfirmed", { name: item.name, email: item.email });
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  _renderUpcomingBookings = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.renderItemContainer} onPress={() => { this.gotoPaymentConfirmed({ item }) }} >
        <View style={styles.calanderContainer}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 80, height: 75, marginRight: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary, borderRadius: 15 }}>
              <Text style={{ color: colors.white }}>MARCH</Text>
              <Text style={{ fontSize: 40, fontWeight: 'bold', color: colors.white }}>{item.id}</Text>
            </View>
          </View>
          <View style={{ width: 170, height: 20, }}>
            <View>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center', alignSelf: 'flex-start', alignItems: 'center' }}>
              <Ionicons name="location" size={16} color={colors.secondary} />
              <Text style={{ fontSize: 11 }}>{item.email}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => { this.openStudentCreateScreen(); }} activeOpacity={0.7} style={{ width: 65, height: 65, alignItems: "center", justifyContent: "center", }}>
          <Entypo name="chevron-thin-right" size={36} color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  _renderPreviousBookings = ({ item, index }) => {
    return (
      <View style={styles.previousBookingsContainer}>
        <View style={styles.dates}>
          <Text style={styles.nov}>NOV</Text>
          <Text style={styles.day}>{item.id}</Text>
        </View>
        <View style={{ justifyContent: 'flex-start', flexWrap: 'wrap', alignItems: 'center' }}>
          <View style={{ width: '99%' }}>
            <Text type="bold" style={styles.calanderContainer}>{item.name}</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
            <Ionicons name="location" size={16} color={colors.secondary} />
            <Text style={{ marginRight: 4, }}>{item.email}</Text>
            <AppButton
              title="details"
              buttonStyle={{ width: 50, height: 20 }}
              titleStyle={{ fontSize: 8 }}
              onPress={() => this.previouslyBookedDetails({ item })}
            />
          </View>

        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Header
            color="white"
            search={require('../../assets/Icons/searchicon.png')}
            notifications={require('../../assets/Icons/notif-032.png')}
            notificaitonPressed={() => { this.props.navigation.navigate("NotificationsReminder"); }}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.myBookings}>
            <Text type="bold" style={styles.myBookingsText}>MY BOOKINGS</Text>
          </View>
          <View style={styles.upcomingContainer}>
            <Text type="bold" style={styles.upcomingText}>UPCOMING:</Text>
          </View>
          <View style={styles.upcomingDataContainer}>
            <FlatList
              nestedScrollEnabled={true}
              data={this.state.dataSource}
              renderItem={this._renderUpcomingBookings}
              keyExtractor={(item, index) => index.toString()}
              nestedScrollEnabled={true}
            />
          </View>
          <View style={styles.previousBookingstextContainer}>
            <Text type="bold" style={styles.previousbookingsText}>PREVIOUS BOOKINGS</Text>
          </View>
          <View>
            <FlatList
              nestedScrollEnabled={true}
              onScroll={this.change}
              horizontal
              data={this.state.dataSource}
              keyExtractor={item => item.id.toString()}
              renderItem={this._renderPreviousBookings}
            />
            <View style={styles.pagination}>
              {
                this.state.dataSource.map((i, k) => {
                  return (
                    <Text key={k} style={k == this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                  );
                })
              }
            </View>
          </View>
          <View style={{ height: 50 }} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  contentContainer: {
    marginLeft: 40
  },
  calanderContainer: {
    flexDirection: 'row',
    fontSize: 24
  },
  dates: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  day: {
    fontSize: 50,
    color: colors.secondary
  },
  top: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  myBookings: {
    flexDirection: 'row',
    marginVertical: 40,
    alignSelf: 'flex-start'
  },
  myBookingsText: {
    color: colors.black,
    fontSize: 24,
  },
  nov: {
    fontSize: 26,
    color: colors.secondary,
    letterSpacing: 3
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -30,
    alignSelf: 'center'
  },
  pagingText: {
    margin: 1,
    fontSize: 14,
    color: colors.primary,
    opacity: 0.5
  },
  pagingActiveText: {
    color: 'white',
    margin: 1,
    fontSize: 14,
    color: colors.primary
  },
  previousBookingsContainer: {
    marginLeft: 5,
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    elevation: 20,
    justifyContent: 'space-between',
    marginRight: 10,
    marginVertical: 10,
    width: Dimensions.get('window').width - Dimensions.get('window').width / 5
  },
  previousbookingsText: {
    color: colors.black,
    fontSize: 16
  },
  renderItemContainer: {
    height: 100,
    flexDirection: 'row',
    marginRight: 20,
    justifyContent: 'space-between',
    marginVertical: 15,
  },
})