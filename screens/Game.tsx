import { StyleSheet, View, Text, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import Title from "../components/UI/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

const generate = (min: number, max: number, exclude: number): number => {
  const rand = Math.floor(Math.random() * (max - min)) + min;
  return rand === exclude ? generate(min, max, exclude) : rand;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ initial, finish }) {
  const [guess, setGuess] = useState(generate(1, 100, initial));
  useEffect(() => {
    if (guess === initial) finish();
  }, [guess]);
  
  const recalculate = (direction) => {
    if ((direction === 'lower' && guess < initial) ||
        (direction === 'higher' && guess > initial)) {
      Alert.alert(
        'Wrong decision',
        'Wrong decision',
        [{ text: 'OK', style: 'cancel' }]
      );
      return;
    }
    
    if (direction === 'lower') maxBoundary = guess;
    else minBoundary = guess + 1;

    setGuess(generate(minBoundary, maxBoundary, guess))
  }
  
  return (
    <View style={styles.screen}>
      <Title>Guess</Title>
      <NumberContainer>{guess}</NumberContainer>

      <Card>
        <InstructionText style={{marginBottom: 16}}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => recalculate('higher')}>
              <Ionicons name='md-remove' size={24} color="white"/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => recalculate('lower')}>
              <Ionicons name='md-add' size={24} color="white"/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  
  buttonsContainer: {
    flexDirection: 'row',
  },
  
  buttonContainer: {
    flex: 1,
  },
});