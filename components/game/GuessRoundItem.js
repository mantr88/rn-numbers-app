import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';

const GuessRoundItem = ({ roundNumber, guess }) => {
  return (
    <View key={guess} style={styles.item}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>{guess}</Text>
    </View>
  );
};

export default GuessRoundItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    borderWidth: 1,
    borderColor: Colors.primary800,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  text: {
    fontFamily: 'open-sans'
  }
});
