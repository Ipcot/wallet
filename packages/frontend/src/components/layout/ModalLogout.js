import {useState} from 'react';
import {Modal, Box, Button, Typography, Stack} from '@mui/material';
import { ButtonUnstyled, buttonUnstyledClasses } from '@mui/base';
import CloseIcon from '@mui/icons-material/Close';
import {styled} from '@mui/system';
import "@fontsource/poppins";

const contentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 540,
  fontFamily: 'Circe, sans-serif',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 4
};

const primaryColor = '#24CCA7';
const secondaryColor = '#fff';
const alternateColor = '#4A56E2';
const activeColor = '#FF6596';

const CustomButton = styled(ButtonUnstyled)(
      ({ theme }) => `
      font-size: 0.875rem;
      font-family: Poppins, sans-serif;
      background-color: ${primaryColor};
      padding: 12px 24px;
      border-radius: 20px;
      color: white;
      transition: all 150ms ease;
      cursor: pointer;
      border: none;
      width: 300px;
      margin-bottom: 12px;
     
    
      &:hover {
        background-color: ${alternateColor};
        color: ${secondaryColor};
      }
  
      &:last-child {
        background-color : ${secondaryColor};
        color: ${alternateColor};
        border: 1px solid;
        border-color: ${alternateColor};
      }
  
      &:last-child:hover{
        background-color : ${alternateColor};
        color: ${secondaryColor};
        border: none;
      }
    
      &.${buttonUnstyledClasses.active} {
        background-color: ${activeColor};
      }
    
      &.${buttonUnstyledClasses.focusVisible} {
        box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
      }
    
      &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
      }
      `,
    );

const ModalLogout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="text" color="inherit" onClick={handleOpen}>Logout</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={contentStyle}>
            <Button type='button' onClick={handleClose} sx={{
                ml: 55,
                mt: -3,
                }}><CloseIcon></CloseIcon></Button>
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
              <CustomButton onClick={handleClose}
                >LOG OUT</CustomButton>
              <CustomButton onClick={handleClose}
              >CANCEL</CustomButton>
          </Stack>
          </Box>
      </Modal>
    </div>
  );
}

export default ModalLogout