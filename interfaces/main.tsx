import React, { PropsWithChildren } from 'react';

export interface LayoutProps {
  title: string;
  children: PropsWithChildren<React.ReactNode>;
}

export interface HomePageProps {
  pokemon: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
  image: string;
}

export interface pokemonDetailContext {
  query: { id: number };
}

export interface pokemonDetailProps {
  pokemon: {
    id: number;
    name: string;
    image: string;
    weight: number;
    height: number;
    types: pokemonType[];
  };
}

export interface pokemonType {
  slot: number;
  type: { name: string; url: string };
}
