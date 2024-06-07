import { StyleSheet, StatusBar, FlatList, View, Text, ActivityIndicator, Image } from "react-native";
import PokemonCard from "./PokemonCard";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pokemon } from "@/constants/pokemon";

const baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
const spriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const PokemonsInfo = ({ path }: { path: string }) => {
  const { id } = useLocalSearchParams();
  const imageUrl = spriteUrl + id + '.png';
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Pokemon>();

  const getPokemon = async () => {
    try {
      const response = await fetch(baseUrl + id);
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);
  
  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text>{data?.name}</Text>
          <Image source={{uri: imageUrl}}
               style={{width: 70, height: 70, paddingLeft: 3}} />
          <Image source={{uri: data?.sprites?.front_shiny}}
                style={{width: 70, height: 70, paddingLeft: 3}} />
        </>
      )}
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