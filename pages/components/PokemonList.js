import React from 'react'
import Box from '@mui/material/Box';
import { Card, CardMedia, CardContent, Typography, Modal} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function PokemonList({pokemon}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box
          // sx={{
          //   display: 'flex',
          //   flexWrap: 'wrap',
          //   justifyContent:'space-between',
          //   mx:4,my:4
          // }}
          onClick={handleOpen}
        >
        
            <Box sx={{mb:2}} key={pokemon.id}
             onClick={handleClose}>
              <Card
                sx={{
                  maxWidth: 345
                }}                
                >
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
                      {pokemon.types.map((item)=> (item)+" ") }
                    </Typography>
                 </CardContent>
              </Card>
            </Box>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
              <Box sx={style}>
                  <CardMedia
                      sx={{ mx:10,my:2,height: 200,width: 200, }}
                      image={pokemon.image}
                      title={pokemon.name}
                      />
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                      {pokemon.name}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
              </Box>
            </Modal>
      </Box>
  </div>
  )
}
