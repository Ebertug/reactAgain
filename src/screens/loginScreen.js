import { View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import CustomPageLabel from '../components/CustomPageLabel';

const LoginScreen = () => {

  const [email, setEmail] = useState('');    
  const [password, setPassword] = useState('');

  return (
    <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Logo</Text>
        </View>

        <View style={styles.inputContainer}>
          <CustomPageLabel pageLabel="Log in" />

          <CustomInput  
            label="e-mail"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your e-mail"
          />
          
          <CustomInput 
            variable={password}
            onChangeText={setPassword}
            label="password"
            secureTextEntry={true}
            placeholder="Enter your password"
          />
          <CustomButton title= "Log In" setOnPress={() => console.log("Log In Pressed")}>  </CustomButton>

          <Text style={styles.signUpTextA} onPress={() => console.log('Sign Up pressed')}>I dont't have an account! <Text style={styles.signUpTextB}>Sign Up!</Text></Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: '#b2e0ff',
  },

  logoContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#b2e0ff',
    padding:16,
  },

  inputContainer:{
    flex:11,
    backgroundColor: '#ffffff',
    borderColor: "#adadad",
    borderWidth: 1,
    alignItems: 'flex',
    justifyContent: 'flex',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  logoText: {
    color: 'black',
    fontSize: 32,
    marginTop: "5%",
    marginBottom: "5%"
  },


  signUpTextA: {
    marginTop: 16,
    alignSelf: "center",
    fontSize: 16,
    fontWeight: 500,
  },
  signUpTextB: {
    color: '#1f7bff',
    fontWeight: 700,
  },
});

export default LoginScreen;