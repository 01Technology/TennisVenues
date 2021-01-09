import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { View, StyleSheet, Image } from 'react-native';
import { ButtonGroup, Avatar, Badge, Button, Divider } from 'react-native-elements';

import AppButton from '../../Components/AppButton';
import { Rating } from "react-native-rating-element";
import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';
import { Ionicons } from '@expo/vector-icons';
import favourites from '../../utils/favourites.json';

const info = {
    'name': 'SHELDON COOPER',
    'age': '25',
    'gender': 'MALE',
    'playerlevel': 'BEGINNER',
    'handSwing': 'RIGHT HANDED',
    'preferredCourt': 'CLAY COURT'
}
class CustomTopBarNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedButtonIndex: 0,
            username: 'USER NAME',
            location: 'AUSTRALIA',
        };
        this.buttons = ["PROFILE", "", "FAVOURITES"];
    }

    buttonSelected = (index) => {
        this.setState({ selectedButtonIndex: index });
    }

    settings = () => {
        this.props.navigation.navigate('Settings');
    }

    booktheCourt = ({ item }) => {
        this.props.navigation.navigate('BookTheCourt', { name: item.title, email: item.location })
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.selectedButtonIndex === 0 ?
                        <>
                            <View style={styles.curvedbackgroundViewStyleforProfile}>
                            </View>
                            <View style={styles.curvedforegroundViewStyleforProfile}>
                            </View>
                        </>
                        :
                        <>
                            <View style={styles.curvedbackgroundViewStyle}>
                            </View>
                            <View style={styles.curvedforegroundViewStyle}>
                            </View>
                        </>
                }
                <TouchableOpacity onPress={() => { this.settings(); }} activeOpacity={0.7} style={styles.settingContainer}>
                    <Image source={require('../../assets/Icons/gear-242.png')} style={styles.setting} />
                </TouchableOpacity>
                <View>
                    <View style={styles.avatarContainer}>
                        <Avatar
                            size="large"
                            icon={{ name: 'user', type: 'font-awesome', color: colors.white, size: 62 }}
                            rounded titleStyle={{ color: 'black', fontSize: 25 }}
                            //onPress={() => this.props.navigation.navigate("PhoneCamera")}
                            overlayContainerStyle={{ backgroundColor: 'white' }}
                        />
                        <Badge
                            containerStyle={styles.badgeContainer}
                            badgeStyle={styles.badgeStyle}
                            value={<Image
                                source={require('../../assets/Icons/PLUS-202.png')}
                                onPress={() => console.log("Works!")}
                                style={styles.badge}
                            />}
                        />
                    </View>
                    <Text style={styles.username}>{this.state.username}</Text>
                    <View style={styles.locationContainer}>
                        <Image source={require('../../assets/Icons/location-048.png')} style={styles.locationImage} />
                        <Text style={styles.locationText}>{this.state.location}</Text>
                    </View>
                </View>

                <ButtonGroup
                    onPress={(index) => { this.buttonSelected(index); }}
                    selectedIndex={this.state.selectedButtonIndex}
                    buttons={this.buttons}
                    selectedTextStyle={{ fontFamily: 'Lato-Black', color: colors.black, fontSize: 16 }}
                    textStyle={styles.buttongroupTextStyle}
                    underlayColor="transparent"
                    selectedButtonStyle={{ backgroundColor: 'transparent', borderWidth: 0, }}
                    containerStyle={styles.buttonContainer}
                    innerBorderStyle={{ color: 'transparent' }}
                />
                <View>
                    {
                        this.state.selectedButtonIndex == 0 ?
                            <View style={styles.profileContent}>
                                <View style={{ height: 32 }}></View>
                                <View style={{ width: '100%' }}>
                                    <Text style={styles.commonText}>NAME:                <Text type="black">{info.name}</Text></Text>
                                    <Text style={styles.commonText}>AGE:                     <Text type="black">{info.age}</Text></Text>
                                    <Text style={styles.commonText}>GENDER:          <Text type="black">{info.gender}</Text></Text>
                                </View>
                                <View style={{ height: 32 }}></View>
                                <View style={{ width: '100%' }}>
                                    <Text style={styles.commonText}>PLAYER LEVEL:               <Text type="black">{info.playerlevel}</Text></Text>
                                    <Text style={styles.commonText}>HAND SWING:               <Text type="black">{info.handSwing}</Text></Text>
                                    <Text style={styles.commonText}>PREFERRED COURT:   <Text type="black">{info.preferredCourt}</Text></Text>
                                </View>
                                <View style={{ height: 32 }}></View>
                                <View style={{ marginTop: 20 }}>
                                    <Button
                                        containerStyle={styles.buttonContainerStyle}
                                        title="EDIT PROFILE"
                                        buttonStyle={styles.buttonStyle}
                                        onPress={() => { this.props.navigation.navigate("EditProfile", { name: info.name, age: info.age, gender: info.gender, playerlevel: info.playerlevel, handSwing: info.handSwing, preferredCourt: info.preferredCourt }) }}
                                        titleStyle={styles.buttonTitleStyle}
                                    />
                                </View>
                            </View>
                            :
                            <View>
                                {
                                    favourites.map(item => {
                                        return (
                                        <View>   
                                            <View key={item.id} style={{ flexDirection: 'row', marginHorizontal: 20, }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Image source={{ uri: item.url }} style={{ width: 100, height: 70, alignSelf: 'baseline' }} />
                                                    <View>
                                                        <Ionicons name="location" size={24} color={colors.secondary} />
                                                    </View>
                                                </View>
                                                <View style={{ width: Dimensions.get('window').height / 7, height: 20 }}>
                                                    <View>
                                                        <Text type="bold" style={{ fontSize: 12, }}>{item.title}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{ fontSize: 8, width: '100%' }}>{item.location}</Text>
                                                    </View>
                                                    <View style={{ alignItems: 'flex-start' }}>
                                                        <Rating
                                                            rated={4}
                                                            totalCount={5}
                                                            size={16}
                                                            onIconTap={position => console.log(`User pressed: ${position}`)}
                                                            direction="row"
                                                            type="custom" // default is always to "icon"
                                                            selectedIconImage={require('../../assets/Icons/BALL-2-391.png')}
                                                            emptyIconImage={require('../../assets/Icons/BALL-531.png')}
                                                            ratingColor={colors.primary}
                                                        />
                                                    </View>
                                                </View>
                                                <View style={{ justifyContent: 'center' }}>
                                                    <AppButton 
                                                        title = "book this court"
                                                        onPress = {()=>{this.booktheCourt();}}
                                                        buttonStyle = {{width:120, height:35}}
                                                        titleStyle = {{fontSize:10}}
                                                    />
                                                </View>
                                            </View>
                                            <Divider style = {{height: 1, backgroundColor:colors.primary, marginVertical:10, marginHorizontal:20}}/>
                                        </View>
                                        );
                                    })
                                }
                            </View>
                    }
                </View>
            </View>
        );
    }
}

