import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/Link';
import Image from 'next/image';
import {
  pokemonDetailContext,
  pokemonDetailProps,
  pokemonType,
} from '../interfaces/main';

export default function pokemon({ pokemon }: pokemonDetailProps) {
  console.log(pokemon);

  return (
    <Layout title={pokemon.name}>
      <h1 className='text-4xl mb-2 text-center capitalize'>
        {pokemon.id}. {pokemon.name}
      </h1>
      <Image src={pokemon.image} alt={pokemon.name} width={200} height={200} />

      <p>
        <span className='font-bold mr-2'>Weight:</span> {pokemon.weight}
      </p>
      <p>
        <span className='font-bold mr-2'>Height:</span>
        {pokemon.height}
      </p>
      <h2 className='text-2xl mt-6 mb-2'>Types</h2>
      {pokemon.types.map((types: pokemonType, i: number) => (
        <p key='index'>{types.type.name}</p>
      ))}
      <p className='mt-10 text-center'>
        <Link href='/'>
          <a className='text-2xl underline'>Home</a>
        </Link>
      </p>
    </Layout>
  );
}

export async function getServerSideProps(context: pokemonDetailContext) {
  const id = context.query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();
    const paddedId = ('00' + id).slice(-3);
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}
