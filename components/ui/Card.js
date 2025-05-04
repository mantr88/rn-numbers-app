import { StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';

import { Colors } from '../../constants/colors';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: deviceWidth > 360 ? 36 : 20,
    padding: 16,
    borderRadius: 10,
    backgroundColor: Colors.primary800,
    elevation: 4, // shadow on Android
    shadowColor: 'black', // shadow color on iOS
    shadowOffset: { width: 0, height: 2 }, // shadow offset on iOS
    shadowRadius: 6, // shadow radius on iOS
    shadowOpacity: 0.25 // shadow opacity on iOS
  }
});
