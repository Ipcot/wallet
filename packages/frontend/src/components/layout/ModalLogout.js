import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'store/auth';
import { Modal, Box, Button, Typography, Stack } from '@mui/material';
import {
  LogoutImg,
  LogoutButton,
  UserExit,
  contentStyles,
  CloseBtnSymbol,
  modalImg,
  modalHeding,
  ConfirmButton,
  CloseBtn,
} from './ModalLogout.styled';
import Media from 'react-media';

const ModalLogout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.logOut());
    handleClose();
  };

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
          <Button sx={CloseBtn} type="button" onClick={handleClose}>
            <CloseBtnSymbol />
          </Button>
          <Typography sx={modalHeding}>
            Are you sure you want to logout?
          </Typography>
          <Box sx={modalImg}>
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
              sx={ConfirmButton}
              onClick={handleClick}
            >
              LOG OUT
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={ConfirmButton}
              onClick={handleClose}
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
