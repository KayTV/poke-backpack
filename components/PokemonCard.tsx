import React, { useState } from "react";


import { getPokemonIdFromURL } from "./functions/commonCalls";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, StyleSheet } from "react-native";
import { Pokemon } from "@/constants/pokemon";



const PokemonCard = ({ item }: any) => {
  const navigation = useNavigation();
  const spriteUrl: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  const id: string = item.url.split('/')[6];
  const imageURL = spriteUrl + id + '.png';

  return (
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Image source={{uri: imageURL}}
               style={{width: 50, height: 50}} />

        <Text style={styles.title}>{id} {item.name}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 8,
    marginHorizontal: 22,
    borderRadius: 16,
  },
  title: {
    fontSize: 28,
    paddingHorizontal: 10,
  },
});

export default PokemonCard;