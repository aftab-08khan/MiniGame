import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import Colors from "../constants/colors.js";

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
    <View style={styles.mainContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
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
      </Card>
    </View>
  );
}
export default GameStartScreen;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 80,
    alignItems: "center",
  },

  numberInput: {
    width: 60,
    textAlign: "center",
    height: 60,
    color: Colors.blackSecondary,
    fontWeight: "bold",
    borderBottomColor: Colors.blackPrimary,
    borderBottomWidth: 4,
    fontSize: 32,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    shadowColor: Colors.blackSecondary,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
