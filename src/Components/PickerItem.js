import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Text from '../Config/CustomFont';

function PickerItem({label, onPress}) {
    return (
        <TouchableOpacity style = {styles.container} onPress = {onPress}>
          <Text type = "bold" style = {styles.text}>{label}</Text>  
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    text:{
        padding:15,
        fontSize:17
    },
})

export default PickerItem;