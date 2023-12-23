import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/colors";

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  )
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  text: {
    color: Colors.secondary500,
    fontSize: 36,
    fontWeight: 'bold',
  }
});