import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const img = require('../assets/logo28.png');

const Logo = () => {
    return (
       <View>
            <Image source={img} style={styles.logo} />
       </View>
    );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginLeft: 10
  }
});
export default Logo;
