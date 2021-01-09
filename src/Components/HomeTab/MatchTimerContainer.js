import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';

function MatchTimerContainer(props) {
    return (
        <View style = {styles.matchtimerContainer}>
            <View style={styles.countdownContainer}>
                <View style = {styles.clockContainer}>
                    <Text type="black" style={styles.clock}>47 : 16</Text>
                </View>
                <View style={styles.HMTextContainer}>
                    <Text type="light" style={styles.HMText}>HOURS     </Text>
                    <Text type="light" style={styles.HMText}>MINUTES</Text>
                </View>
            </View>
            <View style={styles.seperator}>
                <Text>|</Text>
                <Text>|</Text>
                <Text>|</Text>
            </View>
            <View style={styles.matchDetails}>
                <View>
                    <Text type="bold" style={styles.date}>MARCH -7 2021, 3 PM</Text>
                </View>
                <View>
                    <Text type="bold" style={styles.venue}>QUEENSLAND TENNIS CENTER</Text>
                </View>
                <View style={styles.placeContainer}>
                    <Image source={require('../../assets/Icons/location-048.png')} style={styles.locationIcon} />
                    <Text type="light" style={styles.place}>190 lorem ipusum location ispu sei.</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    clock:{
        fontSize: 30, 
        color: colors.primary
    },
    clockContainer:{
        marginVertical:10
    },
    countdownContainer:{
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20,
    },
    date:{
      fontSize: 10,
      marginBottom:5 
    },
    HMTextContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginBottom:10 
    },
    HMText:{
        fontSize: 10
    },
    locationIcon:{
        width: 16, 
        height: 16
    },
    matchDetails:{
        paddingHorizontal: 20, 
        justifyContent: 'center',
    },
    matchtimerContainer: {
        flexDirection: 'row',
        height: 100,
        backgroundColor: colors.white,
        marginTop: 10,
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        alignSelf: 'stretch',
        elevation: 20,
        marginHorizontal: 20,
        borderRadius: 15,
        paddingHorizontal: 30,
        paddingVertical: 10
      },
    placeContainer:{
        flexDirection: 'row', 
        alignItems: 'center'
    },
    place:{
        fontSize: 9, 
        marginLeft: 5 
    },
    seperator:{
        padding: 20, 
        marginHorizontal: 20,
    },
    venue:{
        fontSize:12,
        marginBottom:5
    }
    
})

export default MatchTimerContainer;