import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import PokemonList from "./components/PokemonList"
import { Fragment } from 'react';
import { CORE_POKEMON } from './fragment';
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
        pokemons(first: 20) {
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
    // ,
    // evolvequery:gql`
    // ${CORE_POKEMON}
    // query pokemon($id: String, $name: String){
    //   pokemon(id: $id, name: $name){
    //    id
    //     name
    //     evolutions{
    //       id
    //       number
    //       name
    //       classification
    //       types
    //       resistant
    //       weaknesses
    //       fleeRate
    //       maxCP
    //       evolutions{
    //         ...RecursivePokemonFragment
    //       }
    //       maxHP
    //       image
    //     }
    //   }
    // }` 
  });
    return {
      props: {
        pokemons: data.pokemons,
        // pokemon:data.pokemon
      }
    }
  }


