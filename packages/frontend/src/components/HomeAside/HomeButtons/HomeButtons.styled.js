import styled from '@emotion/styled';
import { ReactComponent as HomeActive } from '../../../img/home-aside/home-active.svg';
import { ReactComponent as DiagramActive } from '../../../img/home-aside/diagram-active.svg';
import { ReactComponent as DollarActive } from '../../../img/home-aside/dollar-active.svg';
import { NavLink } from 'react-router-dom';

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    flex-direction: column;
  }
`;

export const ButtonsListItem = styled.li`
  padding-right: 35px;
  &:last-child {
    padding-right: 0px;
  }

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    margin-bottom: 12px;
    padding-right: 0px;
    &:last-child {
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    margin-bottom: 12px;
    padding-right: 0px;
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

export const ButtonItem = styled(NavLink)`
  display: flex;
  align-items: center;
  border: none;
  font-family: ${p => p.theme.fonts.navLink};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  &:hover,
  &:focus,
  &:active {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 40px;

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    /* padding-top: 40px;
    padding-left: 32px; */
    justify-content: flex-start;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    /* padding-top: 40px;
    padding-left: 16px; */

    justify-content: flex-start;
  }
`;

export const HomeIcon = styled(HomeActive)`
  color: ${p => p.theme.palette.colors.notActive};
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.palette.colors.secondary};
  }
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 18px;
    height: 18px;
    margin-right: 25px;
  }
`;

export const DiagramIcon = styled(DiagramActive)`
  color: ${p => p.theme.palette.colors.notActive};
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.palette.colors.secondary};
  }
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 18px;
    height: 18px;
    margin-right: 25px;
  }
`;

export const DollarIcon = styled(DollarActive)`
  color: ${p => p.theme.palette.colors.notActive};
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.palette.colors.secondary};
  }
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 18px;
    height: 18px;
  }
`;
