import { View, Text, StyleSheet } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}> {children}</Text>
    </View>
  );
};
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#323232",
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "#323232",
    fontSize: 36,
    fontWeight: "bold",
  },
});
