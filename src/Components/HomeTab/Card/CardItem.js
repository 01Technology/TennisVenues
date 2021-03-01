import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import { Rating } from "react-native-rating-element";

import Text from '../../../Config/CustomFont';
import colors from '../../../Config/colors';
import AppButton from '../../AppButton';
import urls from '../../../utils/urls';

function CardItem({image, title, subTitle, onPress}) {
    
    return (
        <View style = {styles.card}>
                <Image source = {image} style = {styles.image}/>
                <View style = {styles.contentContainer}>
                    <View>
                        <Text style = {styles.title} type = "black">{title}</Text>
                        <Text style = {styles.subTitle} type = "light">{subTitle}</Text>
                        <View style = {{alignSelf:'flex-start'}}>
                            <Rating
                                rated={4}
                                totalCount={5}
                                size={16}
                                onIconTap={position => console.log(`User pressed: ${position}`)}
                                direction="row"
                                type="custom"
                                selectedIconImage={urls.coloredTennisBall}
                                emptyIconImage={urls.whiteTennisBall}
                            />
                        </View>
                    </View>
                    <AppButton 
                        color = "white"
                        title = "book this court"
                        buttonStyle = {styles.buttonStyle}
                        titleStyle = {styles.titleStyle}
                        onPress = {onPress}
                    />
                </View>  
            </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle:{
        width:100, 
        height:35, 
        borderWidth:1
    },
    card:{
        backgroundColor:'transparent',
        marginHorizontal:5,
        marginVertical:5,
    },
    contentContainer:{
        flexDirection:'row',
        backgroundColor:colors.white,
        justifyContent:'space-between',
        alignItems:'center',
        padding:15,      
        elevation:10,
        borderRadius:12,
        borderTopRightRadius:0,
        borderTopLeftRadius:0
    },  
    image:{
        width:'100%',
        height:200,
    },
    titleStyle:{
        fontSize:8,
        color:colors.primary,
    },
    subTitle:{
        textTransform:'capitalize',
        fontSize:10,
        width:'60%',
        marginVertical:5
    },
    title:{
        textTransform:"uppercase",
        fontSize:12,
        width:210,
        marginVertical:2
    },  
})

export default CardItem;