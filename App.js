import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoading] = useFonts(
    { "open-sans": require("./assets/fonts/OpenSans-Regular.ttf") },
    { "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf") }
  );
  if (!fontsLoading) return <AppLoading />;

  const [validation, setValidation] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [roundNum, setRoundNum] = useState(0);
  function handleValidation(checkNum) {
    setValidation(checkNum);
    setIsGameOver(false);
  }
  function resetHandler() {
    setValidation(null);
    setRoundNum(0);
  }
  function handleGameOver() {
    setIsGameOver(true);
  }
  let screen = <GameStartScreen onPickedNum={handleValidation} />;
  if (validation)
    screen = <GameScreen userNum={validation} gameOver={handleGameOver} />;

  if (isGameOver && validation)
    screen = (
      <GameOverScreen
        roundsNum={roundNum}
        userNum={validation}
        resetHandler={resetHandler}
      />
    );
  return (
    <LinearGradient
      colors={["#0D1953", "#1C34B0"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/bgImg.jpg")}
        imageStyle={styles.bgImg}
        resizeMode="cover"
        style={styles.rootContainer}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    fontFamily: "open-sans-bold",
  },
  bgImg: {
    opacity: 0.8,
  },
});
