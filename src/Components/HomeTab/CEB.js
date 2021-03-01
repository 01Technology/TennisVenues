import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import Text from '../../Config/CustomFont';
import colors from '../../Config/colors';
import urls from '../../utils/urls';

function CEB(props) {
    return (
        <View style = {styles.CEB}>
            <View style = {styles.cebContainer}>
              <Image source = {urls.courtNearby} style = {styles.cebImage}/>
              <Text type = "light" style = {styles.text}>Courts Nearby</Text>
            </View>
            <View style = {styles.cebContainer}>
                <Image source = {urls.events} style = {styles.cebImage}/>
                <Text type = "light" style = {styles.text}>Events</Text>
            </View>
            <View style = {styles.cebContainer}>
              <FontAwesome5 name="redhat" size={36} color={colors.secondary} />
              <Text type = "light" style = {styles.text}>Brands</Text>
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
        marginBottom:10
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
    cebImage:{
        width:36,
        height:36
    },
    text:{
        fontSize:8,
    },
})
export default CEB;