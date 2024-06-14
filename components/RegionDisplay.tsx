import React, { useEffect, useState } from "react";


import { getPokemonIdFromURL } from "./functions/commonCalls";
import { View, Image, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Pressable, Button, SafeAreaView } from "react-native";
import { Pokemon } from "@/models/pokemon";
import { Link, useNavigation } from "expo-router";
import PokemonCard from "./PokemonCard";
import { FontAwesome } from "@expo/vector-icons";

const baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/'


const RegionDisplay = ({ item }: any) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setTest] = useState<Pokemon[]>([]);
  const [isButtonPressed, setButtonPressed] = useState(false);
  const title = 'Get '+ item.name + ' Pokemon';

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
    <SafeAreaView style={styles.container}>
        <View style={styles.headerDisplay}>
            <Text style={styles.headerText}>{item.name}</Text>
        </View>
        <View style={styles.regionZones}>
            <Text>
                {item.desc}
            </Text>
            <Image key={item.id} source={item.image} style={{height: 200, width: 200, alignSelf: "center", margin: 5, borderRadius: 10}}/>
            
            <Button color={'#DF8803'} title={title} onPress={onPress}>
            </Button>
        </View>
        {isButtonPressed ? (
            <Text>
            </Text>
        ) : (
            <FlatList
                data={data}
                numColumns={4}
                renderItem={({item}) => (
                    <PokemonCard item={item} />
          )}
        />
      )}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  headerDisplay: {
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#C91E0E'
  },
  headerText: {
    color: 'white',
    fontSize: 30
  },
  regionZones: {
    textAlign: 'center',
    alignItems: 'stretch',
    marginBottom: 10
  }
});

export default RegionDisplay;