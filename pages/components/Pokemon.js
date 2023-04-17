import { Box, Modal } from '@mui/material'
import React from 'react'

export default function Pokemon() {
  return (
    <div>
        <Box>

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
                    image={launch.image}
                    title={launch.name}
                    />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {launch.name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
            </Modal>
    </div>
  )
}
