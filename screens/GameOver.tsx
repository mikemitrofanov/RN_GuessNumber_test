import {Image, StyleSheet, Text, View, useWindowDimensions, ScrollView} from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen({ roundsNumber = 0, restart = () => {} }) {
  const {width, height} = useWindowDimensions();
  
  let imageSize = 300
  if (width < 380) imageSize = 150;
  if (height < 400) imageSize = 80;
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }
  
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title>Game Over</Title>
        
        <View style={[styles.imageContainer, imageStyle]}>
          <Image source={require('../assets/images/success.jpg')} style={styles.image} />
        </View>
        
        <Text style={styles.summary}>It was needed <Text>{roundsNumber}</Text> rounds</Text>
        
        <PrimaryButton onPress={restart}>Restart</PrimaryButton>
      </View>
    </ScrollView>
  )
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  imageContainer: {
    overflow: 'hidden',
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