import React from 'react'
import { Card, CardMedia, Typography,Box} from '@mui/material';

export default function Pokemon({pokemonEV}) {

return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      }}>
        {pokemonEV?.evolutions===null?
        <Box sx={{ml:27}}>
          <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"alt='notFound' height={300}/>
        </Box> :
        pokemonEV?.evolutions.map((ev)=>
          <Box sx={{ mx:4,my:4}}>
            <Card
              sx={{
                maxWidth: 300,borderRadius:50
              }}                
              >
              <CardMedia
                sx={{ mx:10,my:2,height: 175,width: 175, }}
                image={ev.image}
                title={ev.name}
                />
            </Card>
            <Box sx={{ml:7}}>
              <Typography variant="h4">
                {ev.name}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                <bold>#{ev.number}</bold>
              </Typography>
            </Box>
        </Box>
        )}
    </Box>
  )
}
