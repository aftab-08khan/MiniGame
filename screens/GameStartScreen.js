import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function GameStartScreen({ onPickedNum }) {
  const [enterNum, setEnteredNum] = useState("");
  function handleInputValue(value) {
    setEnteredNum(value);
  }
  function handleReset() {
    setEnteredNum("");
  }
  function handleConfirm() {
    const vaildNum = parseInt(enterNum);
    if (isNaN(vaildNum) || vaildNum <= 0 || vaildNum > 99) {
      Alert.alert("Invalid Number", "Please enter a number between 1 to 99", [
        { style: "distractive", text: "Okay", onPress: handleReset },
      ]);
      return;
    }
    onPickedNum(vaildNum);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        maxLength={2}
        value={enterNum}
        onChangeText={handleInputValue}
        keyboardType="number-pad"
        style={styles.numberInput}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default GameStartScreen;
const styles = StyleSheet.create({
  inputContainer: {
    padding: 24,
    marginTop: 100,
    gap: 12,
    alignItems: "center",
    marginHorizontal: 24,
    // backgroundColor: "#667A74",
    backgroundColor: "#6077E6",
    borderRadius: 8,
    elevation: 6,
    shadowColor: "##1F1F1F",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    opacity: 0.8,
  },
  numberInput: {
    width: 60,
    textAlign: "center",
    height: 60,
    color: "#1F1F1F",
    fontWeight: "bold",
    borderBottomColor: "#0A0A0A",
    borderBottomWidth: 4,
    fontSize: 32,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    shadowColor: "##1F1F1F",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
