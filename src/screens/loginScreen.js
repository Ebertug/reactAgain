import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';
import {CustomButton, CustomInput, CustomPageLabel, CustomTextButton} from '../components/'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');    
  const [password, setPassword] = useState('');

  return (
    <View style={styles.mainContainer}>
          <CustomPageLabel pageLabel="Log in" />

        <View style={styles.inputContainer}>

          <CustomInput  
            label="E-mail"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your E-mail"
          />
          
          <CustomInput 
            variable={password}
            onChangeText={setPassword}
            label="Password"
            secureTextEntry={true}
            placeholder="Enter Your Password"
          />

          <CustomTextButton text="Forgot Password?" setOnPress={() => navigation.navigate("ForgotPasswordScreen")}/>

          <CustomButton title= "Log In" setOnPress={() => navigation.navigate("HomeScreen")}>  </CustomButton>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or Log In With</Text>
            <View style={styles.dividerLine} />
          </View>
          
          <TouchableOpacity style={styles.googleButton} onPress={() => console.log("Google Pressed")}>
            <Image 
              source={require('../../assets/googleIcon.png')} 
              style={styles.googleIcon}
            />
          </TouchableOpacity>
          
          <TouchableOpacity  style={{alignSelf: 'center'}} onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={styles.signUpTextA}>I dont't have an account!  
              <Text style={styles.signUpTextB}> Sign Up!</Text>
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  googleIcon:{
    width: 30,  
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  googleButton:{
    alignSelf: 'center',
    width: 30,
    height: 30,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 60,
  },

  inputContainer:{
    justifyContent: 'flex-start',
    marginTop: 100,
    flex:10,
    backgroundColor: '#ffffff',
  },


  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#adadad',
  },
  
  dividerText: {
    paddingHorizontal: 10,
    color: '#666666',
    fontSize: 14,
    fontWeight: '500',
  },

  signUpContainer: {
    marginTop: 16,
    alignItems: 'center',
    backgroundColor: 'red',
  },

  signUpTextA: {
    fontSize: 16,
    fontWeight: 500,
  },

  signUpTextB: {
    color: '#1f7bff',
    fontWeight: 700,
  },
});

export default LoginScreen;