import { View, Text, Button, StyleSheet, Alert } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "35%",
    padding: 5,
  },
  centererView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
  },
});

const ErrorScreen = ( ) => {
  return (
    <View style={{ ...styles.centererView }}>
      <Text>
        Something went wrong ...
      </Text>
      <Button
        onPress={() => Alert.alert('Right button pressed')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
    </View>
  );
};

export default ErrorScreen;