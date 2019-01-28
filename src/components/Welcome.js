import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Welcome = () => {
    return (
    <View style={styles.container}>
       <Text style={styles.welcome}>
             Welcome Back,
       </Text>

       <Text style={styles.p}>
             Please sign in to continue.
       </Text>
    </View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    p: {
        color: 'rgba(0,0,0,0.5)',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    }

});
export default Welcome;
