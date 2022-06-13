import React, { PropsWithChildren } from 'react';
import { evolutionaryChain } from './evolutionChain';
import { Stats } from './stats';

export interface LayoutProps {
  title: string;
  children?: PropsWithChildren<React.ReactNode>;
}

export interface HomePageProps {
  pokemon: Pokemon[];
}

export interface abilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Pokemon {
  name: string;
  url: string;
  image: string;
}

export interface pokemonDetailContext {
  query: {
    id: number;
    pokemonName: string;
  };
}
export interface Species {
  name: string;
  url: string;
}

export interface pokemonDetailProps {
  pokemon: {
    abilities: abilities[];
    id: number;
    name: string;
    image: string;
    weight: number;
    height: number;
    species: Species;
    types: pokemonType[];
    stats: Stats[];
  };
  evolutionChain: evolutionaryChain;
}

export interface pokemonType {
  slot: number;
  type: { name: string; url: string };
}
