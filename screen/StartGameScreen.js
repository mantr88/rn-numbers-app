import React, { useState } from 'react'

import { TextInput, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { Colors } from '../constants/colors'

function StartGameScreen({ pickUserNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('')

  const numberInputHandler = enteredText => {
    setEnteredNumber(enteredText)
  }

  const resetInputHandler = () => {
    setEnteredNumber('')
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      )
      return
    }
    console.log('Valid number:', chosenNumber)
    pickUserNumber(chosenNumber)
    setEnteredNumber('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='00'
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4, // shadow on Android
    shadowColor: 'black', // shadow color on iOS
    shadowOffset: { width: 0, height: 2 }, // shadow offset on iOS
    shadowRadius: 6, // shadow radius on iOS
    shadowOpacity: 0.25 // shadow opacity on iOS
  },
  numberInput: {
    height: 50,
    width: 50,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontSize: 32,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between'
  },
  buttonContainer: {
    flex: 1
  }
})
