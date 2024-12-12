import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
function PrimaryButton({ children, onPress, bgColor }) {
  console.log(bgColor, "bg");

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.grayDark }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
const styles = StyleSheet.create({
  buttonContainer: {
    margin: 6,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.blackPrimary,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    elevation: 4,
  },
  buttonText: {
    color: Colors.grayLight,
    textAlign: "center",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.5,
  },
});
