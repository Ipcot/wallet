import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import {
  HeaderBar,
  UserControlWrapper,
  AppTitle,
  UserName,
  AppLogo,
  LogoWrapper,
  LogoutImg,
  LogoutButton,
  Separator,
  UserExit,
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
        <NavLink to={'auth/login'} style={{ padding: 5 }}>
          Login
        </NavLink>
        <NavLink to={'auth/register'} style={{ padding: 5 }}>
          Register
        </NavLink>
      </div>
      <UserControlWrapper>
        <UserName>Name</UserName>
        <Media
          query="(min-width: 767px)"
          render={() => <Separator></Separator>}
        />
        <LogoutButton type="button" variant="text" color="inherit">
          <LogoutImg />
          <Media
            query="(min-width: 767px)"
            render={() => <UserExit>Exit</UserExit>}
          />
        </LogoutButton>
        <ModalLogout></ModalLogout>
      </UserControlWrapper>
    </HeaderBar>
  );
};

export default Header;
