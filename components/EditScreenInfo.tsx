import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';
import { Pokemon } from '@/models/pokemon';
import PokemonCard from './PokemonCard';
import { Link, useNavigation } from 'expo-router';
import { Region } from '@/models/regions';
import Regions from '@/constants/Regions';
import RegionDisplay from './RegionDisplay';

const baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/'

export default function EditScreenInfo({ path }: { path: string }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Pokemon[]>([]);
  const [test, setTest] = useState<Pokemon[]>([]);
  const regions: Region[] = Regions;

  console.log(regions);

  const getPokemon = async () => {
    try {
      const response = await fetch(baseUrl + '?limit=151&offset=0');
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <View  >
      {regions.map((region, index) => {
        return (
            <RegionDisplay key={index} item={region} />
          )
        })}   
    </View>
  );
}

const styles = StyleSheet.create({
  viewPort: {
    display: 'flex'
  },
  regionColor: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'red'
  }
});
