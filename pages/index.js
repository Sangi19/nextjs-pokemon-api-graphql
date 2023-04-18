import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import PokemonList from "./components/PokemonList"
import { Fragment } from 'react';
import { CORE_POKEMON } from './fragment';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Home({ pokemons }) {
  return (
    <Paper>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
    alt="logo" sx={{mt:1}} height={75}width={300}/>
        <img src="https://thumbs.dreamstime.com/b/pokemon-ball-poke-isolated-white-background-d-illustration-74683385.jpg"alt="smallLogo" sx={{mt:1}}height={90} width={90}/>   
          
          </Box>
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
        <PokemonList key={pokemon.id} pokemon={pokemon}/>
        )
    }
  </Box>
  </Paper>
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
          weight{
            minimum
            maximum
          }
          height{
            minimum
            maximum
          }
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


