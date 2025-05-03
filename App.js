import React, { useState } from 'react'

import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screen/StartGameScreen'
import GameScreen from './screen/GameScreen'
import { Colors } from './constants/colors'

export default function App() {
  const [userNumber, setUserNumber] = useState(0)

  const pickNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen pickUserNumber={pickNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />
  }

  return (
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
  )
}

const styles = StyleSheet.create({
  mainOverlay: {
    flex: 1
  }
})
