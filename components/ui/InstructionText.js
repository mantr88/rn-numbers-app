import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Colors } from '../../constants/colors';

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: 'open-sans',
    color: Colors.accent500
  }
});
