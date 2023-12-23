import {StyleSheet, View, Text, Alert, FlatList} from "react-native";
import { Ionicons } from '@expo/vector-icons';

import Title from "../components/UI/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import LogCard from "../components/Game/LogCard";

const generate = (min: number, max: number, exclude: number): number => {
  const rand = Math.floor(Math.random() * (max - min)) + min;
  return rand === exclude ? generate(min, max, exclude) : rand;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ initial, finish = () => {} } : { initial: number, finish }) {
  const initialValue = generate(1, 100, initial);
  const [guess, setGuess] = useState(initialValue);
  const [rounds, setRounds] = useState([initialValue]);
  
  useEffect(() => {
    if (guess === initial) finish(rounds.length);
  }, [guess]);
  
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  
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

    const newValue = generate(minBoundary, maxBoundary, guess);
    setGuess(newValue);
    setRounds([newValue, ...rounds]);
  }
  
  return (
    <View style={styles.screen}>
      <Title>Guess</Title>
      <NumberContainer>{guess}</NumberContainer>

      <Card>
        <InstructionText style={{marginBottom: 16}}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => recalculate('lower')}>
              <Ionicons name='md-remove' size={24} color="white"/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => recalculate('higher')}>
              <Ionicons name='md-add' size={24} color="white"/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      
      <View style={styles.listContainer}>
        <FlatList
          data={rounds}
          renderItem={(itemData) => <LogCard round={rounds.length - itemData.index} number={itemData.item}/>}
          keyExtractor={(item) => item}
        />
      </View>
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
  
  listContainer: {
    flex: 1,
    padding: 16,
  }
});