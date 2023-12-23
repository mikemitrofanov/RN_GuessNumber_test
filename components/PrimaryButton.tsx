import {StyleSheet, Text, View, Pressable} from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed ?
          [styles.buttonInnerContainer, styles.pressed] :
          styles.buttonInnerContainer}
        android_ripple={{ color: Colors.primary600 }}
      >
          <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  
  buttonInnerContainer: {
    backgroundColor: Colors.primary500 ,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  
  text: {
    color: 'white',
    textAlign: 'center'
  },
  
  pressed: {
    opacity: 0.75,
  }
});