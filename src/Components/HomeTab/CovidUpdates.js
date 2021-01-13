import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../../Config/CustomFont';
import colors from '../../Config/colors'

function CovidUpdates(props) {
    return (
        <View style = {styles.covidUpdates}>
            <Text type="black" style={styles.title}>COVID-19 UPDATES FOR COMMUNITY</Text>
            <View style = {styles.subtitleContainer}>
                <Text style={styles.subTitle}>Lorsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    covidUpdates: {
        height: 80,
        backgroundColor: colors.white,
        marginVertical: 20,
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        alignSelf: 'stretch',
        marginHorizontal: 20,
      },
    subtitleContainer:{
        paddingRight: 20
    },   
    title:{
        fontSize: 11, 
        color: colors.secondary
    },
    subTitle:{
        fontSize: 8, 
        color: colors.secondary 
    }
})

export default CovidUpdates;