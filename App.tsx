import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView, Platform, StatusBar } from 'react-native';
import {useState} from "react";

import StartGameScreen from "./screens/StartGame";
import GameScreen from "./screens/Game";

export default function App() {
  const [value, setValue] = useState(null);
  const numberPicked = v => setValue(v);
  
  let screen = <StartGameScreen onStart={numberPicked}/>;
  if (value) screen = <GameScreen />
  
  return (
    <LinearGradient
      style={styles.container}
      colors={['#280216', '#ddb52f']}
    >
      <ImageBackground
        source={require('./assets/images/bg.jpg')}
        resizeMode={'cover'}
        style={styles.container}
        imageStyle={styles.backgroundImageStyle}
      >
        <SafeAreaView style={styles.safeArea}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  
  backgroundImageStyle: {
    opacity: 0.15
  }
});
