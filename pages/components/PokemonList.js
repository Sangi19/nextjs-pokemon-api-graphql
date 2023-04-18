import React from 'react'
import Box from '@mui/material/Box';
import { Card, CardMedia, CardContent, Typography, Modal, Grid, Paper} from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
// import "./pokemonList.css"

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
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,};



export default function PokemonList({pokemon}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openEV, setOpenEV] = React.useState(false);
  const handleOpenEV = () => setOpenEV(true);
  const handleCloseEV = () => setOpenEV(false);
  return (
    <div>
        <Box sx={{mb:2}} key={pokemon.id}>
              <Card
                sx={{
                  maxWidth: 345
                }}                
                  onClick={handleOpen}
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
                      {pokemon.types.map((item)=> 
        <Button variant='contained'  sx={{mr:1}}size="small" color="inherit" >{item}</Button>) }
                    </Typography>
                 </CardContent>
              </Card>
            </Box>
            <Modal
              open={open}
              >
              <Box   sx={style} >
              <IconButton aria-label="close"  sx={{ml:85}} onClick={handleClose}>
        <CloseIcon />
      </IconButton>
                <Box sx={{display:'flex',justifyContent:"space-around"}}>
                 <Box> <Typography  variant="h3" component="h2" sx={{mb:5}}>
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
                 Height </Typography>
                  <Typography   variant="subtitle2"  sx={{ mt: 1 }}> {pokemon.height.minimum} -  {pokemon.height.maximum}
                  </Typography>
                  <Typography variant="h6"  sx={{ mt: 1 }}>
                 Weight  </Typography>
                  <Typography variant="subtitle2"  sx={{ mt: 1 }}>{pokemon.weight.minimum} - {pokemon.weight.maximum}
                  </Typography>
                  <Typography variant="h6"  sx={{ mt: 1 }}>
                  Classification </Typography>
                  <Typography variant="subtitle2"  sx={{ mt: 1 }}> {pokemon.classification}
                  </Typography>
                  <Typography variant="h6"  sx={{ mt: 1 }}>
                 Type  </Typography>
                  <Typography  variant="subtitle2" sx={{ mt: 1 }}> {pokemon.types.map(item=>item+" ")}
                  </Typography>
                  <Typography  variant="h6" sx={{ mt: 1 }}>
                  Weakness </Typography>
                  <Typography variant="subtitle2"  sx={{ mt: 1 }}> {pokemon.weaknesses.map(item=>item+" ")}
                  </Typography>
                  <Typography variant="h6"  sx={{ mt: 1 }}>
                 Resistance </Typography>
                  <Typography variant="subtitle2"  sx={{ mt: 1 }}> {pokemon.resistant.map(item=>item+" ")}
                  </Typography>
                  </Box>
                  </Box>
                  <Button size="large" sx={{color:'black',mt:4,ml:10}} endIcon={<DoubleArrowIcon />} onClick={handleOpenEV}>
                  Evolutions
                </Button>
                <Modal
        open={openEV}
        onClose={handleCloseEV}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEV}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
              </Box>
            </Modal>
  </div>
  )
}
