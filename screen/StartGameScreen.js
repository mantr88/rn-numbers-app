import { TextInput, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='00'
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: '#4e0329',
    elevation: 4, // shadow on Android
    shadowColor: 'black', // shadow color on iOS
    shadowOffset: { width: 0, height: 2 }, // shadow offset on iOS
    shadowRadius: 6, // shadow radius on iOS
    shadowOpacity: 0.25 // shadow opacity on iOS
  },
  numberInput: {
    height: 50,
    width: 50,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
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
