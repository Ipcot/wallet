import { Switch, styled } from '@mui/material';

export const CustomSwitch = styled(Switch)(({ theme }) => ({
  color: theme.palette.success.main,
  width: 88,
  height: 50,
  padding: 0,
  overflow: 'visible',
  opacity: 1,

  '& .MuiSwitch-switchBase': {
    padding: 0,
    zIndex: 10,
    backgroundImage: 'url("./img/plus.svg")',

    '& .MuiSwitch-thumb': {
      width: 44,
      height: 44,
      background: '#24CCA7',
      boxShadow: '0px 6px 15px rgba(36, 204, 167, 0.5)',

    },

    '&.Mui-checked': {
      transform: 'translateX(40px)',

      '& .MuiSwitch-thumb': {
        background: theme.palette.info.main,
        boxShadow: '0px 6px 15px rgba(255, 101, 150, 0.5)',
      },

      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url(${theme.images.minus})`,
      },
    },
  },

  '& .MuiSwitch-thumb': {
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${theme.images.plus})`,
    },
  },

  '& .MuiSwitch-track': {
    width: 80,
    height: 40,
    background: 'transparent',
    transform: 'translateY(2px)',
    borderRadius: 30,
    border: '1px solid #b3b3b3',
    opacity: 1,
  },

  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    background: 'transparent',
    opacity: 1,
  }
}));