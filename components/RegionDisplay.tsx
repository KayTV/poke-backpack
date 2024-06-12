import React, { useEffect, useState } from "react";


import { getPokemonIdFromURL } from "./functions/commonCalls";
import { View, Image, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Pressable } from "react-native";
import { Pokemon } from "@/models/pokemon";
import { Link, useNavigation } from "expo-router";
import PokemonCard from "./PokemonCard";

const baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/'


const RegionDisplay = ({ item }: any) => {
  const [isLoading, setLoading] = useState(true);
  const [test, setTest] = useState<Pokemon[]>([]);
  const [isButtonPressed, setButtonPressed] = useState(false);

  const getRegionPokemon = async (startId: number, endId: number) => {
    try {
      const response = await fetch(baseUrl + '?limit=' + endId + '&offset=' + startId);
      const json = await response.json();
      setTest(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onPress = (arg: any) => {
    console.log(arg);
    setTest([]);
    if (isButtonPressed) {
        getRegionPokemon(item.startId, item.endId);
    }
    setButtonPressed(!isButtonPressed);
  }

  return (
    <View style={styles.container}>
        <Pressable style={{margin: 10}} onPress={onPress}>
            <Text style={styles.regionColor}>{item.name}</Text>
        </Pressable>
        {isButtonPressed ? (
            <Text></Text>
        ) : (
            <View>
            {test.map((poke, index) => {
                return (
                    <View key={index}>
                        <PokemonCard  item={poke} />
                    </View>
                )
            })} 
            </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  regionColor: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'red',
    fontSize: 30
  }
});

export default RegionDisplay;