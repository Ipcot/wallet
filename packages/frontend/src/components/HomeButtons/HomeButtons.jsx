import Media from 'react-media';
import { ReactComponent as HomeActive } from '../../img/home-aside/home-active.svg';
import { ReactComponent as DiagramActive } from '../../img/home-aside/diagram-active.svg';
import { ReactComponent as DollarActive } from '../../img/home-aside/dollar-active.svg';
import {
  ButtonsList,
  ButtonItem,
  ButtonsWrapper,
  ButtonsListItem,
  HomeIcon,
  DiagramIcon,
  DollarIcon,
} from './HomeButtons.styled';

const HomeButtons = () => {
  return (
    <ButtonsWrapper>
      <Media
        query="(max-width: 767px)"
        render={() => (
          <ButtonsList>
            <ButtonsListItem>
              <ButtonItem>
                <HomeIcon />
              </ButtonItem>
            </ButtonsListItem>
            <ButtonsListItem>
              <ButtonItem>
                <DiagramIcon />
              </ButtonItem>
            </ButtonsListItem>
            <ButtonsListItem>
              <ButtonItem>
                <DollarIcon />
              </ButtonItem>
            </ButtonsListItem>
          </ButtonsList>
        )}
      />
      <Media
        query="(min-width: 768px)"
        render={() => (
          <ButtonsList>
            <ButtonsListItem>
              <ButtonItem>
                <HomeIcon />
                Home
              </ButtonItem>
            </ButtonsListItem>
            <ButtonsListItem>
              <ButtonItem>
                <DiagramIcon />
                Statistics
              </ButtonItem>
            </ButtonsListItem>
          </ButtonsList>
        )}
      />
    </ButtonsWrapper>
  );
};

export default HomeButtons;
