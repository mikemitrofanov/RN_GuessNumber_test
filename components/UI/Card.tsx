import {StyleSheet, View} from "react-native";
import Colors from "../../constants/colors";

function Card(props) {
  return <View style={styles.inputContainer}>{props.children}</View>
}

export  default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // shadow for android ?
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
});