import Media from 'react-media';
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
