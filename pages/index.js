import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import PokemonList from "../pages/components/PokemonList"
export default function Home({ pokemons }) {
  return (
    <PokemonList pokemons={pokemons}/>
  )
}



export async function getStaticProps() {

  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query GetPokemons {
        pokemons(first: 10) {
          id
    number
    name
    classification
    types
    resistant
    weaknesses
    image
       }
      }
    `
  });
    return {
      props: {
        pokemons: data.pokemons
      }
    }
  }


