import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import PokemonList from "./components/PokemonList"
import { Fragment } from 'react';
import { CORE_POKEMON } from './fragment';
import { Box } from '@mui/material';
export default function Home({ pokemons }) {
  return (
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'space-between',
      mx:4,my:4
    }}
  >
    {
        pokemons.map((pokemon)=> 
        <PokemonList pokemon={pokemon}/>
        )
    }
  </Box>
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


