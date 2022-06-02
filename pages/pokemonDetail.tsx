import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import {
  pokemonDetailContext,
  pokemonDetailProps,
  pokemonType,
} from '../interfaces/main';
import { goToTop } from '../utils/main';

export default function Pokemon({ pokemon }: pokemonDetailProps) {
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <Layout title={pokemon.name}>
      <p className=' mb-12 text-center'>
        <Link href='/'>
          <a className='text-3xl'>Home</a>
        </Link>
      </p>
      <h1 className='text-4xl mb-2 text-center capitalize font-bold'>
        {pokemon.id} {pokemon.name}
      </h1>
      <div className='flex justify-center align-center'>
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={200}
          height={200}
        />
      </div>

      <div className=' flex justify-center'>
        <p>
          <span className='font-bold mr-2'>Weight:</span>
          &nbsp;{pokemon.weight / 10} kg
        </p>
        <p>
          <span className='font-bold ml-10'>Height:</span>
          &nbsp;{pokemon.height / 10} m
        </p>
      </div>

      <h2 className='text-2xl mb-2 flex justify-center mt-10'>Types</h2>
      {pokemon.types.map((types: pokemonType, i: number) => (
        <p key='index' className='text-1xl flex justify-center'>
          {types.type.name}
        </p>
      ))}
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
