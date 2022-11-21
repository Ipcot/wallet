import styled from 'styled-components';
import { ReactComponent as HomeActive } from '../../img/home-aside/home-active.svg';
import { ReactComponent as DiagramActive } from '../../img/home-aside/diagram-active.svg';
import { ReactComponent as DollarActive } from '../../img/home-aside/dollar-active.svg';
import { NavLink } from 'react-router-dom';

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    flex-direction: column;
  }
`;

export const ButtonsListItem = styled.li`
  padding-right: 35px;
  &:last-child {
    padding-right: 0px;
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-bottom: 12px;
    &:last-child {
      padding-bottom: 0;
    }
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-bottom: 12px;
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

export const ButtonItem = styled(NavLink)`
  display: flex;
  align-items: center;
  border: none;
`;

export const ButtonsWrapper = styled.div`
  padding: 12px 0px;
  display: flex;
  justify-content: center;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: 40px;
    padding-left: 32px;
    justify-content: flex-start;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-top: 40px;
    padding-left: 16px;
    /* justify-content: flex-start; */
  }
`;

export const HomeIcon = styled(HomeActive)`
  color: ${p => p.theme.colors.notActive};
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.secondary};
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 18px;
    height: 18px;
    margin-right: 25px;
  }
`;

export const DiagramIcon = styled(DiagramActive)`
  color: ${p => p.theme.colors.notActive};
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.secondary};
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 18px;
    height: 18px;
    margin-right: 25px;
  }
`;

export const DollarIcon = styled(DollarActive)`
  color: ${p => p.theme.colors.notActive};
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.secondary};
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 18px;
    height: 18px;
  }
`;
