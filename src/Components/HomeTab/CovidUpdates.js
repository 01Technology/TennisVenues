import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../../Config/CustomFont';
import colors from '../../Config/colors';

function CovidUpdates(props) {
    return (
        <View style = {styles.covidUpdates}>
            <View >
                <Text type="black" style={{ fontSize: 11, color: colors.secondary }}>COVID-20 UPDATES FOR COMMUNITY</Text>
            </View>
            <View style = {styles.titleContainer}>
                <Text style={{ fontSize: 8, color: colors.secondary }}>Lorsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</Text>
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
        elevation: 20,
        marginHorizontal: 20,
      },
    titleContainer:{
        paddingRight: 20
    },   
})

export default CovidUpdates;