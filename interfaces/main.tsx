import React, { PropsWithChildren } from 'react';

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
    name: string;
  };
}

export interface pokemonDetailProps {
  pokemon: {
    abilities: abilities[];
    id: number;
    name: string;
    image: string;
    weight: number;
    height: number;
    types: pokemonType[];
    stats: Stats[];
  };
}

export interface pokemonType {
  slot: number;
  type: { name: string; url: string };
}
export interface Stat {
  name: string;
  url: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}
