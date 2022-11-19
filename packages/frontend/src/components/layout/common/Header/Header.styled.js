import styled from 'styled-components';

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    min-width: ${p => p.theme.breakpoints[1]};
    padding: 20px 32px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: ${p => p.theme.breakpoints[2]};
    margin-right: auto;
    margin-left: auto;
    padding: 20px 16px;
  }
`;

export const AppTitle = styled.p`
  font-family: ${p => p.theme.fonts.logo};
  font-size: 20px;
  line-height: 0.85;
  letter-spacing: 1.2px;
`;

export const UserName = styled.p`
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.textSecondary};
  margin-right: ${p => p.theme.space[3]}px;
`;

export const UserControlWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AppLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: ${p => p.theme.space[4]}px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;

export const LogoutImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const LogoutButton = styled.button`
  border: none;
`;
