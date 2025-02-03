import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomTextButton = ({setOnPress, text, fontWeight=700}) => {
    return (
    
    <Text style={styles.textButton} onPress={() => setOnPress()}>{text}</Text>
    
    )
}


export default CustomTextButton

const styles = StyleSheet.create({

    textButton: {
        color: '#1f7bff',
        fontSize: 16,
        fontWeight: fontWeight,
        textAlign: 'center',
        alignSelf: 'flex-end',
        marginRight: '10%',

      },
})