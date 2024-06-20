import { StyleSheet, StatusBar, FlatList, View, Text, ActivityIndicator, Image } from "react-native";
import PokemonCard from "./PokemonCard";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pokemon } from "@/models/pokemon";

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
        <View>
          <Text style={styles.h1}>{data?.name}</Text>
          <View style={styles.imageView}>
            <Image source={{uri: imageUrl}}
               style={{width: 150, height: 150, paddingLeft: 3}} />
            <Image source={{uri: data?.sprites?.front_shiny}}
                style={{width: 150, height: 150, paddingLeft: 3}} />
          </View>
          <View>
            <Text>Types:</Text>
            <FlatList
                data={data?.types}
                renderItem={({item}) => (
                    <Text>{item.type.name}</Text>
                )}
                /> 
          </View>
        </View>
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  h1: {

    marginBottom: 10,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 35,
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
  imageView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 160
  },
  imageStyle: {
    width: 70,
    height: 70
  }
});

export default PokemonsInfo;