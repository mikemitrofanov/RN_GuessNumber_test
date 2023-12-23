import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView, Platform, StatusBar } from 'react-native';
import {useState} from "react";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGame";
import GameScreen from "./screens/Game";
import GameOverScreen from "./screens/GameOver";
import {useFonts} from "expo-font";

export default function App() {
  const [value, setValue] = useState(null);
  const [finished, setFinished] = useState(false);
  
  // const [loaded] = useFonts({});
  // if (!loaded) return <AppLoading />;
  
  const numberPicked = v => setValue(v);
  
  let screen = <StartGameScreen onStart={numberPicked}/>;
  if (value && !finished) screen = <GameScreen initial={value} finish={() => setFinished(true)}/>
  else if (finished) screen = <GameOverScreen />
  
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
