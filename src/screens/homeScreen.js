import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomButton, CustomInput, CustomPageLabel } from '../components'

const homeScreen = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <CustomPageLabel pageLabel="Home Page" />
            <View style={styles.inputContainer}>
                <CustomInput label="Enter Your Data" placeholder="Enter Your Data" />
                <CustomButton title="Send Taken Data" setOnPress={() => console.log("Send Taken Data Pressed")} />
            
            

            <CustomButton title="Send Data" setOnPress={() => console.log("Send Data Pressed")} />
            <CustomButton title="Receive Data" setOnPress={() => console.log("Receive Data Pressed")} />
            
            <CustomButton title="Log Out" setOnPress={() => navigation.navigate("LoginScreen")} />
            </View>
        </View>
    )
}

export default homeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },

    inputContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 100,
    },

})