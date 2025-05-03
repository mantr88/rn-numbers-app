import React, { useState, useEffect } from 'react';

import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Text
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar as StatusBarExpo } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen';
import { Colors } from './constants/colors';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [loaded, error] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  // if (!fontsLoaded) {
  //   return <Text>Loading...</Text>;
  // }
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const pickNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = guessRounds => {
    setGameIsOver(true);
    setGuessRounds(guessRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
    setGameIsOver(false);
  };

  let screen = <StartGameScreen pickUserNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} setGameIsOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBarExpo />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.mainOverlay}
      >
        <ImageBackground
          source={require('./assets/images/background.jpg')}
          resizeMode='cover'
          style={styles.mainOverlay}
          imageStyle={{ opacity: 0.15 }}
        >
          <SafeAreaView style={styles.mainOverlay}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  mainOverlay: {
    flex: 1
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
