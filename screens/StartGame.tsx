import {
  StyleSheet, TextInput, View, Alert, useWindowDimensions,
  KeyboardAvoidingView, ScrollView
} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import {useState} from "react";
import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

function StartGameScreen({ onStart }) {
  const [value, setValue] = useState('');
  const {width, height} = useWindowDimensions();
  
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
  
  const marginTop = height < 400 ? 30 : 100;
  
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess a number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen;


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  
  rootContainer: {
    flex: 1,
    alignItems: 'center',
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
  },
});