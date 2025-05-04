import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const deviceWidth = Dimensions.get('window').width;
console.log('deviceWidth ', deviceWidth);
const styles = StyleSheet.create({
  title: {
    fontSize: deviceWidth > 360 ? 24 : 20,
    fontFamily: 'open-sans-bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    width: 300,
    maxWidth: '80%'
  }
});
