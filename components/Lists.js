import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

function Lists({ roundNum, guess }) {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.list}>#{roundNum}</Text>
      <Text style={styles.list}>Opponent guess: {guess}</Text>
    </View>
  );
}

export default Lists;
const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#6077E6",
    elevation: 4,
    shadowColor: "#fff",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    padding: 10,
    borderRadius: 6,
    opacity: 0.9,
    margin: 6,
  },
  list: {
    color: "#fff",
  },
});
