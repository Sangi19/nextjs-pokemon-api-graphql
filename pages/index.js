import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import PokemonList from "./components/PokemonList"
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';

export default function Home({ pokemons }) {
  const [page, setPage] = useState(1);
  const [lists,setLists]=useState(pokemons.slice(0,20));
  const handleChange = (event, value) => {
    if(value===1)
    setLists(pokemons.slice(0,20))
    if(value===2)
    setLists(pokemons.slice(20,40))
    if(value===3)
    setLists(pokemons.slice(40,60))
    if(value===4)
    setLists(pokemons.slice(60,80))
    if(value===5)
    setLists(pokemons.slice(80,100))
    if(value===6)
    setLists(pokemons.slice(100,120))
    if(value===7)
    setLists(pokemons.slice(120,140))
    if(value===8)
    setLists(pokemons.slice(140,160))
    setPage(value);
  };

  return (
    <Paper>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="logo" sx={{mt:1}} height={75}width={300}/>
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
            {lists.map((pokemon)=>
              <div key={pokemon.id}>
                <PokemonList key={pokemon.id} pokemon={pokemon}/>
              </div> 
              )
            }
        </Box>
        <Pagination color="primary"  size="large" count={8} page={page} onChange={handleChange}/>
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
        pokemons(first: 160) {
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
  });
    return {
      props: {
        pokemons: data.pokemons
      }
    }
  }


