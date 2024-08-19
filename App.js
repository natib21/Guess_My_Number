import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StaraGameScreen from "./screens/StartGameScreen";
export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <StaraGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
