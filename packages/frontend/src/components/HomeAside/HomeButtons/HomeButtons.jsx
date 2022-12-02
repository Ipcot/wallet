import Media from 'react-media';
import {
  ButtonsList,
  ButtonItem,
  ButtonsWrapper,
  ButtonsListItem,
  HomeIcon,
  DiagramIcon,
  DollarIcon,
  Span,
} from './HomeButtons.styled';

const HomeButtons = () => {
  return (
    <ButtonsWrapper>
      <Media
        query="(max-width: 767px)"
        render={() => (
          <>
            <ButtonsList>
              <ButtonsListItem>
                <ButtonItem to={'/home'}>
                  <HomeIcon />
                </ButtonItem>
              </ButtonsListItem>
              <ButtonsListItem>
                <ButtonItem to={'/statistics'}>
                  <DiagramIcon />
                </ButtonItem>
              </ButtonsListItem>
              <ButtonsListItem>
                <ButtonItem to={'/currency'}>
                  <DollarIcon />
                </ButtonItem>
              </ButtonsListItem>
            </ButtonsList>
          </>
        )}
      />
      <Media
        query="(min-width: 768px)"
        render={() => (
          <ButtonsList>
            <ButtonsListItem>
              <ButtonItem to={'/home'}>
                <HomeIcon />
                <Span to={'/home'}>Home</Span>
              </ButtonItem>
            </ButtonsListItem>
            <ButtonsListItem>
              <ButtonItem to={'/statistics'}>
                <DiagramIcon />
                <Span to={'/statistics'}>Statistics</Span>
              </ButtonItem>
            </ButtonsListItem>
          </ButtonsList>
        )}
      />
    </ButtonsWrapper>
  );
};

export default HomeButtons;
