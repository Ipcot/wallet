import { NavLink } from 'react-router-dom'
import ModalLogout from './ModalLogout';
import Button from '@mui/material/Button';


const Header = () => {
  
  return <div style={{height: 80, background: 'violet'}}>
   
    I'm header
   
    <NavLink style={{display: 'inline-block', marginLeft: 600, padding: 20}} to={'home'}>Home</NavLink>
    <NavLink to={'auth/login'} style={{padding: 20}}>Login</NavLink>
    <NavLink to={'auth/register'} style={{padding: 20}}>Register</NavLink>
    <Button type="button" variant="text" color="inherit"><ModalLogout/></Button>
     
  </div>
}

export default Header