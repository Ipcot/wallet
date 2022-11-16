import { NavLink } from 'react-router-dom'

const Header = () => {
  return <div style={{height: 80, background: 'violet'}}>
    I'm header

    <NavLink style={{display: 'inline-block', marginLeft: 600, padding: 20}} to={'home'}>Home</NavLink>
    <NavLink to={'auth/login'} style={{padding: 20}}>Login</NavLink>
    <NavLink to={'auth/register'} style={{padding: 20}}>Register</NavLink>
  </div>
}

export default Header