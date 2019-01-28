import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleUser = (user) => {
        this.setState({ username: user });
    }

    handlePass = (pass) => {
        this.setState({ password: pass });
    }

    render() {
        return (
            <View style={styles.container} >
                <TextInput
                    style={styles.input} 
                    placeholder="Username"
                    onChangeText={this.handleUser}
                    value={this.state.username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={this.handlePass}
                    value={this.state.password}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.forgotPass}>
                    <Text
                    style={styles.forgotPassText}
                    >
                    Forgot Password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitButton}>
                    <Text
                    style={styles.submitButtonText}
                    >
                    Submit
                    </Text>
                </TouchableOpacity>

                <View style={styles.newUser}>
                    <Text
                    style={styles.newUserText}
                    >
                    New User?
                    </Text>
                <TouchableOpacity >
                    <Text style={styles.signup}>
                      Sign Up
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      marginTop: 100
   },
   input: {
      margin: 15,
      padding: 10,
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 25
   },
   submitButton: {
      backgroundColor: 'black',
      padding: 10,
      margin: 15,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      borderRadius: 25
   },
   submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
   },

   forgotPass: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   },

   forgotPassText: {
        color: 'rgba(0,0,0,0.5)',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 15,
        marginRight: 10
   },

   newUser: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
   },

   newUserText: {
    color: 'rgba(0,0,0,0.5)',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 15,
    marginRight: 10
   },

   signup: {
       color: 'blue',
       fontWeight: 'bold',
       fontSize: 15,
   }
});
