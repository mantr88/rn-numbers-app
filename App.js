import React, { useState } from 'react'

import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screen/StartGameScreen'
import GameScreen from './screen/GameScreen'

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
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.mainOverlay}>
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
