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
  LogoButton,
} from './Header.styled';
import ModalLogout from '../../ModalLogout';
import { useSelector } from 'react-redux';
import authSelectors from 'store/auth/authSelectors';

const Header = () => {
  const user = useSelector(authSelectors.getUser);
  const userName = user?.name;

  return (
    <HeaderBar>
      <LogoWrapper>
        <LogoButton to={'/home'}>
          <AppLogo />
          <AppTitle>Wallet</AppTitle>
        </LogoButton>
      </LogoWrapper>
      <UserControlWrapper>
        <UserName>{userName}</UserName>
        <Media
          query="(min-width: 767px)"
          render={() => <Separator></Separator>}
        />
        <ModalLogout />
      </UserControlWrapper>
    </HeaderBar>
  );
};

export default Header;
