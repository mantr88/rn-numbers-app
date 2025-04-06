import { TextInput, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#72063c',
    elevation: 4, // shadow on Android
    shadowColor: 'black', // shadow color on iOS
    shadowOffset: { width: 0, height: 2 }, // shadow offset on iOS
    shadowRadius: 6, // shadow radius on iOS
    shadowOpacity: 0.25 // shadow opacity on iOS
  }
})
