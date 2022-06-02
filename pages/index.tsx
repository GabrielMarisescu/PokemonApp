import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
import { HomePageProps, Pokemon } from '../interfaces/main';

const Home: NextPage<HomePageProps> = ({ pokemon }: HomePageProps) => {
  return (
    <Layout title='Pokedex'>
      <h1 className='text-4xl mb-8 text-center'> Pokedex</h1>
      <ul>
        {pokemon.map((pokemon: Pokemon, index: number) => (
          <li key={index} className='flex justify-center'>
            <Link href={`/pokemonDetail?id=${index + 1}`}>
              <a className='bg-gray-200 mb-10 h-56 w-96 flex justify-center hover:shadow-md border-gray-600 text-lg rounded-md capitalize align-middle'>
                <div className='p-4  my-2'>
                  <div className='mr-2 font-bold flex justify-center mb-2'>
                    {index + 1}.{pokemon.name}
                  </div>
                  <Image
                    className='flex items-center justify-center'
                    src={pokemon.image}
                    alt={pokemon.name}
                    width={150}
                    height={150}
                  />
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150');
    const { results } = await res.json();
    const pokemon = results.map((pokemon: Pokemon, index: number) => {
      const paddedIndex = ('00' + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
      return {
        ...pokemon,
        image,
      };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.log(err);
  }
}

export default Home;
