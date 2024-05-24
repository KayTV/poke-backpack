import { View, Text } from "react-native";
import { useGetPokemonsPaginatorQuery } from "../services/pokemon";
import { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, ScrollView, Button, ActivityIndicator } from "react-native";
import PokemonsList from "./PokemonList";

const styles = StyleSheet.create({
  buttonsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  paginationButton: {
    width: "35%",
  },

  centererView: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { color: 'black', padding: 5 },
});

const getPaginationButtonOpacity = (isActive: boolean) => {
  if (!isActive) {
    return { opacity: 0 };
  }
  return {};
};
const PaginationButtons = ({
  isPrevActive,
  isNextActive,
  page,
  incrementPage,
  decrementPage,
}: any) => {
  return (
    <View style={{ ...styles.buttonsContainer }}>
      <Button
        onPress={decrementPage}
        disabled={!isPrevActive}
        title="Previous" />
    

      <View style={{ ...styles.centererView }}>
        <Text style={{ ...styles.text }}>Page: {page}</Text>
      </View>
      <Button
        onPress={incrementPage}
        disabled={!isNextActive}
        title="Next" />
    </View>
  );
};

export default PaginationButtons;