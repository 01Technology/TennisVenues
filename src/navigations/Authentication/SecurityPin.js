import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import AppButton from '../../Components/AppButton';

import BackChevron from '../../Components/BackChevron';
import colors from '../../Config/colors';
import Text from '../../Config/CustomFont';

export default class SecurityPin extends React.Component {

    confirmPressed = () => {
        //check
        this.props.navigation.navigate("TouchAuth");
    }

    backChevronPressed = () => {
        this.props.navigation.navigate("FirstScreen");
    }

    render() {
        return (
            <View style={styles.boxContainer}>
                <BackChevron style={styles.backChevron} onPress={() => { this.backChevronPressed() }} />
                <View>
                    <Text style={styles.createpinText}>CREATE SECURITY PIN</Text>
                </View>
                <View style={styles.inputFieldsContainer}>
                    <View>
                        <Input
                            maxLength = {1}
                            style = {styles.inputText}
                            inputContainerStyle={styles.input}
                            keyboardType="number-pad"
                        />
                    </View>
                    <View>
                        <Input
                            maxLength = {1}
                            style = {styles.inputText}
                            inputContainerStyle={styles.input}
                            keyboardType="number-pad"
                        />
                    </View>
                    <View>
                        <Input
                            maxLength = {1}
                            style = {styles.inputText}
                            inputContainerStyle={styles.input}
                            keyboardType="number-pad"
                        />
                    </View>
                    <View>
                        <Input
                            maxLength = {1}
                            style = {styles.inputText}
                            inputContainerStyle={styles.input}
                            keyboardType="number-pad"
                        />
                    </View>
                </View>
                <View style = {styles.buttonContainer}>
                    <AppButton 
                        title = "confirm"
                        buttonStyle = {styles.buttonStyle}
                        titleStyle = {styles.titleStyle}
                        onPress = {()=> {this.confirmPressed()}}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backChevron: {
        position: 'absolute',
        top: 35,
        left: 10
    },
    boxContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer:{
        marginTop:30
    },
    buttonStyle:{
        width:160, height:45,
    },
    createpinText:{
        alignSelf: 'center', 
        marginBottom: 50 
    },
    input: {
        borderBottomColor: colors.primary,
        width: 50,
    },
    inputText:{
        textAlign:'center'
    },
    inputFieldsContainer:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    titleStyle:{
        fontSize:16
    }

})