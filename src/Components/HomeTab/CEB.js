import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import Text from '../../Config/CustomFont';
import colors from '../../Config/colors';

function CEB(props) {
    return (
        <View style = {styles.CEB}>
            <View style = {styles.cebContainer}>
              <Image source = {require('../../assets/Icons/COURT-133.png')} style = {{width:36,height:36}}/>
              <Text type = "light" style = {{fontSize:8}}>COURTS NEARBY</Text>
            </View>
            <View style = {styles.cebContainer}>
                <Image source = {require('../../assets/Icons/TENNIS-441.png')} style = {{width:36,height:36}}/>
                <Text type = "light" style = {{fontSize:8}}>Events</Text>
            </View>
            <View style = {styles.cebContainer}>
              <FontAwesome5 name="redhat" size={36} color={colors.secondary} />
              <Text type = "light" style = {{fontSize:8}}>Brands</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    CEB: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginTop: 25,
        marginHorizontal: 20,
      },
      
    cebContainer:{
        backgroundColor:colors.white,
        justifyContent:'space-evenly',
        alignItems:'center',
        width:80,
        height:80,
        borderRadius:12.5,
        elevation:10,
    },
})
export default CEB;