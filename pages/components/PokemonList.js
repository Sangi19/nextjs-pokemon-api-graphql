import React from 'react'
import Box from '@mui/material/Box';
import { Card, CardMedia, CardContent, Typography, Modal} from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Pokemon from './Pokemon';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height:600,};
  
const styleEV = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    height:600,
    p: 4,};



export default function PokemonList({pokemon}) {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache()
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openEV, setOpenEV] = React.useState(false);
  const [pokemonEV, setPokemonEV] = React.useState();

  const POKEMONEV_QUERY = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      name
      evolutions {
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        evolutions {
          id
          number
          name
          evolutions {
            id
            name
            image
            evolutionRequirements {
              amount
              name
              
            }
          }
        }
        maxHP
        image
      }
    }
  }
  
`;

  const  handleOpenEV = async (pokemon) => {
    const { data } = await client.query({
      query: POKEMONEV_QUERY,
      variables: { id: pokemon.id, name: pokemon.name}})
      setPokemonEV(data.pokemon);
      setOpenEV(true);
}
const handleCloseEV = () => setOpenEV(false);

  return (
    <div>
      <Box sx={{mb:2}} key={pokemon.id}>
        <Card sx={{  maxWidth: 345}} onClick={handleOpen} >
          <CardMedia
            sx={{ mx:10,my:2,height: 175,width: 175, }}
            image={pokemon.image}
            title={pokemon.name}
            />
          <CardContent>
            <Typography variant="h5" color="text.secondary">
              <bold>#{pokemon.number}</bold>
            </Typography>
            <Typography variant="h4">
              {pokemon.name}
            </Typography>
            <Typography variant="body2" color='blue'>                        
              {pokemon.types.map((item)=> 
            <Button variant='contained'  sx={{mr:1}}size="small" color="inherit" >{item}</Button>) }
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Modal open={open}>
        <Box   sx={style} >
          <IconButton aria-label="close"  sx={{ml:85}} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Box sx={{display:'flex',justifyContent:"space-around"}}>
            <Box> 
              <Typography  variant="h3" component="h2" sx={{mb:5}}>
                {pokemon.name}
              </Typography>
              <CardMedia
                sx={{ mx:1,my:1,height: 275,width: 275, }}
                image={pokemon.image}
                title={pokemon.name}
                />
            </Box>
            <Box>
              <Typography variant="h6"  sx={{ mt: 1 }}>
                Height 
              </Typography>
              <Typography   variant="subtitle2"  sx={{ mt: 1 }}> 
                {pokemon.height.minimum} -  {pokemon.height.maximum}
              </Typography>
              <Typography variant="h6"  sx={{ mt: 1 }}>
                Weight  
              </Typography>
              <Typography variant="subtitle2"  sx={{ mt: 1 }}>
                {pokemon.weight.minimum} - {pokemon.weight.maximum}
              </Typography>
              <Typography variant="h6"  sx={{ mt: 1 }}>
                Classification 
              </Typography>
              <Typography variant="subtitle2"  sx={{ mt: 1 }}> 
                {pokemon.classification}
              </Typography>
              <Typography variant="h6"  sx={{ mt: 1 }}>
                Type  
              </Typography>
              <Typography  variant="subtitle2" sx={{ mt: 1 }}> 
                {pokemon.types.map(item=>item+" ")}
              </Typography>
              <Typography  variant="h6" sx={{ mt: 1 }}>
                Weakness 
               </Typography>
              <Typography variant="subtitle2"  sx={{ mt: 1 }}> 
                {pokemon.weaknesses.map(item=>item+" ")}
              </Typography>
              <Typography variant="h6"  sx={{ mt: 1 }}>
                Resistance 
              </Typography>
              <Typography variant="subtitle2"  sx={{ mt: 1 }}> 
                {pokemon.resistant.map(item=>item+" ")}
              </Typography>
            </Box>
          </Box>
          <Button size="large" sx={{color:'black',mt:4,ml:10}} endIcon={<DoubleArrowIcon />} onClick={()=>handleOpenEV(pokemon)}>
            Evolutions
          </Button>
          <Modal open={openEV}>
             <Box sx={styleEV}>
                <IconButton aria-label="close"  sx={{ml:85}} onClick={handleCloseEV}>
                  <CloseIcon />
                </IconButton>
                <Box  sx={{ml:23}}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNdk83YYtFGqbpYzy-q0CYFsHnP6f9_n5nCQ&usqp=CAU" alt='ev'/>
                </Box>
                <Pokemon pokemonEV={pokemonEV} />
             </Box>
          </Modal>
        </Box>
      </Modal>
  </div>
  )
}