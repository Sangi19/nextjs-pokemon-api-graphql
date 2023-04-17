import React from 'react'
import Box from '@mui/material/Box';
import { Card, CardMedia, CardContent, Typography} from '@mui/material';

export default function PokemonList({pokemons}) {
  return (
    <div>
      <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent:'space-between',
            mx:4,my:4
          }}
        >
       {pokemons.map(launch => {
          return (
            <Box sx={{mb:2}} key={launch.id}>
              <Card
                sx={{
                  maxWidth: 345
                }}                
                >
                    <CardMedia
                      sx={{ mx:10,my:2,height: 175,width: 175, }}
                      image={launch.image}
                      title={launch.name}
                      />
                    <CardContent>
                      <Typography variant="h5" color="text.secondary">
                        <bold>#{launch.number}</bold>
                      </Typography>
                      <Typography variant="h4">
                      {launch.name}
                      </Typography>
                      <Typography variant="body2" color='blue'>                        
                        {launch.types.map((item)=> (item)+" ") }
                      </Typography>
                </CardContent>

              </Card>
          </Box>
        );                                      
       })}
      </Box>
  </div>
  )
}
