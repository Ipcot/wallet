import { NavLink } from 'react-router-dom';
import { Container } from './SystemLayout.styled'
import { Button } from '@mui/material';
import ModalLogout from './ModalLogout';

import { Header as HeaderStyled} from './Header.styled.js'

const Header = () => {
  return <HeaderStyled>
    <Container>
      I'm header

      <NavLink style={{ display: 'inline-block', marginLeft: 600, padding: 20 }} to={'home'}>Home</NavLink>
      <NavLink to={'auth/login'} style={{ padding: 20 }}>Login</NavLink>
      <NavLink to={'auth/register'} style={{ padding: 20 }}>Register</NavLink>
      <Button type='button' variant='text' color='inherit'><ModalLogout/></Button>
    </Container>
  </HeaderStyled>
}

export default Header
