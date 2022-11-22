import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import {
  HeaderBar,
  UserControlWrapper,
  AppTitle,
  UserName,
  AppLogo,
  LogoWrapper,
  Separator,
} from './Header.styled';
import ModalLogout from '../../ModalLogout';

const Header = () => {
  return (
    <HeaderBar>
      <LogoWrapper>
        <AppLogo />
        <AppTitle>Wallet</AppTitle>
      </LogoWrapper>
      <div>
        <NavLink style={{ display: 'inline-block' }} to={'home'}>
          Home
        </NavLink>
        <NavLink to={'auth/login'} style={{ padding: 2 }}>
          Login
        </NavLink>
        <NavLink to={'auth/register'} style={{ padding: 2 }}>
          Register
        </NavLink>
      </div>
      <UserControlWrapper>
        <UserName>Name</UserName>
        <Media
          query="(min-width: 767px)"
          render={() => <Separator></Separator>}
        />
        <ModalLogout></ModalLogout>
      </UserControlWrapper>
    </HeaderBar>
  );
};

export default Header;
