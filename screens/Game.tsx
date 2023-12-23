import {StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Guess</Title>
      
      <View>
      
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
});