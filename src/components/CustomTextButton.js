import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomTextButton = ({text, setOnPress}) => {
    return (
        <View>
        <TouchableOpacity style={styles.forgotPassword} onPress={setOnPress}>
            <Text style={styles.forgotPasswordText}>{text}</Text>
        </TouchableOpacity>
        </View>
    )
}

export default CustomTextButton

const styles = StyleSheet.create({


    forgotPassword: {
        alignSelf: 'flex-end',
        marginRight: "10%",
        marginTop: 10,
    },

    
    
    forgotPasswordText: {
        color: '#1f7bff',
        fontWeight: 700,
    }
    
})