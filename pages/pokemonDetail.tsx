import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import {
  pokemonDetailContext,
  pokemonDetailProps,
  pokemonType,
} from '../interfaces/main';
import { goToTop, pokemonSpeciesApiCall } from '../utils/main';
import StatsCard from '../components/StatsCard';
import logo from '../assets/pokeApiLogo.png';

//pokemonSpeciesApiCall
export default function Pokemon({ pokemon }: pokemonDetailProps) {
  const [evolutionaryChain, setEvolutionaryChain] = useState();
  useEffect(() => {
    console.log(pokemon, evolutionaryChain);
    goToTop();
  }, [evolutionaryChain, pokemon]);

  useEffect(() => {
    pokemonSpeciesApiCall(pokemon.id, setEvolutionaryChain);
  }, [pokemon.id]);

  console.log(evolutionaryChain);
  return (
    <Layout title={pokemon.name}>
      <>
        <p className=' mb-12 text-center'>
          <Link href='/'>
            <Image src={logo} alt='pokeapi logo' className=' cursor-pointer' />
          </Link>
        </p>
        <h1 className='text-4xl mb-2 text-center capitalize font-bold'>
          {pokemon.name}
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

        <h2 className='text-2xl mb-2 flex justify-center mt-10'>Statistics</h2>
        <StatsCard stats={pokemon.stats} />

        <h2 className='text-2xl mb-2 flex justify-center mt-10'>Types</h2>
        {pokemon.types.map((types: pokemonType, index: number) => (
          <p key={index} className='text-1xl flex justify-center font-bold'>
            {types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1)}
          </p>
        ))}

        <h2 className='text-2xl mb-2 flex justify-center mt-10'>Ability</h2>
        {pokemon.abilities.map((a, index: number) => (
          <p
            key={index}
            className='text-1xl flex justify-center mt-5 font-bold '
          >
            <div> {a.ability.name}</div>
          </p>
        ))}
      </>
    </Layout>
  );
}

export async function getServerSideProps(context: pokemonDetailContext) {
  const id = context.query.id;
  const pokemonName = context.query.pokemonName;
  try {
    const [pokemonRes, evolutionChainRes] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`),
      fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`),
    ]);

    const [pokemon, evolutionChain] = await Promise.all([
      pokemonRes.json(),
      evolutionChainRes.json(),
    ]);

    const paddedId = ('00' + id).slice(-3);
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}
