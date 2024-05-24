export interface  Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: PokemonForm[];
  game_indices: VersionGameIndex[];
  held_items:PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites[];
  species: PokemonSpecies[];
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface PokemonAbility {

}

export interface PokemonForm {

}

export interface VersionGameIndex {

}

export interface PokemonHeldItem {

}

export interface PokemonMove {

}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface PokemonSpecies {

}

export interface PokemonStat {

}

export interface PokemonType {

}

export interface Pokedex {
  count: number;
  next: string;
  previous: string;
  results: PokedexResult[];
}

export interface PokedexResult {
  name: string;
  url: string;
}

export interface PokedexPokemon {
  name: string;
  sprite: string;
  id?: number;
}
