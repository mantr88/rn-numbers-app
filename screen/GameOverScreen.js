import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

import Title from '../components/ui/Title';
import { Colors } from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hilight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.hilight}>{userNumber}</Text> .
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: deviceWidth > 360 ? 300 : 200,
    height: deviceWidth > 360 ? 300 : 200,
    borderRadius: deviceWidth > 360 ? 150 : 100,
    marginTop: 36,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: Colors.primary800
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24
  },
  hilight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
});
