import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#6077E6",
    padding: 18,
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
