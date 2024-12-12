import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import Colors from "../constants/colors";
import Lists from "../components/Lists";
function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * max - min) + min;
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNum, gameOver }) {
  console.log(userNum);

  const initialGuess = generateRandomNumber(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessCount, setGuessCount] = useState([]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < minBoundary) ||
      (direction === "higher" && currentGuess > maxBoundary)
    ) {
      Alert.alert("Don't lie", "You know this is wrong", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNum);
    setGuessCount((prev) => [newRndNum, ...prev]);
  }
  useEffect(() => {
    if (currentGuess === userNum) gameOver();
  }, [currentGuess, userNum, gameOver]);
  const guessRoundLength = guessCount.length;
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="#fff" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" size={24} color="#fff" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <FlatList
        data={guessCount}
        renderItem={(itemData) => (
          <Lists
            roundNum={guessRoundLength - itemData.index}
            guess={itemData.item}
          />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}
export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    // backgroundColor: "#333",
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
