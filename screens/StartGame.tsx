import {StyleSheet, TextInput, View, Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";
import Colors from "../constants/colors";

function StartGameScreen({ onStart }) {
  const [value, setValue] = useState('');
  
  const inputHandler = (text) => setValue(text);
  const reset = () => setValue('')
  const confirm = () => {
    const v = parseInt(value);
    if (isNaN(v) || v <= 0 || v > 99) {
      Alert.alert(
        'Wrong value',
        'Use number between 0 and 99',
        [{ text: 'OK', style: 'destructive', onPress: reset }]
      );
      return;
    }
  
    onStart(v);
  }
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType={'number-pad'}
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={inputHandler}
        value={value}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={reset}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer }>
          <PrimaryButton onPress={confirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // shadow for android ?
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  
  buttonsContainer: {
    flexDirection: 'row',
  },
  
  buttonContainer: {
    flex: 1,
  }
  
});