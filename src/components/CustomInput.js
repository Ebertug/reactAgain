import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({variable, onChangeText, label, secureTextEntry, placeholder}) => {
    return (
        <View>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={variable}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor={'white'}
            />

        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({

    inputLabel:{
        marginLeft: '10%',
        fontSize: 18,
        color: 'black',
        fontWeight: 600,
    },
    
    input: {
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: 10,
        marginBottom: 20,
        padding: 12,
        borderWidth: 2,
        borderRadius: 16,
        borderColor: '#1f7bff',
        backgroundColor: '#b2e0ff',
        color:'#000000',
        fontSize: 16,
        placeholderTextColor: '#313131',
    },
    
})