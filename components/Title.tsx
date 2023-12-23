import {StyleSheet, Text} from "react-native";
import Colors from "../constants/colors";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.secondary500,
    padding: 12,
  }
});