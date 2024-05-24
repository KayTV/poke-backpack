import { ActivityIndicator, View } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centererView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
  },
});

const LoadingScreen = () => {
  return (
    <View style={{ ...styles.centererView }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingScreen;