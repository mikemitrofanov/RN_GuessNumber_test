import {Image, StyleSheet, Text, View} from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen({ roundsNumber = 0, restart = () => {} }) {
  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
      
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/success.jpg')} style={styles.image} />
      </View>
      
      <Text style={styles.summary}>It was needed <Text>{roundsNumber}</Text> rounds</Text>
      
      <PrimaryButton onPress={restart}>Restart</PrimaryButton>
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
  },
  
  image: {
    width: '100%',
    height: '100%',
  },
  
  summary: {
    fontSize: 20,
    marginBottom: 16,
  }
});