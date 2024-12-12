import React from "react";
import { StyleSheet, Text, View } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 4,
    borderRadius: 6,
    borderColor: "#fff",
    padding: 24,
    justifyContent: "center",
    margin: 24,
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
});
