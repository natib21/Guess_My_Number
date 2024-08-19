import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StaraGameScreen from "./screens/StartGameScreen";
export default function App() {
  return (
    <View style={styles.rootScreen}>
      <StaraGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
