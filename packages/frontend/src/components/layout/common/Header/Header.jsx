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
import logoutIco from '../../../../img/header/LogoutButton.svg';
import walletIco from '../../../../img/header/WalletIco.svg';
import ModalLogout from './ModalLogout';

const Header = () => {
  return (
    <HeaderBar>
      <LogoWrapper>
        <AppLogo src={walletIco} />
        <AppTitle>Wallet</AppTitle>
      </LogoWrapper>
      <div>
        <NavLink
          style={{ display: 'inline-block', marginLeft: 600, padding: 20 }}
          to={'home'}
        >
          Home
        </NavLink>
        <NavLink to={'auth/login'} style={{ padding: 20 }}>
          Login
        </NavLink>
        <NavLink to={'auth/register'} style={{ padding: 20 }}>
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
          <LogoutImg src={logoutIco} />
          <Media
            query="(min-width: 767px)"
            render={() => <UserExit>Exit</UserExit>}
          />
          <ModalLogout />
        </LogoutButton>
      </UserControlWrapper>
    </HeaderBar>
  );
};

export default Header;
