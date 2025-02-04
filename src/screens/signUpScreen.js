import { View, StyleSheet } from 'react-native'
import React , {useState} from 'react'
import {CustomButton, CustomInput, CustomPageLabel, CustomTextButton} from '../components/'

const signUpScreen = ({navigation}) => {
    const [email, setEmail] = useState('');    
    const [confirmEmail, setconfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    return (
        <View style={styles.mainContainer}>
            <CustomPageLabel pageLabel={"Sign Up"}></CustomPageLabel>
            <View style={styles.inputContainer}>
                <CustomInput 
                    variable={email} 
                    onChangeText={setEmail} 
                    label="E-mail" 
                    placeholder="Enter Your e-mail"

            />
            <CustomInput 
                variable={confirmEmail} 
                label="Confirm e-mail" 
                onChangeText={setconfirmEmail} 
                placeholder="Confirm Your E-mail"
            />
            <CustomInput 
                variable={password} 
                label="Password" 
                onChangeText={setPassword} 
                placeholder="Enter Your Password" 
                secureTextEntry={true}
            />
            <CustomInput 
                variable={confirmPassword} 
                label="Confirm Password"
                onChangeText={setconfirmPassword} 
                placeholder="Confirm Your Password" 
                secureTextEntry={true}
            />
            <CustomButton 
                title={"Sign Up"}
                setOnPress={() => console.log("Sign Up Pressed")}
            />  
            <CustomTextButton text="Already have an account? Log in" setOnPress={() => navigation.navigate("LoginScreen")}/>
            </View>
        </View>
    )
}


export default signUpScreen

const styles = StyleSheet.create({
    
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },  

    inputContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 50,
    },
    
})