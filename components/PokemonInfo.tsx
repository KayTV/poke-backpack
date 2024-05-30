import { StyleSheet, StatusBar, FlatList, View, Text } from "react-native";
import PokemonCard from "./PokemonCard";
import { useLocalSearchParams } from "expo-router";

const PokemonsInfo = ({ path }: { path: string }) => {
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  h1: {
    marginTop: 17,
    fontStyle: "normal",
    fontSize: 32,
    lineHeight: 47,
  },
  h2: {
    margin: 0,
    padding: 0,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 9,
  },
});

export default PokemonsInfo;