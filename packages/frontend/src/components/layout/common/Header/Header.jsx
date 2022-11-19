// import { NavLink } from 'react-router-dom';
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
        <Media query="(min-width: 767px)" render={() => <Separator></Separator>} />
        <LogoutButton>
          <LogoutImg src={logoutIco} />
          <Media query="(min-width: 767px)" render={() => <UserExit>Exit</UserExit>} />
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
