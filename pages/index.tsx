import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home: NextPage = ({ pokemon }: any) => {
  console.log(pokemon);

  return (
    <Layout title='Pokedex'>
      <h1 className='text-4xl mb-8 text-center'> Pokedex</h1>

      <ul>
        {pokemon.map((pokeman: any, index: number) => (
          <li key={index}>
            <Link href={`/pokemonDetail?id=${index + 1}`}>
              <a className='border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md'>
                <img
                  src={pokeman.image}
                  alt={pokeman.name}
                  className='w-20 h-20 mr-3'
                />
                <span className='mr-2 font-bold'>{index + 1}.</span>
                {pokeman.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps(context: any) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150');
    const { results } = await res.json();
    const pokemon = results.map((pokemon: any, index: number) => {
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
