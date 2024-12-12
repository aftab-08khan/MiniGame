import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;
const styles = StyleSheet.create({
  inputContainer: {
    padding: 24,
    marginTop: 30,
    gap: 12,
    alignItems: "center",
    marginHorizontal: 24,
    // backgroundColor: "#667A74",
    backgroundColor: "#6077E6",
    borderRadius: 8,
    elevation: 6,
    shadowColor: Colors.blackSecondary,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    opacity: 0.8,
    marginBottom: 22,
  },
});
