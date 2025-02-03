import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, setOnPress}) => {
    return (
            <TouchableOpacity style={styles.button} onPress={() => setOnPress()}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({

    button: {
        backgroundColor:'#1f7bff',
        borderRadius: 16,
        height: 48,
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: "center",

    },
    
    buttonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
    },

})