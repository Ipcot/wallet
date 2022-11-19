import Media from 'react-media';
import HomeIco from '../../img/home-page/HomeIco.svg';
import Diagram from '../../img/home-page/DiagramIco.svg';
import ExchangeRate from '../../img/home-page/DollarIco.svg';
import { ButtonsList, ButtonItem, ButtonsWrapper, ButtonsListItem } from './HomeButtons.styled';

const HomeButtons = () => {
  return (
    <ButtonsWrapper>
      <Media
        query="(max-width: 767px)"
        render={() => (
          <ButtonsList>
            <ButtonsListItem>
              <ButtonItem>
                <img src={HomeIco} alt={'home'}></img>
              </ButtonItem>
            </ButtonsListItem>
            <ButtonsListItem>
              <ButtonItem>
                <img src={Diagram} alt={'diagram'}></img>
              </ButtonItem>
            </ButtonsListItem>
            <ButtonsListItem>
              <ButtonItem>
                <img src={ExchangeRate} alt={'ExchangeRate'}></img>
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
                <img src={HomeIco} alt={'home'}></img>
                Home
              </ButtonItem>
            </ButtonsListItem>
            <ButtonsListItem>
              <ButtonItem>
                <img src={Diagram} alt={'diagram'}></img>
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
