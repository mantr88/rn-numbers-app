import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Title from '../components/Title'

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Game Screen</Title>
      <View>
        <Text>GameScreen</Text>
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 100
  }
})
