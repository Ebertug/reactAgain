import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image} from 'react-native';


const HomeScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Logo</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.pageLabel}>Log in</Text>
          <Text style={styles.inputLabel}>e-mail</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />
          <Text style={styles.inputLabel}>password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
          />
          <Text style={styles.textButton} onPress={() => console.log('Forgot Password pressed')}>Forgot Password?</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Log in pressed')}>
              <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
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
    padding: "16px",
    backgroundColor: '#b2e0ff',
    alignItems: 'flex',
  },

  inputContainer:{
    flex:11,
    backgroundColor: '#ffffff',
    borderColor: "#adadad",
    borderWidth: 1,
    alignItems: 'flex',
    justifyContent: 'flex',
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },

  logoText: {
    textAlign:'center',
    color: 'black',
    fontSize: '32px',
    marginTop: "5%",
    marginBottom: "5%"
  },

  pageLabel:{
    textAlign:'left',
    marginLeft: "10%",
    color: '#1f7bff',
    fontSize: '32px',
    marginTop: "20px",
    marginBottom: "40px",
    fontWeight: "500",
  },

  inputLabel:{
    marginLeft: '10%',
    fontSize: '18px',
    color: 'black',
    fontWeight: "600",
  },

  input: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop:"10px",
    marginBottom:"20px",
    padding: "12px",
    borderWidth: 1,
    borderRadius: "16px",
    borderColor: 'gray',
    backgroundColor: '#b2e0ff',
    color:'#000000',
    fontSize: "16px",
  },

  textButton: {
    color: '#1f7bff',
    fontSize: '16px',
    fontWeight: "500",
    textAlign: 'center',
    alignSelf: 'flex-end',
    marginRight: '10%',
  },

  button: {
    backgroundColor:'#1f7bff',
    borderRadius: "16px",
    height: "48px",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "40px",
    alignItems: 'center',
    justifyContent: "center",
  },

  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: "16px",
  },
  signUpTextA: {
    marginTop: "16px",
    alignSelf: "center",
    fontSize: "16px",
    fontWeight: "500",
  },
  signUpTextB: {
    color: '#1f7bff',
    fontWeight: "700",
  },
});

export default HomeScreen;