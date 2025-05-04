import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

import { Colors } from '../../constants/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth > 360 ? 100 : 80,
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth > 360 ? 24 : 12,
    borderRadius: 8,
    margin: deviceWidth > 360 ? 24 : 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth > 360 ? 36 : 28,
    color: Colors.accent500,
    fontWeight: 'bold'
  }
});
