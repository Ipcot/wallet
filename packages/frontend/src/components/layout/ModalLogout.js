import { useState } from 'react';
import { Modal, Box, Button, Typography, Stack } from '@mui/material';
import {
  LogoutImg,
  LogoutButton,
  UserExit,
  contentStyles,
  CloseBtn,
} from './ModalLogout.styled';
import Media from 'react-media';

const ModalLogout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <LogoutButton onClick={handleOpen}>
        <LogoutImg />
        <Media
          query="(min-width: 767px)"
          render={() => <UserExit>Exit</UserExit>}
        />
      </LogoutButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={[contentStyles]}>
          <Button
            sx={{
              width: '100%',
            }}
            type="button"
            onClick={handleClose}
          >
            <CloseBtn />
          </Button>
          <Typography mb={2} variant="h4" textAlign="center" fontWeight={500}>
            Are you sure you want to logout?
          </Typography>
          <Box
            sx={{
              width: 320,
              margin: '0 auto',
            }}
          >
            <img
              src="https://www.meme-arsenal.com/memes/f62a1fb31a58fa6a466ba878379702fa.jpg"
              alt="cat"
            />
          </Box>
          <Stack
            spacing={1}
            mt={3}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                marginBottom: '10px',
              }}
            >
              LOG OUT
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClose}
              sx={{
                marginTop: '10px',
              }}
            >
              CANCEL
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalLogout;
