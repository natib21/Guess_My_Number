import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GameOverScreen from "./screens/GameOverScreen";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StaraGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameIsOverHandler = () => {
    setGameIsOver(true);
  };
  let screen = <StaraGameScreen onConfirm={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameIsOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/image/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
