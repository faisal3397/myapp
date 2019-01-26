/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './src/components/Logo';
import Welcome from './src/components/Welcome';
import Login from './src/components/Login';

/* const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
}); */

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          <Logo />
          <Welcome />
          <Login />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 100,
  },

});
