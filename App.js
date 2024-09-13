import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [validation, setValidation] = useState();
  function handleValidation(checkNum) {
    setValidation(checkNum);
  }
  let screen = <GameStartScreen onPickedNum={handleValidation} />;
  if (validation) return (screen = <GameScreen />);

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
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  bgImg: {
    opacity: 0.8,
  },
});
