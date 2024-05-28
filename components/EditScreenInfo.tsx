import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';
import { Pokemon } from '@/constants/pokemon';
import PokemonCard from './PokemonCard';
import { Link } from 'expo-router';

const baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/'

export default function EditScreenInfo({ path }: { path: string }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Pokemon[]>([]);

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

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Link 
              href='app/pokemon'
              onPress={() => console.log("hello")}>
                <PokemonCard item={item} />
              </Link>
            
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
