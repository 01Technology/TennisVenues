import React from 'react';
import {Entypo} from '@expo/vector-icons'
import { TouchableOpacity, } from 'react-native';

import colors from '../Config/colors';

function BackChevron({onPress, color = "primary", style}) {
  return (
    <TouchableOpacity style={style}>
      <Entypo name="chevron-thin-left" size={32} color={colors[color]} onPress={onPress} />
    </TouchableOpacity>
  );
}

export default BackChevron;