export default CustomTopBarNavigator;

const styles = StyleSheet.create({
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    badge: {
        width: 30, height: 30,
    },
    badgeStyle: {
        backgroundColor: 'transparent', borderWidth: 0
    },
    badgeContainer: {
        width: 20, height: 20, left: 30, bottom: 30,

    },
    buttonContainer: {
        //position:'absolute',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
        fontSize: 16,
        marginVertical: 40,
    },
  
    buttonTitleStyle: {
        fontSize: 12, 
        color: colors.primary, 
        fontFamily: 'Lato-Regular'
    },
    buttonStyle: {
        width: 120, 
        height: 35, 
        borderRadius: 50, 
        borderWidth: 2, 
        backgroundColor: 'transparent'
    },
    buttongroupTextStyle: {
        fontFamily: "Lato-Black", 
        color: colors.white, 
        fontSize: 16
    },
    commonText: {
        fontSize: 16,
        alignSelf: 'flex-start',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    curvedforegroundViewStyle: {
        position: 'absolute',
        backgroundColor: colors.primary,
        width: '120%',
        height: '80%',
        borderBottomRightRadius: 400,
        top: -Dimensions.get('window').height / 3,
    },
    curvedforegroundViewStyleforProfile: {
        position: 'absolute',
        backgroundColor: colors.primary,
        width: '120%',
        height: '80%',
        borderBottomLeftRadius: 400,
        top: -Dimensions.get('window').height / 3,
    },
    curvedbackgroundViewStyle: {
        position: 'absolute',
        backgroundColor: '#f5f5f5',
        width: '120%',
        height: '80%',
        borderBottomRightRadius: 400,
        top: -Dimensions.get('window').height / 3 + 20,
        shadowColor: '#000',
    },
    curvedbackgroundViewStyleforProfile: {
        position: 'absolute',
        backgroundColor: '#f5f5f5',
        width: '120%',
        height: '80%',
        borderBottomLeftRadius: 400,
        top: -Dimensions.get('window').height / 3 + 20,
        shadowColor: '#000',
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    locationText: {
        fontSize: 13,
        marginVertical: 5
    },
    locationImage: {
        width: 18,
        height: 18
    },
    profileContent: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    settingContainer: {
        position: 'absolute',
        top: 30,
        left: 15,
    },
    setting: {
        width: 50,
        height: 50,
        zIndex: 999,
    },
    username: {
        fontSize: 24,
        color: colors.white
    },
})