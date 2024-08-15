import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBack}
        source={require("./assets/image/background.png")}
        resizeMode="cover"
      >
        <View style={styles.main}>
          <LinearGradient
            colors={["rgba(0,0,0,0.5)"]}
            style={styles.background}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {},
  background: {},
});
