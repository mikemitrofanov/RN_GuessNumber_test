import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/colors";

function LogCard({ round, number }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.round}>#{round}</Text>
      <Text>Guessed number: {number}</Text>
    </View>
  )
}

export default LogCard;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary600,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.secondary500,
    flexDirection: 'row',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  
  round: {
    marginRight: 12,
  }
});