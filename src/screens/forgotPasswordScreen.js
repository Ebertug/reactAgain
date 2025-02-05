import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CustomButton, CustomInput, CustomPageLabel, CustomTextButton } from '../components'

const forgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  return (
    <View style={styles.mainContainer}>
      <CustomPageLabel pageLabel="Forgot Password" />
      
      <View style={styles.inputContainer}>
        <CustomInput placeholder="Enter Your E-mail" label="E-mail" onChangeText={setEmail}variable={email} />
        <CustomButton title="Send Code" setOnPress={() => console.log("Send Code Pressed")} />
        <CustomTextButton text="Turn Back to Log In Page" setOnPress={() => navigation.navigate("LoginScreen")} />
      </View>
    </View>
  )
}

export default forgotPasswordScreen

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