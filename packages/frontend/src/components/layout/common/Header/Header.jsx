// import { NavLink } from 'react-router-dom';
import {
  HeaderBar,
  UserControlWrapper,
  AppTitle,
  UserName,
  AppLogo,
  LogoWrapper,
  LogoutImg,
  LogoutButton,
} from './Header.styled';
import logoutIco from '../../../../img/header/LogoutButton.svg';
import walletIco from '../../../../img/header/WalletIco.svg';

const Header = () => {
  return (
    <HeaderBar>
      <LogoWrapper>
        <AppLogo src={walletIco} />
        <AppTitle>Wallet</AppTitle>
      </LogoWrapper>

      <UserControlWrapper>
        <UserName>Name</UserName>
        <LogoutButton>
          <LogoutImg src={logoutIco} />
        </LogoutButton>
      </UserControlWrapper>
      {/* I'm header
      <NavLink style={{ display: 'inline-block', marginLeft: 600, padding: 20 }} to={'home'}>
        Home
      </NavLink>
      <NavLink to={'auth/login'} style={{ padding: 20 }}>
        Login
      </NavLink>
      <NavLink to={'auth/register'} style={{ padding: 20 }}>
        Register
      </NavLink> */}
    </HeaderBar>
  );
};

export default Header;
