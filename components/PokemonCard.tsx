import React, { useState } from "react";


import { getPokemonIdFromURL } from "./functions/commonCalls";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Pokemon } from "@/models/pokemon";
import { Link, useNavigation } from "expo-router";



const PokemonCard = ({ item }: any) => {
  const navigation = useNavigation();
  const spriteUrl: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  const id: string = item.url.split('/')[6];
  const imageURL = spriteUrl + id + '.png';

  return (
    <Link 
        style={styles.item}
        href={{
          pathname: "/pokemon/[id]",
          params: { id: id }
        }}>
        <Image source={{uri: imageURL}}
               style={{width: 70, height: 70, paddingLeft: 3}} />
        {/* <Text style={styles.title}>#{id}: {item.name}</Text> */}
    </Link>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 1,
    paddingVertical: 1,
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 16,
    backgroundColor: '#EAEAEA',
    borderWidth: 2
  },
  title: {
    // paddingHorizontal: 10,
  },
});

export default PokemonCard;