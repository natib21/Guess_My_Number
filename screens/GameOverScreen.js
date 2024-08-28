import { Text, StyleSheet, View, Image } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your Phone Needed <Text style={styles.highLight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highLight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    /* fontFamily: "open-sans", */
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highLight: {
    /*    fontFamily: "open-sans", */
    color: "black",
  },
});
