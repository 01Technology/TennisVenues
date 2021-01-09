import React, { Component } from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../Config/colors';
import Text from '../Config/CustomFont';
import Header from '../Components/Header';
import AppButton from '../Components/AppButton';

import searching from '../utils/Searching.json';

import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default class LoadingVenuesScreen extends Component {

    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.renderItmeContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialCommunityIcons name="rectangle" size={150} color={colors.liteBlack} />
                </View>
                <View style={styles.venueContainer}>
                    <View style={{ width: 130, height: 20, backgroundColor: colors.liteBlack, marginBottom: 5 }} />
                    <View style={{ width: 130, height: 20, backgroundColor: colors.liteBlack, marginBottom: 5 }} />
                    <View style={{ width: 130, height: 20, backgroundColor: colors.liteBlack, }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ marginLeft: 15, width: 100, height: 30, backgroundColor: colors.liteBlack }} />
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loadingBallContainer}>
                    <Image source={require('../assets/Icons/tennisball-391.png')} style={styles.loadingBall} />
                    <Text style={styles.searchingforyou}>SEARCHING VENUES FOR YOU...</Text>
                </View>
                <View style={styles.headerContainer}>
                    <Header
                        color="white"
                        color="liteBlack"
                        search={require('../assets/Icons/litesearch.png')}
                        notifications={require('../assets/Icons/litenoti.png')}
                    />
                </View>
                <View style={styles.filterContainer}>
                    <Text type="bold" style={{ color: colors.liteBlack }}>FILTER</Text>
                    <Ionicons style={{ marginLeft: 10 }} name="filter" size={18} color={colors.liteBlack} />
                </View>
                <View style={styles.topButtonContainer}>
                    <AppButton
                        title="state"
                        buttonStyle={[styles.buttonStyle]}
                        titleStyle={styles.titleStyle}
                    />
                    <AppButton
                        title="subrub"
                        buttonStyle={[styles.buttonStyle]}
                        titleStyle={styles.titleStyle}
                    />
                    <AppButton
                        title="type of court"
                        buttonStyle={[styles.buttonStyle]}
                        titleStyle={styles.titleStyle}
                    />
                </View>
                <View>
                    <View>
                        <Text style={styles.searchingyourvenues}>SEARCHING FOR VENUES...</Text>
                    </View>
                    <FlatList
                        data={searching}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={(props) =>
                            <View style={{ width: "90%", height: 1, backgroundColor: colors.liteBlack, marginHorizontal: 20 }} />
                        } />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: colors.white, 
        justifyContent: 'flex-start', 
        alignContent: 'center'
    },
    loadingBallContainer: {
        position:'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems:'center',
        top:Dimensions.get('window').height/2 -100,
        zIndex: 999,
    },
    loadingBall: {
        width: 120,
        height: 120
    },
    renderItmeContainer: {
        flexDirection: 'row',

    },
    filterContainer: {
        flexDirection: 'row', 
        marginHorizontal: 20, 
        alignSelf: 'flex-start', 
        marginTop: 30
    },
    headerContainer:{
      flexDirection: 'row',
       marginHorizontal: 20,
    },
    titleStyle: {
        fontSize: 8,
        color: colors.liteBlack,
        fontFamily: 'Lato-Black'
    },
    topButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginHorizontal: 20,
        marginVertical: 20
    },
    searchingyourvenues: {
        marginHorizontal: 20,
        color: colors.liteBlack
    },
    searchingforyou: {
        fontSize: 10
    },
    buttonStyle: {
        width: 100,
        height: 35,
        borderWidth: 2,
        backgroundColor: colors.smokewhite,
        borderColor: colors.liteBlack
    },
    venueContainer: {
        justifyContent: 'center',
    }
})