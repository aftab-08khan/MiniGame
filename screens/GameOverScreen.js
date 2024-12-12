import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ roundsNum, userNum, resetHandler }) {
  return (
    <View style={styles.mainContainer}>
      <Title>Game Over</Title>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.textBottom}>
        Your phone needed <Text style={styles.highlight}>{roundsNum}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNum}</Text>.
      </Text>
      <PrimaryButton bgColor={styles.bgColor} onPress={() => resetHandler()}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;
const styles = StyleSheet.create({
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 4,
    borderColor: Colors.blackSecondary,
    overflow: "hidden",
    margin: 36,
    alignSelf: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  mainContainer: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignContent: "center",
  },
  textBottom: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "open-sans",
    marginBottom: 16,
  },
  highlight: {
    color: "lightblue",
    // fontWeight: "bold",
    fontSize: 26,
    fontFamily: "open-sans-bold",
  },
  bgColor: {
    backgroundColor: "#1C34B0",
  },
});
