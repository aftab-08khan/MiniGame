import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <Text style={styles.title}>Opponent Guess</Text>
      <View>
        <Text>Higher or Lower</Text>
      </View>
    </View>
  );
}
export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: "#333",
  },
  title: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    fontWeight: "bold",
  },
});
