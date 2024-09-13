import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#6C7B76" }}
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
    backgroundColor: "#0A0A0A",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    elevation: 4,
  },
  buttonText: {
    color: "#DFE2E1",
    textAlign: "center",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.5,
  },
});
