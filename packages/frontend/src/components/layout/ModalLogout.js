import {useState} from 'react';
import {Modal, Box, Button, Typography, Stack} from '@mui/material';
import { contentStyles } from './ModalLogout.styled';
import {ReactComponent as CloseSymbol} from '.././test/img/close.svg'

const ModalLogout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="text" color="inherit" onClick={handleOpen} 
      >Logout</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={contentStyles}>
            <Button type='button' onClick={handleClose} sx={{
                ml: 55,
                mt: -3,
                width: '16px',
                height: '16px',
                }}><CloseSymbol width='16'/></Button>
            <Typography mb={2} 
              variant="h4" 
              textAlign={'center'}
              fontWeight={700}
              fontFamily={'Arial, sans-serif'}
              >
              Are you sure you want to logout?
            </Typography>
            <Box sx={{
              width: 320,
              margin: '0 auto',
              }}>
              <img src="https://www.meme-arsenal.com/memes/f62a1fb31a58fa6a466ba878379702fa.jpg" alt='cat'/>
            </Box>
          <Stack spacing={1}
            mt={3}
            direction="column" 
            justifyContent="center" 
            alignItems="center">
              <Button variant='contained' onClick={handleClose}
               sx={{
                marginBottom: '10px'
               }} >LOG OUT</Button>
              <Button variant='outlined' color='secondary' onClick={handleClose}
                sx={{
                marginTop: '10px'
               }}>CANCEL</Button>
          </Stack>
          </Box>
      </Modal>
    </div>
  );
}

export default ModalLogout