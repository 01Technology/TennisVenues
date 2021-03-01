import React from 'react';
import {StyleSheet } from 'react-native';
import {Button} from 'react-native-elements';

import colors from '../Config/colors';

function AppButton({title, onPress, color = "primary", titleStyle, buttonStyle }) {
    return (
        <Button 
            title={title}
            buttonStyle={[styles.buttonStyle, {backgroundColor:colors[color]}, buttonStyle]} 
            onPress={onPress}
            titleStyle = {[styles.titleStyle, titleStyle]}
        />
    );
}

const styles = StyleSheet.create({
    buttonStyle:{ 
        width:180, 
        height:55, 
        backgroundColor:colors.primary, 
        borderRadius:50, 
    },
    titleStyle:{
        fontSize:24, 
        fontFamily:'Lato-Regular',
        textTransform: 'uppercase'
    }
})

export default AppButton;